import { z } from "zod";

export const projectSchema = z
  .object({
    name: z
      .string()
      .min(3, "Project name must be at least 3 characters"),

    description: z
      .string()
      .min(10, "Description must be at least 10 characters"),

    status: z.enum([
      "Planning",
      "Active",
      "Completed",
      "On Hold",
    ]),

    priority: z.enum([
      "Low",
      "Medium",
      "High",
    ]),

    startDate: z.string(),

    dueDate: z.string(),
  })
  .refine(
    (data) => {
      return new Date(data.dueDate) >= new Date(data.startDate);
    },
    {
      message: "Due date cannot be before start date",
      path: ["dueDate"],
    }
  );