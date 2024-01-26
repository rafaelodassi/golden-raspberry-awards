import React from 'react';

import { screen, render } from '@testing-library/react';

import Header from './Header';

describe('Header', () => {
  it('Render Header', async () => {
    render(<Header preview='dashboard' onChangePreview={jest.fn()} />);

    expect(screen.getByText('Golden Raspberry Awards')).toBeInTheDocument();
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Lista')).toBeInTheDocument();
  });
});
