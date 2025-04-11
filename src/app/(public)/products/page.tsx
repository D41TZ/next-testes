import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const products = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    name: `Produto ${String.fromCharCode(65 + index)}`,
    price: parseFloat((Math.random() * (150 - 10) + 10).toFixed(2)),
}));

export default function Products() {
    return (
        <div className='space-y-4'>
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
            <Table>
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
                            <TableCell className='w-lg'>{product.name}</TableCell>
                            <TableCell className='w-28'>{product.price?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}