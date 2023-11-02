import { useEffect, useState } from "react";

export function useFetch<T>(url: string, method: string, body?: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const abortController = new AbortController();

  const token = localStorage.getItem("token") ?? "";
  useEffect(() => {
    if (method.toUpperCase() === "GET" || method.toUpperCase() === "DELETE") {
      fetch(url, {
        method: method,
        headers: {
          authorization: `Bearer ${token}`,
        },
        signal: abortController.signal,
      })
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((e: Error) => {
          setError(e);
          setLoading(false);
        });
    } else if (method.toUpperCase() === "POST") {
      fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: body,
      })
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((e: Error) => {
          setError(e);
          setLoading(false);
        });
    }
    return () => {
      abortController.abort();
      console.log("Fetch aborted.");
    };
  }, []);

  return { data, loading, error, setData };
}
