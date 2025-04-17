import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ProductsTable } from './productsTable';
import { Button } from '@/components/ui/button';
import { ProductsForm } from './productsForm';

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
            <ProductsForm />
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