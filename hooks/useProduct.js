import useSWR from 'swr'

export const useProduct = (url, config = {}) => {

  const { data, error } = useSWR(`/api/${url}`, config)

  return {
    response: data,
    isLoading: !data && !error,
    isError: error
  }
}