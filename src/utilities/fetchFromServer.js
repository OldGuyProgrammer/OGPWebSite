//
// Old Guy Programmer
//Commujnicate with Server
//
// Jim Olivi 2023

export async function postData(data) {
  try {
    const res = await fetch("http://localhost:3001/savecontact", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(data),
    });
    const result = await res.json();
    console.log("success: ", result);
  } catch (error) {
    console.log("Send to savecontact failed.");
  }
}
