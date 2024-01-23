'use client';

import { Card } from '@/components/ui/card';

import { useData } from '../../../hooks/useData';
import { MaxMinWinIntervalRes } from '../../../services/types';
import TableList from '../../TableList';

const MaxMinWinInterval = () => {
  const { data, loading, error } = useData<MaxMinWinIntervalRes>(
    '?projection=max-min-win-interval-for-producers',
    { method: 'GET' }
  );

  const columns = [
    { key: 'producer', dataIndex: 'producer', title: 'Produtor', width: '200' },
    {
      key: 'interval',
      dataIndex: 'interval',
      title: 'Intervalo',
      width: '200',
    },
    {
      key: 'previousWin',
      dataIndex: 'previousWin',
      title: 'Ano anterior',
      width: '200',
    },
    {
      key: 'followingWin',
      dataIndex: 'followingWin',
      title: 'Ano seguinte',
      width: '200',
    },
  ];

  return (
    <Card className='flex-1 p-4'>
      <h1 className='font-semibold text-lg mb-3 px-1'>
        Os produtores com maior e menor intervalo entre vitórias
      </h1>
      <div className='flex items-center justify-center gap-5'>
        <div className='flex-1'>
          <h1 className='font-medium text-base mb-2 px-1 text-gray-600'>
            Máximo
          </h1>
          <div className='border flex-1 rounded-md'>
            <TableList
              columns={columns}
              dataSource={
                data
                  ? data?.max.map((m, i) => ({ ...m, key: (i + 1).toString() }))
                  : []
              }
            />
          </div>
        </div>
        <div className='flex-1'>
          <h1 className='font-medium text-base mb-2 px-1 text-gray-600'>
            Mínimo
          </h1>
          <div className='border rounded-md'>
            <TableList
              columns={columns}
              dataSource={
                data
                  ? data?.min.map((m, i) => ({ ...m, key: (i + 1).toString() }))
                  : []
              }
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MaxMinWinInterval;
