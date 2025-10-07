import { model, Schema } from "mongoose";
import { IStudent } from "./student.interface";

const studentSchema = new Schema<IStudent>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String },
    dateOfBirth: { type: Date },
    rollNumber: { type: String, unique: true },
    department: { type: String },
    class: { type: String },
    section: { type: String },
    admissionYear: { type: Number },
    currentSemester: { type: Number },
    coursesEnrolled: [{ type: String }],
    profile: {
      avatar: { type: String },
      bio: { type: String },
      address: { type: String },
    },
    isActive: { type: Boolean, default: true },
    role: { type: String, default: 'student' },
    grades: [
      {
        courseId: { type: String },
        grade: { type: String },
        semester: { type: Number },
      },
    ],
    attendance: [
      {
        courseId: { type: String },
        presentDays: { type: Number },
        totalDays: { type: Number },
      },
    ],
    certificates: [{ type: String }],
    notifications: [{ type: String }],
    messages: [{ type: String }],
    eventsParticipated: [{ type: String }],
    feesStatus: [
      {
        paid: { type: Boolean },
        amount: { type: Number },
        dueDate: { type: Date },
      },
    ],
  },
  { timestamps: true }
);

 const StudentModel = model<IStudent>("Student", studentSchema);

 export default StudentModel;