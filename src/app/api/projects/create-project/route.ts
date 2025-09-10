import { NextResponse, NextRequest } from "next/server";
import { getAuth } from "@clerk/nextjs/server";
import { connectToDb } from "@/libs/connectToDb";
import Project from "@/models/ProjectSchema";

export async function POST(req: NextRequest) {
  try {
    const { userId } = getAuth(req);

    if (!userId) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    await connectToDb();

    const { projectName, projectDescription } = await req.json();

    if (!projectName || !projectDescription) {
      return NextResponse.json(
        { message: "Project name and description are required" },
        { status: 400 }
      );
    }

    const newProject = new Project({
      clerkId: userId,
      projectName,
      projectDescription,
    });

    await newProject.save();

    return NextResponse.json(
      { message: "Project created successfully", project: newProject },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json(
      { message: "Error while creating the project" },
      { status: 500 }
    );
  }
}
