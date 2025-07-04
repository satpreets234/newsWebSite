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

export function apiResponse({ error = null, status = 200, data = null, message = '' }) {
  // For Next.js API routes
  // Usage: return apiResponse({ error, status, data, message });
  // status is HTTP status code
  // error is error message or null
  // data is response data or null
  // message is a human-readable message
  return Response.json({ error, status, data, message }, { status });
}
