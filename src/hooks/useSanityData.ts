import { useQuery } from "@tanstack/react-query";
import { sanityClient } from "@/sanity/client";

export interface UseSanityDataOptions {
  useCdn?: boolean;
  staleTime?: number;
  refetchOnWindowFocus?: boolean;
}

/**
 * Hook genérico para buscar dados do Sanity CMS.
 * Se o Sanity não retornar dados (projeto não configurado ou vazio),
 * retorna `undefined` e o componente usa seu fallback hardcoded.
 */
export function useSanityData<T>(
  key: string,
  query: string,
  fallback?: T,
  options?: UseSanityDataOptions,
): {
  data: T | undefined;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
} {
  const useCdn = options?.useCdn ?? true;
  const staleTime = options?.staleTime ?? 5 * 60 * 1000;
  const refetchOnWindowFocus = options?.refetchOnWindowFocus ?? false;

  const { data, isLoading, isError, error } = useQuery<T>({
    queryKey: ["sanity", key, useCdn],
    queryFn: () =>
      sanityClient.withConfig({ useCdn }).fetch<T>(query),
    staleTime,
    gcTime: 10 * 60 * 1000,
    retry: 1,
    refetchOnWindowFocus,
  });

  return {
    data: data ?? fallback,
    isLoading,
    isError,
    error: error as Error | null,
  };
}
