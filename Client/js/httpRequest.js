window.API = 'http://localhost:8080';
let token = JSON.parse(localStorage.getItem('userToken'));
if (token == undefined) {
  token = '';
}

function httpPOST(data, url) {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token
    }
  })
    .then(function (response) {
      return response;
    })
    .catch(error => console.log(error));
}

// async function httpPOST(data, url) {
//   const response = await fetch(url, {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {
//       "Content-Type": "application/json",
//       'Authorization': 'Bearer ' + token
//     }
//   });
//   return response.json();
// }

function httpGET(url) {
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token
    }
  })
    .then((response) => {
      return response.json();
    })
    .catch(error => console.log(error));
}


function saveJWTToLocalStorage(token) {
  localStorage.setItem('userToken', JSON.stringify(token));
}