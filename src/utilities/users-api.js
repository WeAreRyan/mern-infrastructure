import sendRequest from './send-request'
const BASE_URL = "/api/users";

export async function signUp(userData) {
  return sendRequest(BASE_URL, 'Post', userData)
    // !! CODE BELOW IS HANDLED BY THE sendRequest FUNCTION IN UTILITIES/SEND-REQUEST.JS !!!
  // // Fetch uses an options object as a second arg to make requests
  // // other than basic GET requests, include data, headers, etc.
  // const res = await fetch(BASE_URL, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   // Fetch requires data payloads to be stringified
  //   // and assigned to a body property on the options object
  //   body: JSON.stringify(userData),
  // });
  // // Check if request was successful
  // if (res.ok) {
  //   // res.json() will resolve to the JWT
  //   return res.json();
  // } else {
  //   throw new Error("Invalid Sign Up");
  // }
}

export async function login(userCredentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', userCredentials)
  // !! CODE BELOW IS HANDLED BY THE sendRequest FUNCTION IN UTILITIES/SEND-REQUEST.JS !!!
  // const res = await fetch(BASE_URL + "/login", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(userCredentials),
  // });
  // if (res.ok) {
  //   return res.json();
  // } else {
  //   throw Error("Invalid Login");
  // }
}

export async function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}

