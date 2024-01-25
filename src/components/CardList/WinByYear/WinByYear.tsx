import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

import { useData } from '../../../hooks/useData';
import { WinByYearRes } from '../../../services/types';
import Filter from '../../Filter';
import TableList from '../../TableList';

const WinByYear = () => {
  const [filters, setFilters] = useState({
    year: '',
  });

  const { data, loading, error, reFetchData } = useData<WinByYearRes>(
    '?winner=true&year=2024',
    { method: 'GET' }
  );

  const columns = [
    { key: 'title', dataIndex: 'title', title: 'Título' },
    { key: 'year', dataIndex: 'year', title: 'Ano' },
  ];

  let years: { value: string; label: string }[] = [];

  for (let index = 1970; index <= 2024; index++) {
    years = [...years, { value: index.toString(), label: index.toString() }];
  }

  return (
    <Card className='flex-1 p-4 w-full'>
      <div className='flex items-center justify-center mb-3 gap-2 max-md:flex-col'>
        <h1 className='font-semibold text-lg flex-1 px-1'>
          Lista dos filmes vencedores por ano
        </h1>
        <div className='flex items-center justify-center gap-3'>
          <Button
            onClick={() => {
              setFilters({
                year: '',
              });

              reFetchData(`?winner=true&year=2024`);
            }}
          >
            Limpar filtros
          </Button>
          <Filter
            value={filters.year}
            placeholder='Selecione um ano'
            options={years}
            onChange={(value) => {
              const currentValue = value === filters.year ? '' : value;

              setFilters({ ...filters, year: currentValue });
              reFetchData(`?winner=true&year=${currentValue}`);
            }}
          />
        </div>
      </div>
      <TableList
        loading={loading}
        columns={columns}
        dataSource={data?.map((d) => ({
          key: d.id.toString(),
          title: d.title,
          year: d.year,
        }))}
      />
    </Card>
  );
};

export default WinByYear;
