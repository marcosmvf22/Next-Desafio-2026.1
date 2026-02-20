'use server';

import prisma from "@/src/lib/db";

export async function getProducts() {
  const products = await prisma.product.findMany({
    select: {
      id: true,
      principalImage: true,
      title: true,
      price: true,
    },
    take: 8,
  });
  return products;
}