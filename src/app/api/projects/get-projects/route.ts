import { getAuth } from "@clerk/nextjs/server";
import { connectToDb } from "@/libs/connectToDb";
import { NextRequest, NextResponse } from "next/server";
import Project from "@/models/ProjectSchema";

export async function GET(req: NextRequest) {
  try {
    const { userId } = getAuth(req);
    if (!userId) {
      return NextResponse.json(
        { message: "Unauthorized"},
        { status: 401 }
      );
    }
    await connectToDb();
    const projects = await Project.find({ clerkId: userId });
    return NextResponse.json(
      { message: "Projects fetched successfully", projects },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { message: "Error while fetching the projects" },
      { status: 500 }
    );
  }
}
