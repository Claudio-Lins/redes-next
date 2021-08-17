
///////////////////////////////////////////////////////////////////////////////////////

export function getURLAPIRede(path = "") {
    return `${process.env.API_URL_API || "https://strapi-redesf.herokuapp.com/"}${path}`;
  }
  export async function fetchAPIRede(path) {
    const requestUrl = getURLAPIRede(path);
    // const response = await axios.get(requestUrl);
    const response = await fetch(requestUrl);
    const data = await response.json();
    return data;
  }

///////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////

export function getURLAPIRedeDois(path = "") {
    return `${process.env.API_URL_STRAPI || "https://cryptic-retreat-90035.herokuapp.com"}${path}`;
  }
  export async function fetchAPIRedeDois(path) {
    const requestUrl = getURLAPIRedeDois(path);
    // const response = await axios.get(requestUrl);
    const response = await fetch(requestUrl);
    const data = await response.json();
    return data;
  }

///////////////////////////////////////////////////////////////////////////////////////