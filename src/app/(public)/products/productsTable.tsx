'use client';

import { ColDef, ModuleRegistry, AllCommunityModule, colorSchemeDark, themeAlpine } from 'ag-grid-community';
import { getProducts, Product } from '@/services/api/products';
import { useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { useTheme } from 'next-themes';

ModuleRegistry.registerModules([AllCommunityModule]);

export function ProductsTable() {

    const { theme } = useTheme();
    const columnDefs: ColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'nome', headerName: 'Nome', flex: 1, minWidth: 200 },
        { field: 'preco', headerName: 'Preço', width: 120, valueFormatter: (params: any) => params.value?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }
    ];

    const tableTheme = theme === 'dark' ? themeAlpine.withPart(colorSchemeDark) : themeAlpine;

    const datasource = useMemo(() => ({
        getRows: async (params: any) => {
            const { startRow, endRow } = params;
            const response = await getProducts({ interval: [startRow, endRow] });
            params.successCallback(response.rows, response.lastRow);
        }
    }), []);

    const onGridReady = (params: any) => {
        params.api.setGridOption('datasource', datasource);
    };
    
    return (
        <AgGridReact<Product>
            columnDefs={columnDefs}
            onGridReady={onGridReady}
            rowModelType='infinite'
            paginationPageSize={50}
            cacheBlockSize={50}
            theme={tableTheme}
            animateRows
        />
    );
}