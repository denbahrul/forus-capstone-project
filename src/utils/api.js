const BASE_URL = "https://63660b33046eddf1baf77f68.mockapi.io/api/v1";


async function addArgument({ title, argument, instansi, sumber, kategori }) {
    const response = await fetch(`${BASE_URL}/user/1/post`, {
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

export { addArgument };