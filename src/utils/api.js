const BASE_URL = 'https://63660b33046eddf1baf77f68.mockapi.io/api/v1';

async function getAllPost(){
    const response = await fetch(`${BASE_URL}/post?sortBy=createdAt&order=asc`);
    const responseJson = await response.json();

    return {data: responseJson}
}

async function getPost(id) {
    const response = await fetch(`${BASE_URL}/post/${id}`);
    const responseJson = await response.json();

    console.log(responseJson);

    if (responseJson.id !== `${id}` ) {
        return { data: null };
      }

    return {data: responseJson}
}

export {getAllPost, getPost} ;