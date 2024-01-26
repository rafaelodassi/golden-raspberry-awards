import { render } from '@testing-library/react';

import ListMovies from './ListMovies';

describe('ListMovies', () => {
  it('Render ListMovies', async () => {
    render(<ListMovies />);
  });
});
