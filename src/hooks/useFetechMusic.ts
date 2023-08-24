import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import api from "../services/api";

interface Music {
  title: string;
  artist: string;
  album: string;
  duration: string;
  songImg: string;
  fileReference: string;
  id: string;
}

const useFetchMusic = () => {
  const [data, setData] = useState<Music[]>([]);
  const [err, setErr] = useState<AxiosError>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    const fetch = async () => {
      setLoading(true);
      try {
        const res = await api.get<Music[]>("/songs", {
          cancelToken: cancelToken.token,
        });
        setData(res.data);
        setLoading(true);
      } catch (err) {
        if (!axios.isCancel(err)) setErr(err as AxiosError);
        setLoading(true);
      }
    };

    fetch();

    return () => {
      cancelToken.cancel("Unmount");
    };
  }, []);

  return { data, err, loading };
};

export default useFetchMusic;
