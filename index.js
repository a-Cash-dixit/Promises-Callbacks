document
  .getElementById("fetchUserDatabtn")
  .addEventListener("click", getUserData);
const heading = document.createElement("h1");
heading.innerHTML = "List of users";
document.getElementById("response").append(heading);
const list = document.createElement("ol");
document.getElementById("response").append(list);
function getUserData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((json) => {
      json.map((user) => {
        //console.log(user.name);
        let point = document.createElement("li");
        point.innerText = user.name;
        document.getElementById("response").append(point);
      });
    });
}
document.getElementById("addPostForm").addEventListener("submit", HandleSubmit);
function HandleSubmit(event) {
  event.preventDefault();
  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value;
  let mypost = {
    title: title,
    body: body,
  };
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(mypost),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject({ status: res.status, statusText: res.statusText });
    })
    .then((data) => console.log(data))
    .catch((err) => {
      console.log("Error Message", err.statusText);
    });
}

// const point=document.createElement('li');
// point.innerText="First User";
// const point2=document.createElement('li');
// point2.innerText="Second User";
// document.getElementById("response").append(point)
// document.getElementById("response").append(point2)
