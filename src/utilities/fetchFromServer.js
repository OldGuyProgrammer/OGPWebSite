//
// Old Guy Programmer
//Communicate with Server
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
      if (res.status == 201) {
        const msg = `Send to the server succeeded\nStatus Code: ${res.status}`;
        console.log(msg);
        return 201;
      } else {
        const msg = `Send to the server failed\nStatus Code: ${res.status}, message: ${res.statusText}`;
        console.log(res);
        console.log(msg);
        return res.status;
      }
    })
    .catch((error) => {
      const msg = `Send to the server failed\nmessage: ${error}`;
      console.log(msg);
      return error;
    });
}
