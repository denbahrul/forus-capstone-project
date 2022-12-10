const baseUrl = "https://63660b33046eddf1baf77f68.mockapi.io/api/v1";

function addUser(user) {
  return fetch(`${baseUrl}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((response) => response.json());
}

export { addUser };
