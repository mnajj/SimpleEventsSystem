async function fillEventModalList() {
  let element = document.getElementById('event-del-li');
  let reqResult = await httpGET('/event');
  reqResult.data.forEach(elem => {
    element.innerHTML += `<option value="${elem.title}">${elem.title}</option>`
  });
}