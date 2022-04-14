function httpPOST(data, url) {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));
}