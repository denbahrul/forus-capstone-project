const BASE_URL = "https://63660b33046eddf1baf77f68.mockapi.io/api/v1";

async function addUser(user) {
  return fetch(`${BASE_URL}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((response) => response.json());
}

const getUser = () => {
  return fetch("https://63660b33046eddf1baf77f68.mockapi.io/api/v1/user").then((res) => res.json());
};

async function addArgument({ title, argument, instansi, sumber, kategori }) {
    const response = await fetch(`${BASE_URL}/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, argument, instansi, sumber, kategori  }),
    });
  
    const responseJson = await response.json();
  
    if (responseJson.status !== "success") {
      return { error: true, data: null };
    }
  
    return { error: false, data: responseJson.data };
  }

  async function getDetailArgument() {
    const response = await fetch(`${BASE_URL}/post/27`);
    const responseJson = await response.json();
    if (responseJson.error) {
      console.log(responseJson.message);
    } else {
      console.log(responseJson);
    }
    return responseJson;
  }

  async function addComment({ komentar, sumber }) {
    const response = await fetch(`${BASE_URL}/post/27/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ komentar, sumber }),
    });
  
    const responseJson = await response.json();
  
    if (responseJson.status !== "success") {
      return { error: true, data: null };
    }
  
    return { error: false, data: responseJson.data };
  }

  async function getComment() {
    const response = await fetch(`${BASE_URL}/post/27/comment`);
    const responseJson = await response.json();
    if (responseJson.error) {
      console.log(responseJson.message);
    } else {
      console.log(responseJson);
    }
    return responseJson;
  }

export { addArgument, addUser, getUser, getDetailArgument, getComment, addComment };