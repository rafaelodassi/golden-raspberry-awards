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
  columns: Columns[];
  dataSource: {
    [key: string]: string | number;
  }[];
}

const TableList = ({ columns = [], dataSource = [] }: Props) => {
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

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((col) => (
            <TableHead key={col.key} className={buildClassNameWidth(col.width)}>
              {col.title}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {dataSource.map((data) => (
          <TableRow key={data.key}>
            {columns.map((col) => (
              <TableCell key={`${data.key}-${col.key}`}>
                {data[col.dataIndex]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableList;
