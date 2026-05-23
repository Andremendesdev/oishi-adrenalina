import { useQuery } from "@tanstack/react-query";
import { sanityClient } from "@/sanity/client";

/**
 * Hook genérico para buscar dados do Sanity CMS.
 * Se o Sanity não retornar dados (projeto não configurado ou vazio),
 * retorna `undefined` e o componente usa seu fallback hardcoded.
 *
 * @param key - Chave única para cache do React Query
 * @param query - Query GROQ para o Sanity
 * @param fallback - Valor fallback opcional (retornado se Sanity falhar/estiver vazio)
 */
export function useSanityData<T>(
  key: string,
  query: string,
  fallback?: T
): { data: T | undefined; isLoading: boolean } {
  const { data, isLoading } = useQuery<T>({
    queryKey: ["sanity", key],
    queryFn: () => sanityClient.fetch<T>(query),
    staleTime: 5 * 60 * 1000, // 5 minutos de cache
    gcTime: 10 * 60 * 1000, // 10 minutos em cache garbage collection
    retry: 1,
    refetchOnWindowFocus: false,
  });

  // Se não tiver dados do Sanity, retorna o fallback
  return {
    data: data ?? fallback,
    isLoading,
  };
}
