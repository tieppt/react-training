export function fetchData(input: RequestInfo, init?: RequestInit | undefined) {
  return fetch(input, init).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.json();
    }
    throw response;
  });
}
