'use client';

import { Card } from '@/components/ui/card';

import { useData } from '../../../hooks/useData';
import { WinByYearRes } from '../../../services/types';
import TableList from '../../TableList';

const WinByYear = () => {
  const { data, loading, error } = useData<WinByYearRes>(
    '?winner=true&year=2018',
    { method: 'GET' }
  );

  const columns = [
    { key: 'title', dataIndex: 'title', title: 'Título' },
    { key: 'year', dataIndex: 'year', title: 'Ano' },
  ];

  return (
    <Card className='flex-1 p-4'>
      <h1 className='font-semibold text-lg mb-3 px-1'>
        Lista dos filmes vencedores por ano
      </h1>
      <TableList
        columns={columns}
        dataSource={
          data
            ? data?.map((d, i) => ({
                key: d.id.toString(),
                title: d.title,
                year: d.year,
              }))
            : []
        }
      />
    </Card>
  );
};

export default WinByYear;
