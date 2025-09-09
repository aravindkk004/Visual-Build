import User, { IUser } from "@/models/userSchema";
import { connectToDb } from "@/libs/connectToDb";

export async function createUser(user: Partial<IUser>) {
  try {
    await connectToDb();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.error("❌ Error creating user:", error);
    throw error;
  }
}
