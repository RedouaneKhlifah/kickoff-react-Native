import axios, { AxiosResponse } from "axios";

export const getAllRecords = async (url: string): Promise<AxiosResponse> => {
  return await axios.get(url);
};
