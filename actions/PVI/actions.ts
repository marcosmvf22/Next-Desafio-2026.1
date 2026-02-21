'use server';

import prisma from "@/src/lib/db";

export async function FetchPVI(id: number) {
    const post = await prisma.product.findUnique({
        where: {id},
        select: {
            id: true,
            principalImage: true,
            title: true,
            price: true,
            description: true,
        },
    });
    return post;
}