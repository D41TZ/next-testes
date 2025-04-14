'use client';

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { getProducts, Product } from '@/services/api/products';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useEffect, useState } from 'react';
import { ProductsTable } from './productsTable';

export default function Products() {

    return (
        <div className='space-y-4 h-full flex flex-col'>
            <div className='flex items-center justify-between border-b p-3 h-16'>
                <h1 className='text-3xl font-semibold text-black dark:text-white'>Produtos</h1>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button>Adicionar Produto</Button>
                    </DialogTrigger>
                    <DialogContent className='sm:max-w-[500px]'>
                        <DialogHeader>
                            <DialogTitle>Adicionar Produto</DialogTitle>
                            <DialogDescription>
                                Preencha o formulário para cadastrar um novo produto.
                            </DialogDescription>
                        </DialogHeader>
                        <div className='h-10 w-full'>Teste</div>
                        <DialogFooter>
                            <Button>Salvar</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
            <form className='flex justify-between'>
                <div className='flex space-x-2'>
                    <Input id='nome' type='text' placeholder='Nome' className='w-auto' />
                    <Input id='preco' type='number'  placeholder='Preço' className='w-auto' />
                </div>
                <div className='flex space-x-2'>
                    <Button>Pesquisar</Button>
                    <Button variant='outline'>Limpar</Button>
                </div>
            </form>
            {/* <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Nome</TableHead>
                        <TableHead>Preço</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {products.map((product) => (
                        <TableRow key={product.id}>
                            <TableCell className='w-20'>{product.id}</TableCell>
                            <TableCell className='w-lg'>{product.nome}</TableCell>
                            <TableCell className='w-28'>{product.preco?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table> */}
            <div className='flex-1'>
                <ProductsTable />
            </div>
        </div>
    );
}