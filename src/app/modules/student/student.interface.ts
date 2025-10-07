export interface IStudent {
  _id?: string;
  name: string;
  email: string;
  password: string;
  phone?: string;
  dateOfBirth?: string;
  rollNumber?: string;
  department?: string;
  class?: string;
  section?: string;
  admissionYear?: number;
  currentSemester?: number;
  coursesEnrolled?: string[];
  profile?: {
    avatar?: string;
    bio?: string;
    address?: string;
  };
  isActive?: boolean;
  role?: 'student';
  grades?: { courseId: string; grade: string; semester: number }[];
  attendance?: { courseId: string; presentDays: number; totalDays: number }[];
  certificates?: string[];
  notifications?: string[];
  messages?: string[];
  eventsParticipated?: string[];
  feesStatus?: { paid: boolean; amount: number; dueDate?: string }[];
  createdAt?: Date;
  updatedAt?: Date;
}
