'use client';

import { Card } from '@/components/ui/card';

import { useData } from '../../../hooks/useData';
import { StudiosWinCountRes } from '../../../services/types';
import TableList, { Columns } from '../../TableList';

const StudiosWinCount = () => {
  const { data, loading, error } = useData<StudiosWinCountRes>(
    '?projection=studios-with-win-count',
    { method: 'GET' }
  );

  const columns: Columns[] = [
    { key: 'name', dataIndex: 'name', title: 'Nome' },
    {
      key: 'winCount',
      dataIndex: 'winCount',
      title: 'Contagem de vitórias',
    },
  ];

  return (
    <Card className='flex-1 p-4'>
      <h1 className='font-semibold text-lg mb-3 px-1'>
        Os três estúdios com mais vitórias
      </h1>
      <TableList
        loading={loading}
        columns={columns}
        dataSource={data?.studios.slice(0, 3).map((s, i) => ({
          ...s,
          key: (i + 1).toString(),
        }))}
      />
    </Card>
  );
};

export default StudiosWinCount;
