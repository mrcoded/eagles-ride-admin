import toast from "react-hot-toast";

import { TRequestProps } from "@/types/api";
import { BASE_URL } from "@/constants/config";

export const apiRequest = async ({
  endpoint,
  data,
  method = "GET",
  token,
}: TRequestProps) => {
  try {
    const baseUrl = BASE_URL;

    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (response.status === 401) {
      throw new Error("Invalid Credentials!");
    }

    if (response.status === 500) {
      throw new Error("Something went wrong!");
    }

    // Consume and parse the response body
    const responseData = await response.json();

    // If the response is not ok, throw an error
    if (!response.ok) throw new Error(responseData.message);

    return responseData;
  } catch (error: Error | unknown) {
    console.log(error);
    toast.error((error as Error).message);
  }
};
