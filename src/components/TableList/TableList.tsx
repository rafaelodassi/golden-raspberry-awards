import { Skeleton } from '@/components/ui/skeleton';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type ColumnWidth = 'sm' | 'base' | 'lg' | undefined;

export interface Columns {
  key: string;
  dataIndex: string;
  title: string;
  width?: ColumnWidth;
}

interface Props {
  loading?: boolean;
  columns?: Columns[];
  dataSource?: {
    [key: string]: string | number;
  }[];
  dataNotFound?: React.ReactNode;
}

const TableList = ({
  loading = false,
  columns,
  dataSource,
  dataNotFound,
}: Props) => {
  const buildClassNameWidth = (width?: ColumnWidth) => {
    switch (width) {
      case 'sm':
        return 'w-[100px]';
      case 'lg':
        return 'w-[300px]';
      default:
        return '';
    }
  };

  if (loading || !dataSource) {
    return (
      <div className='flex flex-col gap-4'>
        <div className='flex gap-4'>
          <Skeleton className='h-4 w-full' />
          <Skeleton className='h-4 w-full' />
          <Skeleton className='h-4 w-full' />
          <Skeleton className='h-4 w-full' />
        </div>
        <Skeleton className='h-4 w-full' />
        <Skeleton className='h-4 w-full' />
        <Skeleton className='h-4 w-full' />
        <Skeleton className='h-4 w-full' />
      </div>
    );
  }

  const renderDataNotFound = () => {
    return (
      dataNotFound || (
        <p className='text-center text-gray-500 text-sm mb-3'>
          Nenhum dado encontrado
        </p>
      )
    );
  };

  return !!dataSource.length ? (
    <Table>
      <TableHeader>
        <TableRow>
          {columns?.map((col) => (
            <TableHead key={col.key} className={buildClassNameWidth(col.width)}>
              {col.title}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {dataSource?.map((data) => (
          <TableRow key={data.key}>
            {columns?.map((col) => (
              <TableCell key={`${data.key}-${col.key}`}>
                {data[col.dataIndex]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ) : (
    renderDataNotFound()
  );
};

export default TableList;
