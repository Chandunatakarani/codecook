import  mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    level: { type: String, required: true },
    category: { type: String, required: true },
    shortDescription: { type: String, required: true },
    fullDescription: { type: String, required: true },
    language: { type: String, default: "English" },
    prerequisites: [{ type: String }],
    outcomes: [{ type: String }],
    durationHours: { type: Number, required: true },
    numLessons: { type: Number, required: true },
    numProjects: { type: Number, required: true },
    skills: [{ type: String }],
    isFree: { type: Boolean, default: true },
    price: { type: Number, default: 0 }
  },
  { timestamps: true }
);

const Course =  mongoose.models.Course || mongoose.model("Course", courseSchema);

export default Course
