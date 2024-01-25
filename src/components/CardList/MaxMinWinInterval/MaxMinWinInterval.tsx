'use client';

import { Card } from '@/components/ui/card';

import { useData } from '../../../hooks/useData';
import { MaxMinWinIntervalRes } from '../../../services/types';
import TableList, { Columns } from '../../TableList';

const MaxMinWinInterval = () => {
  const { data, loading, error } = useData<MaxMinWinIntervalRes>(
    '?projection=max-min-win-interval-for-producers',
    { method: 'GET' }
  );

  const columns: Columns[] = [
    { key: 'producer', dataIndex: 'producer', title: 'Produtor' },
    {
      key: 'interval',
      dataIndex: 'interval',
      title: 'Intervalo',
      width: 'sm',
    },
    {
      key: 'previousWin',
      dataIndex: 'previousWin',
      title: 'Ano anterior',
    },
    {
      key: 'followingWin',
      dataIndex: 'followingWin',
      title: 'Ano seguinte',
    },
  ];

  return (
    <Card className='flex-1 p-4'>
      <h1 className='font-semibold text-lg mb-3 px-1'>
        Os produtores com maior e menor intervalo entre vitórias
      </h1>
      <div className='flex items-center justify-center gap-5 mb-4'>
        <h1 className='font-medium text-base text-gray-600 flex-1'>Máximo</h1>
        <h1 className='font-medium text-base text-gray-600 flex-1'>Mínimo</h1>
      </div>
      <div className='flex items-center justify-center gap-5'>
        <div className='flex-1'>
          <div className={`${!loading ? `border` : ``} rounded-md p-3`}>
            <TableList
              loading={loading}
              columns={columns}
              dataSource={data?.max.map((m, i) => ({
                ...m,
                key: (i + 1).toString(),
              }))}
            />
          </div>
        </div>
        <div className='flex-1'>
          <div className={`${!loading ? `border` : ``} rounded-md p-3`}>
            <TableList
              loading={loading}
              columns={columns}
              dataSource={data?.min.map((m, i) => ({
                ...m,
                key: (i + 1).toString(),
              }))}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MaxMinWinInterval;
