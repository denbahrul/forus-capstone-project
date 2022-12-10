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

const API = {
  BASE_URL: 'https://63660b33046eddf1baf77f68.mockapi.io/api/v1/post'
};

async function addArgument({ title, argument, instansi, sumber, kategori, userId, name }) {
    const response = await fetch(`${BASE_URL}/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, argument, instansi, sumber, kategori, userId, name  }),
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

  async function addComment({id, komentar, sumber, userId, name }) {
    const response = await fetch(`${BASE_URL}/post/${id}/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ komentar, sumber, userId, name }),
    });
  
    const responseJson = await response.json();
  
    if (responseJson.status !== "success") {
      return { error: true, data: null };
    }
  
    return { error: false, data: responseJson.data };
  }

  async function getComment(id) {
    const response = await fetch(`${BASE_URL}/post/${id}/comment`);
    const responseJson = await response.json();
    if (responseJson.error) {
      console.log(responseJson.message);
    } else {
      console.log(responseJson);
    }
    return responseJson;
  }

  async function getAllPost(){
    const response = await fetch(`${BASE_URL}/post?sortBy=createdAt&order=desc`);
    const responseJson = await response.json();

    return {data: responseJson}
  }

  async function getAllTrending(){
    const response = await fetch(`${BASE_URL}/post?sortBy=upVote&order=desc`);
    const responseJson = await response.json();

    return {data: responseJson}
  }

  async function getPost(id) {
    const response = await fetch(`${BASE_URL}/post/${id}`);
    const responseJson = await response.json();

    if (responseJson.id !== `${id}` ) {
        return { data: null };
      }

    return {data: responseJson}
  }

  async function getNews() {
    const response = await fetch("https://newsapi.org/v2/top-headlines?country=id&apiKey=2fa65df819904aec82a8e8a1bb493b0c");
    const responseJson = await response.json();

    return {data: responseJson.articles}
  }

export { addArgument, addUser, getUser, getDetailArgument, getComment, addComment, getAllPost, getPost, API, getNews, getAllTrending };