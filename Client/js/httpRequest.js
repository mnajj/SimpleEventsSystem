window.API = 'http://localhost:8080';

function httpPOST(data, route) {
  let url = API + route;
  let token = getUserToken();
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

function httpGET(route) {
  let url = API + route;
  let token = getUserToken();
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

function getUserToken() {
  let token;
  try {
    token = JSON.parse(localStorage.getItem('userToken'));
  } catch (error) {
    localStorage.clear();
    token = '';
  }
  return token;
}