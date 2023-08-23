import axios from "axios";
import { APP_BASE_URL } from "../../../config/enviroment";
import { TUser } from "../types";
import { useApiAuth } from "../../../hooks/useApiAuth";
import { useEffect, useState } from "react";
import { TResponseStatus } from "../../../types";

interface IGetDataProps {
  _?: string;
  id: string;
}

const getData = async (props: {
  data: IGetDataProps;
  auth: { token: string };
}): Promise<{ data: TUser }> => {
  const url = `${APP_BASE_URL}/user/`;

  const config = {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${props.auth.token}`,
    },
    params: {
      _: props.data._,
    },
  };

  const res = await axios.get(url, config);
  const fetchedData: TUser = res.data.data;

  const ans = {
    data: fetchedData,
  };

  return ans;
};

export const useFetchUser = (props: { data: IGetDataProps }) => {
  const { token } = useApiAuth();
  const [data, setData] = useState<TUser>();
  const [status, setStatus] = useState<TResponseStatus>("loading");

  useEffect(() => {
    getData({ auth: { token }, data: props.data })
      .then((res) => {
        setData(res.data);
        setStatus("success");
      })
      .catch((err) => {
        setStatus("error");
        console.log(err, "Err response");
      });
  }, [props.data, token]);

  return {
    status,
    data,
  };
};
