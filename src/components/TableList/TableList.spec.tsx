import React from 'react';

import { screen, render } from '@testing-library/react';

import TableList from './TableList';

describe('TableList', () => {
  it('Render TableList', async () => {
    const columns = [{ key: 'col1', dataIndex: 'col1', title: 'col1' }];
    const dataSource = [{ key: 'data1', col1: 'data1' }];

    render(<TableList columns={columns} dataSource={dataSource} />);

    expect(screen.getByText('col1')).toBeInTheDocument();
    expect(screen.getByText('data1')).toBeInTheDocument();
  });
});
