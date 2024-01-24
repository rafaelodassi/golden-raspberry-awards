import { Card } from '@/components/ui/card';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

import { useData } from '../../../hooks/useData';
import { ListMoviesRes } from '../../../services/types';
import Filter from '../../Filter';
import TableList, { Columns } from '../../TableList';

const ListMovies = () => {
  const { data, loading, error, reFetchData } = useData<ListMoviesRes>(
    '?page=0&size=20',
    { method: 'GET' }
  );

  // '?page=0&size=99&winner=true&year=2018',

  const columns: Columns[] = [
    { key: 'id', dataIndex: 'id', title: 'ID' },
    { key: 'year', dataIndex: 'year', title: 'Ano' },
    { key: 'title', dataIndex: 'title', title: 'Título' },
    { key: 'winner', dataIndex: 'winner', title: 'Vencedor' },
  ];

  let years: { value: string; label: string }[] = [];

  for (let index = 1970; index <= 2024; index++) {
    years = [...years, { value: index.toString(), label: index.toString() }];
  }

  return (
    <Card className='flex-1 p-4'>
      <div className='flex items-center justify-center mb-3'>
        <h1 className='font-semibold text-lg flex-1 px-1'>Lista de filmes</h1>
        <div className='flex items-center justify-center gap-4'>
          <Filter
            placeholder='Selecione um ano'
            options={years}
            onChange={(value) => reFetchData(`?page=0&size=20&year=${value}`)}
          />
          <Filter
            noScrollArea
            placeholder='É vencedor?'
            options={[
              { value: 'true', label: 'Sim' },
              { value: 'false', label: 'Não' },
            ]}
            onChange={(value) => reFetchData(`?page=0&size=20&winner=${value}`)}
          />
        </div>
      </div>
      {data && data.content && !!data.content.length ? (
        <div>
          <TableList
            columns={columns}
            dataSource={data.content.map((d) => ({
              key: d.id.toString(),
              id: d.id,
              year: d.year,
              title: d.title,
              winner: d.winner ? 'Sim' : 'Não',
            }))}
          />
          <Pagination className='mt-4 mb-2'>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href='#' />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href='#'>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href='#' isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href='#'>3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href='#' />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      ) : (
        <p className='text-center text-gray-500 text-sm mb-3'>
          Nenhum filme encontrado
        </p>
      )}
    </Card>
  );
};

export default ListMovies;
