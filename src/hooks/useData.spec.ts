import { renderHook } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';

import apiService from '../services/config';

import { useData } from './useData';

describe('useData', () => {
  it('useData request', async () => {
    const mock = new MockAdapter(apiService);
    const url = 'http://mock';
    const mockData = 'success';

    mock.onGet(url).reply(200, mockData);

    const { result, waitForNextUpdate } = renderHook(() =>
      useData(url, { method: 'GET' })
    );

    expect(result.current.loading).toBeTruthy();
    expect(result.current.data).toEqual(null);

    await waitForNextUpdate();

    expect(result.current.loading).toBeFalsy();
    expect(result.current.data).toEqual(mockData);
  });
});
