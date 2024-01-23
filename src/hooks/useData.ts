'use client';

import { useState, useEffect } from 'react';

import { AxiosResponse, AxiosRequestConfig } from 'axios';

import apiService from '../services/config';

export const useData = <T>(url: string, options?: AxiosRequestConfig) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response: AxiosResponse<T> = await apiService.get<T>(
          url,
          options
        );

        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error');
        setLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, loading, error };
};
