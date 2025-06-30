export interface ApiResponse<T> {
  data: T;
  error?: string;
}

export async function apiFetch<T>(url: string, options?: RequestInit): Promise<ApiResponse<T>> {
  try {
    const res = await fetch(url, options);
    if (!res.ok) throw new Error(await res.text());
    const data = await res.json();
    return { data };
  } catch (error: any) {
    return { data: null as any, error: error.message };
  }
}
