//Requisição
axios.interceptors.request.use(
  function (config) {
    // Lógica para manipular a configuração da requisição
    console.log("Antes da requisição...");
    return config;
  },
  function (error) {
    // Lógica para lidar com erros na requisição
    return Promise.reject(error);
  },
);

//Resposta
axios.interceptors.response.use(
  function (response) {
    // Lógica para manipular a resposta da requisição
    console.log("Antes da resposta...");
    return response;
  },
  function (error) {
    // Lógica para lidar com erros na resposta
    return Promise.reject(error);
  },
);
