import axios from "axios";

/**
 * Fetch the list of available datasets from the NCDC API.
 */
export const fetchDatasets = async (apiUrl: string, userToken: string) => {
  try {
    const response = await axios.get(`${apiUrl}/datasets`, {
      headers: { token: userToken },
    });

    console.log("Response data:", response.data);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    return null;
  }
};
