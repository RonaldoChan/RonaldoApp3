export const callApi = ({ url, method, token, body, baseUrl }) => {
  return fetch(`${baseUrl}${url}`, {
    method,
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    redirect: "follow",
    referrer: "no-referrer",
    body: JSON.stringify(body)
  }).then(async response => {
    return response.json();
  });
};

export default callApi;
