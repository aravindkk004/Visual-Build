import mongoose, { Schema, Model, Document } from "mongoose";

export interface IProject extends Document {
  clerkId: string;
  projectName: string;
  projectDescription: string;
}

const ProjectSchema = new Schema<IProject>(
  {
    clerkId: {
      type: String,
      required: true,
    },
    projectName: {
      type: String,
      required: true,
    },
    projectDescription: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Project: Model<IProject> =
  mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema);

export default Project;
