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

export async function GetPVI(query?: string, page: number = 1, limit: number = 16) {
    const skip = (page - 1) * limit;
    
    const whereClause = query ? {
        OR: [
            { title: { contains: query, mode: 'insensitive' as const } },
            { description: { contains: query, mode: 'insensitive' as const } },
        ],
    } : undefined;

    const [posts, totalCount] = await Promise.all([
        prisma.product.findMany({
            where: whereClause,
            select: {
                id: true,
                principalImage: true,
                title: true,
                price: true,
                description: true,
            },
            skip,
            take: limit,
        }),
        prisma.product.count({ where: whereClause }),
    ]);

    const totalPages = Math.ceil(totalCount / limit);

    return { posts, totalPages, currentPage: page };
}