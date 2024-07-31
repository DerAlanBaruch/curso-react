import { useEffect, useState } from "react";

const localCache = new Map();

export const useFetch = <T>(url: string) => {
  const [state, setState] = useState({
    data: null as T | null,
    isLoading: false,
    hasError: false,
    error: null as any,
  });

  const getData = async () => {
    if (localCache.has(url)) {
      setState({
        data: localCache.get(url),
        isLoading: false,
        hasError: false,
        error: null,
      });
      return localCache.get(url);
    }
    setLoadingState();
    const response = await fetch(url);
    if (!response.ok) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          message: response.statusText,
          status: response.status,
          url: response.url,
        },
      });
      return;
    }
    const data = await response.json();
    setState({
      data,
      isLoading: false,
      hasError: false,
      error: null,
    });
    console.log({ data });
    localCache.set(url, data);
    return data;
  };

  useEffect(() => {
    getData();
    return () => {
      localCache.clear();
    };
  }, [url]);

  const setLoadingState = () => {
    setState({
      ...state,
      isLoading: true,
    });
  };

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
