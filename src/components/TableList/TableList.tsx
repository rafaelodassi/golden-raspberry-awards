import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface Props {
  columns: {
    key: string;
    dataIndex: string;
    title: string;
    width?: string;
  }[];
  dataSource: {
    [key: string]: string | number;
  }[];
}

const TableList = ({ columns = [], dataSource = [] }: Props) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((col) => (
            <TableHead
              key={col.key}
              className={`w-[${col.width ? `${col.width}px` : 'auto'}]`}
            >
              {col.title}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {dataSource.map((data) => (
          <TableRow key={data.key}>
            {columns.map((col) => (
              <TableCell
                key={`${data.key}-${col.key}`}
                className={`w-[${col.width ? `${col.width}px` : 'auto'}]`}
              >
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
