import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Pagination,
  PaginationContent,
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
  const [filters, setFilters] = useState({
    page: 0,
    size: 50,
    winner: '',
    year: '',
  });

  const { data, loading, error, reFetchData } = useData<ListMoviesRes>(
    `?page=0&size=50`,
    { method: 'GET' }
  );

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

  const getArrayTotalPages = () => {
    let array: number[] = [];

    if (data && data.totalPages) {
      for (let index = 1; index <= data.totalPages; index++) {
        array = [...array, index];
      }

      return array;
    }

    return array;
  };

  return (
    <Card className='flex-1 p-4 w-full'>
      <div className='flex items-center justify-center mb-3 gap-2 max-md:flex-col'>
        <h1 className='font-semibold text-lg flex-1 px-1'>Lista de filmes</h1>
        <div className='flex items-center justify-center gap-4 max-md:flex-col'>
          <Button
            onClick={() => {
              setFilters({
                page: 0,
                size: 50,
                winner: '',
                year: '',
              });

              reFetchData(`?page=0&size=50`);
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
              reFetchData(
                `?page=${filters.page}&size=${filters.size}&winner=${filters.winner}&year=${currentValue}`
              );
            }}
          />
          <Filter
            value={filters.winner}
            noScrollArea
            placeholder='É vencedor?'
            options={[
              { value: 'true', label: 'Sim' },
              { value: 'false', label: 'Não' },
            ]}
            onChange={(value) => {
              const currentValue = value === filters.winner ? '' : value;

              setFilters({ ...filters, winner: currentValue });
              reFetchData(
                `?page=${filters.page}&size=${filters.size}&winner=${currentValue}&year=${filters.year}`
              );
            }}
          />
        </div>
      </div>
      <div>
        <TableList
          dataNotFound={
            <p className='text-center text-gray-500 text-sm mt-5 mb-3'>
              Nenhum filme encontrado
            </p>
          }
          loading={loading}
          columns={columns}
          dataSource={data?.content.map((d) => ({
            key: d.id.toString(),
            id: d.id,
            year: d.year,
            title: d.title,
            winner: d.winner ? 'Sim' : 'Não',
          }))}
        />
        {data && data.totalElements > 0 && (
          <Pagination className='mt-4 mb-2'>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href='#'
                  onClick={(e) => {
                    e.preventDefault();

                    if (filters.page - 1 >= 0) {
                      setFilters({ ...filters, page: filters.page - 1 });
                      reFetchData(
                        `?page=${filters.page - 1}&size=${
                          filters.size
                        }&winner=${filters.winner}&year=${filters.year}`
                      );
                    }
                  }}
                />
              </PaginationItem>
              {getArrayTotalPages().map((p) => (
                <PaginationItem key={p}>
                  <PaginationLink
                    href='#'
                    isActive={filters.page === p - 1}
                    onClick={(e) => {
                      e.preventDefault();

                      if (filters.page !== p - 1) {
                        setFilters({ ...filters, page: p - 1 });
                        reFetchData(
                          `?page=${p - 1}&size=${filters.size}&winner=${
                            filters.winner
                          }&year=${filters.year}`
                        );
                      }
                    }}
                  >
                    {p}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  href='#'
                  onClick={(e) => {
                    e.preventDefault();

                    if (filters.page + 1 < getArrayTotalPages().length) {
                      setFilters({ ...filters, page: filters.page + 1 });
                      reFetchData(
                        `?page=${filters.page + 1}&size=${
                          filters.size
                        }&winner=${filters.winner}&year=${filters.year}`
                      );
                    }
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </Card>
  );
};

export default ListMovies;
