//
// Old Guy Programmer
//Commujnicate with Server
//
// Jim Olivi 2023

export function postData(data) {
  fetch("http://localhost:3001/savecontact", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(data),
  })
    .then((res) => {
      if (res.status == 201) return;
      else if (res.status >= 400 && res.status <= 499) {
        const msg = `Send to the server failed\nStatus Code: ${res.status}, message ${res.statusText}`;
        console.log(msg);
        alert(msg);
      } else {
        const msg = `Send to the server failed\nStatus Code: ${res.status}, message ${res.statusText}`;
        console.log(msg);
        alert(msg);
      }
    })
    .catch((error) => {
      const msg = `Send to the server failed\nmessage ${error}`;
      console.log(msg);
      alert(msg);
    });
}
