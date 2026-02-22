'use server';

import prisma from "@/src/lib/db";
import { revalidatePath } from "next/cache";

export async function FetchProduto(page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;
    
    const [produtos, totalCount] = await Promise.all([
        prisma.product.findMany({
            select: {
                id: true,
                principalImage: true,
                title: true,
                price: true,
                description: true,
            },
            orderBy: { id: 'asc' },
            skip,
            take: limit,
        }),
        prisma.product.count(),
    ]);

    const totalPages = Math.ceil(totalCount / limit);

    return { produtos, totalPages, currentPage: page, totalCount };
}

export async function FetchProdutoById(id: number) {
    const produto = await prisma.product.findUnique({
        where: { id },
        select: {
            id: true,
            principalImage: true,
            title: true,
            price: true,
            description: true,
        },
    });
    return produto;
}

export async function CreateProduto(data: {
    title: string;
    description: string;
    price: number;
    principalImage: string;
}) {
    const produto = await prisma.product.create({
        data: {
            title: data.title,
            description: data.description,
            price: data.price,
            principalImage: data.principalImage,
        },
    });
    revalidatePath('/tabela');
    return produto;
}

export async function UpdateProduto(id: number, data: {
    title?: string;
    description?: string;
    price?: number;
    principalImage?: string;
}) {
    const produto = await prisma.product.update({
        where: { id },
        data,
    });
    revalidatePath('/tabela');
    return produto;
}

export async function DeleteProduto(id: number) {
    const produto = await prisma.product.delete({
        where: { id },
    });
    revalidatePath('/tabela');
    return produto;
}

export async function CountProdutos() {
    const count = await prisma.product.count();
    return count;
}