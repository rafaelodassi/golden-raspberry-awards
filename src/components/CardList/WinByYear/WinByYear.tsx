import { Card } from '@/components/ui/card';

import { useData } from '../../../hooks/useData';
import { WinByYearRes } from '../../../services/types';
import Filter from '../../Filter';
import TableList from '../../TableList';

const WinByYear = () => {
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
    <Card className='flex-1 p-4'>
      <div className='flex items-center justify-center mb-3'>
        <h1 className='font-semibold text-lg flex-1 px-1'>
          Lista dos filmes vencedores por ano
        </h1>
        <Filter
          placeholder='Selecione um ano'
          options={years}
          onChange={(value) => reFetchData(`?winner=true&year=${value}`)}
        />
      </div>
      {data && !!data.length ? (
        <TableList
          columns={columns}
          dataSource={data?.map((d) => ({
            key: d.id.toString(),
            title: d.title,
            year: d.year,
          }))}
        />
      ) : (
        <p className='text-center text-gray-500 text-sm mb-3'>
          Nenhum filme encontrado
        </p>
      )}
    </Card>
  );
};

export default WinByYear;
