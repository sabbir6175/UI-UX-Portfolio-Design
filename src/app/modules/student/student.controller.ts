import { Request, Response } from "express";
import { studentService } from "./student.sevice";

const createStudent = async (req:Request, res:Response) => {
  const student = await studentService.createStudent(req.body);

  res.status(201).json({
    statusCode: 201,
    success: true,
    message: "student created successfully",
    data: student,
  });
};
export const studentController={
    createStudent,
}