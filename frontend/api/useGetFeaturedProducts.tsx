import { useEffect, useState } from "react";

export function useGetFeaturedProducts() {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products`;
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  console.log(url);
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        console.log(res);
        const json = await res.json();
        console.log(json);
        setResult(json.data);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    })();
  }, [url]);
  return { result, loading, error };
}
