'use server';

import { unstable_cache } from 'next/cache';

interface getProductsProps {
    interval: [number, number];
}

export interface Product {
    id: number;
    nome: string;
    preco: number;
}

export async function getProducts({ interval }: getProductsProps) {
    const [start, end] = interval;
    const products = await productsCache();

    if(start < 0 || end > products.length || start >= end) throw new Error('Intervalo inválido!');
    
    await new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });

    const lastRow = end > products.length ? products.length : null;

    return {
        rows: products.slice(interval[0], interval[1]),
        lastRow
    };
};

const productsCache = unstable_cache(async () => {
    return Array.from({ length: 1000 }, (_, i) => ({
        id: i + 1,
        nome: `Produto ${i + 1}`,
        preco: parseFloat((Math.random() * (350 - 20) + 20).toFixed(2))
    }));
}, [], {
    revalidate: false,
    tags: ['products'],
});