import axios from "axios";

const API_KEY = process.env.NUXT_NCDC_API_KEY;
const BASE_URL = process.env.NUXT_NCDC_API_URL;

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: { token: API_KEY },
});

/**
 * Fetch the list of available datasets from the NCDC API.
 */
export async function testFunction() {
  try {
    const response = await apiClient.get("/datasets");
    return response.data;
  } catch (error) {
    console.error("Error fetching datasets:", error);
    return null;
  }
}
