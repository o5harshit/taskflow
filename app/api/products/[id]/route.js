
import { PrismaClient } from "../../../../src/generated/prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function GET(request, { params }) {
  try {
    const { id } = await params;
s
    const product = await prisma.product.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        category: true,
        reviews: true,
      },
    });

    if (!product) {
      return NextResponse.json(
        {
          success: false,
          message: "Product not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      product,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch product",
      },
      {
        status: 500,
      }
    );
  }
}

export async function PUT(request, { params }) {
    try {
      const { id } = await params;
  
      const body = await request.json();
  
      const product = await prisma.product.update({
        where: {
          id: Number(id),
        },
        data: {
          name: body.name,
          description: body.description,
          price: Number(body.price),
          stock: Number(body.stock),
          categoryId: Number(body.categoryId),
        },
      });
  
      return NextResponse.json({
        success: true,
        message: "Product updated successfully",
        product,
      });
    } catch (error) {
      console.error(error);
  
      return NextResponse.json(
        {
          success: false,
          message: "Failed to update product",
        },
        {
          status: 500,
        }
      );
    }
  }

  export async function DELETE(request, { params }) {
    try {
      const { id } = await params;
  
      await prisma.product.delete({
        where: {
          id: Number(id),
        },
      });
  
      return NextResponse.json({
        success: true,
        message: "Product deleted successfully",
      });
    } catch (error) {
      console.error(error);
  
      return NextResponse.json(
        {
          success: false,
          message: "Failed to delete product",
        },
        {
          status: 500,
        }
      );
    }
  }