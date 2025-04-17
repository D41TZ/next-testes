'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useEffect, useState } from 'react';

export function ProductsForm() {

    const router = useRouter();
    const searchParams = useSearchParams();
    
    const [name, setName] = useState<string>('');
    const [price, setPrice] = useState<string>('');

    useEffect(() => {
        setName(searchParams.get('name') || '');
        setPrice(searchParams.get('price') || '');
    }, [searchParams]);

    function changeUrl() {
        const params = new URLSearchParams();

        if (name) params.set('name', name);
        if (price) params.set('price', price);

        router.push(`?${params.toString()}`);
    }

    return (
        <form action={changeUrl} className='flex space-x-2 justify-between'>
            <div className='flex space-x-2'>
                <Input id='nome' type='text' placeholder='Nome' className='w-auto' value={name} onChange={e => setName(e.target.value)} />
                <Input id='preco' type='number' placeholder='Preço' className='w-auto' value={price} onChange={e => setPrice((parseFloat(e.target.value) || '').toString())} />
            </div>
            <div className='flex space-x-2'>
                <Button type='submit'>Pesquisar</Button>
                <Button type='reset' variant='outline'>Limpar</Button>
            </div>
        </form>
    );
}