import axios from "axios";
import type { ApiResponse } from "../interface/apiResponse";
import type { IEndpoints } from "../interface/endpointsInterface";

const AxiosBase = axios.create({
  baseURL: "https://api.apbugall.org",
  params: { token: "45e20a5f584becf7a64dffb7174ddf" },
});

export const getApi = async (
  Endpoints: IEndpoints | undefined
): Promise<ApiResponse> => {
  try {
    const response = await AxiosBase.get("/", { params: Endpoints });
    return response.data;
  } catch (error) {
    console.log("error load api", error);
    throw error;
  }
};
