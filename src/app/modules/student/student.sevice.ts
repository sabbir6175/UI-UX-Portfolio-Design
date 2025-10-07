import { IStudent } from "./student.interface";
import StudentModel from "./student.model";

const createStudent = async (payload:Partial<IStudent>)=>{
    const student = await StudentModel.create(payload)

    return student
}

export const studentService = {
    createStudent
}