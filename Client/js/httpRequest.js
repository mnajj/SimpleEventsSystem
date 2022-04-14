window.API = 'http://localhost:8080';
window.JWT = '';

// function httpPOST(data, url) {
//   return fetch(url, {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {
//       "Content-Type": "application/json"
//     }
//   })
//     .then(result => result.json())
//     .then((json) => {
//       return json;
//     })
//     .catch(err => console.log(err));
// }

async function httpPOST(data, url) {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  });
  return response.json();
}