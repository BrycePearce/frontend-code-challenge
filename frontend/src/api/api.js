import axiosInstance from "./AxiosInstance";

export async function getPokemonData(request, limit = 10) {
    const edges = request.join(", ");
    try {
        const response = await axiosInstance.post("", {
            query: `query { pokemons(query: { limit: ${limit}, offset: 0 }) { edges { ${edges} } } }`
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