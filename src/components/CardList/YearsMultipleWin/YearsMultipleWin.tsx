'use client';

import { Card } from '@/components/ui/card';

import { useData } from '../../../hooks/useData';
import { YearsMultipleWinRes } from '../../../services/types';
import TableList, { Columns } from '../../TableList';

const YearsMultipleWin = () => {
  const { data, loading, error } = useData<YearsMultipleWinRes>(
    '?projection=years-with-multiple-winners',
    { method: 'GET' }
  );

  const columns: Columns[] = [
    { key: 'year', dataIndex: 'year', title: 'Ano', width: 'sm' },
    {
      key: 'winnerCount',
      dataIndex: 'winnerCount',
      title: 'Contagem de vitórias',
    },
  ];

  return (
    <Card className='flex-1 p-4 w-full'>
      <h1 className='font-semibold text-lg mb-3 px-1'>
        Lista dos anos com mais de um vencedor
      </h1>
      <TableList
        loading={loading}
        columns={columns}
        dataSource={data?.years.map((y, i) => ({
          ...y,
          key: (i + 1).toString(),
        }))}
      />
    </Card>
  );
};

export default YearsMultipleWin;
