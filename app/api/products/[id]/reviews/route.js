import { PrismaClient } from "../../../../../src/generated/prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request, { params }) {
  try {
    const { id } = await params;

    const body = await request.json();

    const rating = Number(body.rating);

    if (!rating || rating < 1 || rating > 5) {
      return NextResponse.json(
        {
          success: false,
          message: "Rating must be between 1 and 5",
        },
        {
          status: 400,
        }
      );
    }

    const review = await prisma.review.create({
      data: {
        rating,
        comment: body.comment || null,
        productId: Number(id),
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Review added successfully",
        review,
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
        message: "Failed to create review",
      },
      {
        status: 500,
      }
    );
  }
}