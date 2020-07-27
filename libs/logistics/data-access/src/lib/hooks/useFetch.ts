import useSWR from 'swr';
import { api } from '../services/api';

export function useFetch<Data = unknown, Error = unknown>(url: string) {
  const { data, error, mutate } = useSWR<Data, Error>(
    url,
    async (url) => {
      const response = await api.get(url);
      return response.data;
    },
    {
      revalidateOnFocus: true,
      onError: (e) => alert(e)
    }
  );

  return { data, error, mutate };
}
