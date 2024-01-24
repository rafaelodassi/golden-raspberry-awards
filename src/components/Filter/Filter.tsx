import { useState } from 'react';

import { Button } from '@/components/ui/button';
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

interface Props {
  noScrollArea?: boolean;
  placeholder?: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}

const Filter = ({
  noScrollArea = false,
  placeholder = 'Selecione uma opção',
  options,
  onChange,
}: Props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='w-[200px] justify-between'
        >
          {value ? options.find((o) => o.value === value)?.label : placeholder}
          <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[200px] p-0'>
        <Command>
          <CommandInput placeholder='Busque por opções' />
          <CommandEmpty>Nenhuma opção foi encontrada</CommandEmpty>
          <CommandGroup>
            <ScrollArea
              className={`${noScrollArea ? `h-[auto]` : `h-[200px]`}`}
            >
              {options.map((o) => (
                <CommandItem
                  key={o.value}
                  value={o.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue);
                    setOpen(false);
                    onChange(currentValue);
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === o.value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  {o.label}
                </CommandItem>
              ))}
            </ScrollArea>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default Filter;
