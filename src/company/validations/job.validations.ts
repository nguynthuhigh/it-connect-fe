import { z } from "zod";

export const jobSchema = z.object({
  title: z.string().min(1, "Job title is required"),
  description: z.string().min(1, "Description is required"),
  experience: z.string().min(1, "Experience is required"),
  environment: z.string().min(1, "Environment is required"),
  level: z.string().min(1, "Level is required"),
  salary: z.string().min(1, "Salary is required"),
  work_type: z.string().min(1, "Work type is required"),
  special: z.string().min(1, "Special is required"),
  is_public: z.boolean(),
  skills: z.array(z.number()).min(1, "At least one skill is required"),
  status: z.number().optional(),
});
