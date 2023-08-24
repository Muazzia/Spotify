import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import api from "../services/api";

export interface Music {
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
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    const fetch = async () => {
      try {
        setLoading(true);
        const res = await api.get<Music[]>("/songs", {
          cancelToken: cancelToken.token,
        });
        setLoading(false);
        setData(res.data);
      } catch (err) {
        if (!axios.isCancel(err)) setErr(err as AxiosError);
        setLoading(false);
      }
    };

    fetch();

    // return () => {
    //   cancelToken.cancel("Unmount");
    // };
  }, []);

  return { data, err, loading };
};

export default useFetchMusic;
