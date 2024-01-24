'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { Check, ChevronsUpDown } from 'lucide-react';

import { useData } from '../../../hooks/useData';
import { WinByYearRes } from '../../../services/types';
import TableList from '../../TableList';

const WinByYear = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
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
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant='outline'
              role='combobox'
              aria-expanded={open}
              className='w-[200px] justify-between'
            >
              {value
                ? years.find((y) => y.value === value)?.label
                : 'Selecione um ano...'}
              <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-[200px] p-0'>
            <Command>
              <CommandInput placeholder='Procure por um ano...' />
              <CommandEmpty>Nenhum ano foi encontrado.</CommandEmpty>
              <CommandGroup>
                <ScrollArea className='h-[200px]'>
                  {years.map((y) => (
                    <CommandItem
                      key={y.value}
                      value={y.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? '' : currentValue);
                        setOpen(false);
                        reFetchData(`?winner=true&year=${currentValue}`);
                      }}
                    >
                      <Check
                        className={cn(
                          'mr-2 h-4 w-4',
                          value === y.value ? 'opacity-100' : 'opacity-0'
                        )}
                      />
                      {y.label}
                    </CommandItem>
                  ))}
                </ScrollArea>
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
      {data && !!data.length ? (
        <TableList
          columns={columns}
          dataSource={
            data
              ? data?.map((d) => ({
                  key: d.id.toString(),
                  title: d.title,
                  year: d.year,
                }))
              : []
          }
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
