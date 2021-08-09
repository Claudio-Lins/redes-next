
export function getURLAPIRede(path = "") {
    return `${process.env.API_URL_LOCAL || "http://localhost:1337"}${path}`;
  }
  export async function fetchAPIRede(path) {
    const requestUrl = getURLAPIRede(path);
    // const response = await axios.get(requestUrl);
    const response = await fetch(requestUrl);
    const data = await response.json();
    return data;
  }
///////////////////////////////////////////////////////////////////////////////////////