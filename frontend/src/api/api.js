import axiosInstance from "./AxiosInstance";

export async function getPokemonData(query) {
  try {
    const response = await axiosInstance.post("", {
      query
    });
    return {
      data: response.data.data
    };
  } catch (ex) {
    return {
      err: ex
    };
  }
}
