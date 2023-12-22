import { FETCH_ERROR_PREFIX } from "@/constants";

export const fetcher = async <T>(url: string): Promise<T> => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const response = await fetch(`${baseUrl}${url}`);

  if (!response.ok) {
    throw new Error(`${FETCH_ERROR_PREFIX} ${response.statusText}`);
  }

  const data: T = await response.json();

  return data;
};
