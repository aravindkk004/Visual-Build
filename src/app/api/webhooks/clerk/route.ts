import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent, clerkClient } from "@clerk/nextjs/server";
import { createUser } from "@/libs/actions/user.action";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  // ✅ Await headers()
  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return NextResponse.json(
      { error: "Error occurred -- missing svix headers" },
      { status: 400 }
    );
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("❌ Error verifying webhook:", err);
    return NextResponse.json({ error: "Error verifying webhook" }, { status: 400 });
  }

  const eventType = evt.type;

  if (eventType === "user.created") {
    const { id: clerkId, email_addresses } = evt.data;

    const user = {
      clerkId,
      email: email_addresses[0].email_address,
    };

    console.log("📩 Clerk webhook received:", user);

    const newUser = await createUser(user);

    if (newUser) {
      // ✅ Await the client before accessing users
      const client = await clerkClient();
      await client.users.updateUserMetadata(clerkId, {
        publicMetadata: {
          userId: newUser._id,
        },
      });
    }

    return NextResponse.json({
      message: "✅ User added successfully",
      user: newUser,
    });
  }

  console.log(`ℹ️ Webhook received with ID: ${evt.data.id}, type: ${eventType}`);
  console.log("Payload:", body);

  return NextResponse.json({ message: "success" }, { status: 200 });
}
