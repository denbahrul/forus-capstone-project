const getUser = () => {
  return fetch("https://63660b33046eddf1baf77f68.mockapi.io/api/v1/user").then((res) => res.json());
};

export default getUser;
