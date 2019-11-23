
export const apiEndpoint = 'http://127.0.0.1:5000';
export function post(url, body) {
  return fetch(apiEndpoint + url, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(body),
  })
    .then((res) => {
      if (res.status === 204) {
        return res;
      }

      return res.json();
    })
}

export function get(url) {
  return fetch(apiEndpoint + url)
    .then((res) => res.json())
}
