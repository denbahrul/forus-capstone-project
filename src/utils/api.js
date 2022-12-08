const BASE_URL = 'https://63660b33046eddf1baf77f68.mockapi.io/api/v1';

async function login({ email, password }) {
  return fetch(`${BASE_URL}/user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then((response) => response.json());
}

async function register({ name, email, password }) {
  return fetch(`${BASE_URL}/user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  }).then((response) => response.json());
}

async function getUserLogged() {
  return fetch(`${BASE_URL}/user`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json());
}

console.log(getUserLogged());

async function addArgument({
  title,
  argument,
  instansi,
  sumber,
  kategori,
  upVote,
  downVote,
}) {
  const response = await fetch(`${BASE_URL}/post`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      argument,
      instansi,
      sumber,
      kategori,
      upVote,
      downVote,
    }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function getDetailArgument() {
  const response = await fetch(`${BASE_URL}/post/27`);
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function addComment({ komentar, sumber }) {
  const response = await fetch(`${BASE_URL}/post/27/comment`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ komentar, sumber }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function getComment() {
  const response = await fetch(`${BASE_URL}/post/27/comment`);
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function getAllPost() {
  const response = await fetch(`${BASE_URL}/post?sortBy=createdAt&order=desc`);
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

async function getPost(id) {
  const response = await fetch(`${BASE_URL}/post/${id}`);
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
}

export {
  login,
  register,
  getUserLogged,
  addArgument,
  getDetailArgument,
  addComment,
  getComment,
  getAllPost,
  getPost,
};
