const originUrl = 'http://127.0.0.1:3000';

function customFetch(uri, options = {method: 'GET'}) {
  return fetch(uri, {...options,
    mode: 'cors',
    cache: 'default'
  });
}

const http = {
  get(uri) {
    return customFetch(uri)
  }
};

export async function getFilmList(type, offset, limit) {
  const filmListUrl = `${originUrl}/films?type=${type}&offset=${offset}&limit=${limit}`;
  const res = await http.get(filmListUrl);
  return res.json();
}
