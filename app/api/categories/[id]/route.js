import { PrismaClient } from "../../../src/generated/prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request) {
    try {
      const body = await request.json();
  
      const { name } = body;
  
      if (!name) {
        return NextResponse.json(
          {
            success: false,
            message: "Category name is required",
          },
          {
            status: 400,
          }
        );
      }
  
      const category = await prisma.category.create({
        data: {
          name,
        },
      });
  
      return NextResponse.json(
        {
          success: true,
          message: "Category created successfully",
          category,
        },
        {
          status: 201,
        }
      );
    } catch (error) {
      console.error(error);
  
      return NextResponse.json(
        {
          success: false,
          message: "Failed to create category",
        },
        {
          status: 500,
        }
      );
    }
  }