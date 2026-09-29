import { PrismaClient } from "../../../src/generated/prisma/client";


import { NextResponse } from "next/server";


const prisma = new PrismaClient();

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      include: {
        category: true,
        reviews: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });


    return NextResponse.json({
      success: true,
      products,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch products",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST() {
    try {
  
      // 1. Create categories
      const electronics = await prisma.category.create({
        data: {
          name: "Electronics",
        },
      });
  
      const clothing = await prisma.category.create({
        data: {
          name: "Clothing",
        },
      });
  
      // 2. Create products
      const laptop = await prisma.product.create({
        data: {
          name: "Dell Laptop",
          description: "Powerful laptop for developers",
          price: 65000,
          stock: 10,
          categoryId: electronics.id,
  
          // Create reviews along with product
          reviews: {
            create: [
              {
                rating: 5,
                comment: "Excellent laptop!",
              },
              {
                rating: 4,
                comment: "Good performance.",
              },
            ],
          },
        },
  
        include: {
          category: true,
          reviews: true,
        },
      });
  
  
      const headphones = await prisma.product.create({
        data: {
          name: "Sony Headphones",
          description: "Wireless noise cancelling headphones",
          price: 8999,
          stock: 25,
          categoryId: electronics.id,
  
          reviews: {
            create: [
              {
                rating: 5,
                comment: "Amazing sound quality.",
              },
              {
                rating: 4,
                comment: "Battery life is good.",
              },
            ],
          },
        },
  
        include: {
          category: true,
          reviews: true,
        },
      });
  
  
      const tshirt = await prisma.product.create({
        data: {
          name: "Nike T-Shirt",
          description: "Comfortable cotton t-shirt",
          price: 1999,
          stock: 50,
          categoryId: clothing.id,
  
          reviews: {
            create: [
              {
                rating: 4,
                comment: "Very comfortable.",
              },
              {
                rating: 5,
                comment: "Great quality.",
              },
            ],
          },
        },
  
        include: {
          category: true,
          reviews: true,
        },
      });
  
  
      return NextResponse.json(
        {
          success: true,
          message: "Dummy data inserted successfully",
          data: {
            categories: [
              electronics,
              clothing,
            ],
            products: [
              laptop,
              headphones,
              tshirt,
            ],
          },
        },
        { status: 201 }
      );
  
    } catch (error) {
  
      console.error(error);
  
      return NextResponse.json(
        {
          success: false,
          message: "Failed to insert dummy data",
          error: error.message,
        },
        { status: 500 }
      );
    }
  }



// export async function POST(request) { if the data came from the request.body
//   try {
//     const body = await request.json();

//     const { name, description, price, stock, categoryId } = body;

//     const product = await prisma.product.create({
//       data: {
//         name,
//         description,
//         price: Number(price),
//         stock: Number(stock),
//         categoryId: Number(categoryId),
//       },
//     });

//     return Response.json({
//       success: true,
//       product,
//     });
//   } catch (error) {
//     console.error(error);

//     return Response.json(
//       {
//         success: false,
//         message: "Failed to create product",
//       },
//       { status: 500 }
//     );
//   }
// }