'use server';

import { unstable_cache } from 'next/cache';

interface getProductsProps {
    interval: [number, number];
    filter?: {
        nome?: string;
        preco?: number;
    }
}

export interface Product {
    id: number;
    nome: string;
    preco: number;
}

export async function getProducts({ interval, filter }: getProductsProps) {
    const [start, end] = interval;
    const products = await productsCache();
    const { nome, preco } = filter || {};
    const filteredProducts = products.filter((product) => {
        if (nome && !product.nome.toLowerCase().includes(nome.toLowerCase())) return false;
        if (preco && product.preco !== preco) return false;
        return true;
    });

    if(start < 0 || start >= end) throw new Error('Intervalo inválido!');
    
    await new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve();
        }, 10000);
    });

    if (!filteredProducts.length) throw new Error('Nenhum produto encontrado!');

    const lastRow = end > filteredProducts.length ? filteredProducts.length : null;

    return {
        rows: filteredProducts.slice(interval[0], interval[1]),
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