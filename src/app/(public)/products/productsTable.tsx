'use client';

import { ColDef, ModuleRegistry, AllCommunityModule, colorSchemeDark, themeAlpine, IGetRowsParams } from 'ag-grid-community';
import { getProducts, Product } from '@/services/api/products';
import { Skeleton } from '@/components/ui/skeleton';
import { useSearchParams } from 'next/navigation';
import { AgGridReact } from 'ag-grid-react';
import { useTheme } from 'next-themes';
import { useMemo } from 'react';

ModuleRegistry.registerModules([AllCommunityModule]);

const SkeletonCell = () => (
    <div className='flex items-center justify-center h-full py-1'>
        <Skeleton className='w-full h-full' />
    </div>
);

export function ProductsTable() {

    const { theme } = useTheme();
    const searchParams = useSearchParams();
    const columnDefs = useMemo<ColDef[]>(() => [
        { field: 'id', headerName: 'ID', width: 90, loadingCellRenderer: SkeletonCell },
        { field: 'nome', headerName: 'Nome', flex: 1, minWidth: 200, loadingCellRenderer: SkeletonCell },
        { field: 'preco', headerName: 'Preço', width: 120, valueFormatter: (params: any) => params.value?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }), loadingCellRenderer: SkeletonCell }
    ], []);

    const tableTheme = useMemo(() => {
        if (theme === 'dark'){
            return themeAlpine.withPart(colorSchemeDark);
        }
        else {
            return themeAlpine;
        }
    }, [theme]);

    const datasource = useMemo(() => ({
        getRows: async (params: IGetRowsParams) => {
            const { startRow, endRow } = params;

            const nome = searchParams.get('name');
            const preco = searchParams.get('price');
            
            const filter: { nome?: string, preco?: number } = {};
            if (nome) filter.nome = nome;
            if (preco) filter.preco = parseFloat(preco);

            try {
                const response = await getProducts({ interval: [startRow, endRow], filter });
                params.successCallback(response.rows, response.lastRow || undefined);
            }
            catch (error) {
                params.failCallback();
            }
        }
    }), [searchParams]);
    
    return (
        <AgGridReact<Product>
            columnDefs={columnDefs}
            datasource={datasource}
            rowModelType='infinite'
            cacheBlockSize={50}
            theme={tableTheme}
            noRowsOverlayComponent={SkeletonCell}
            suppressServerSideFullWidthLoadingRow
            animateRows
        />
    );
}