import { useState, useEffect } from "react";
import { Fetch } from "../lib/Fetch";
import { Surah } from "../types";

export const useFetchSurah = () => {
  const [data, setData] = useState<Surah[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await Fetch.get("/surah");
        setData(response.data.data);
      } catch (error) {
        setError("Error fetching data");
        console.error("Error fetching data:", error);
      }
    };

    fetchApi();
  }, []);

  return { data, error };
};

export const useFetchDetailSurah = (id: any) => {
  const [data, setData] = useState<Surah | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await Fetch.get(`/surah/${id}`);
        setData(response.data.data);
      } catch (error) {
        setError("Error fetching data");
        console.error("Error fetching data:", error);
      }
    };

    fetchApi();
  }, [id]);

  return { data, error };
};
