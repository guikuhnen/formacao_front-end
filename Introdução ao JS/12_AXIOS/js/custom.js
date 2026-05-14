const postsFetch = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    // Substitui global
    Authorization: "MEUNOVOTOKENDOAPP",
  },
});
