window.addEventListener("load", async () => {
  const params = new URLSearchParams(location.search);
  const user = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.get("userId")}`
  )
    .then((response) => response.json())
    .then((json) => json);
  let userInfoHTML = "";
  userInfoHTML += `
    <h2 class="h2">Email:  ${user.email}</h2>
    <h2 class="h2">Name:  ${user.name}</h2>
    <h2 class="h2">Username:  ${user.username}</h2>
    <h2 class="h2">Phone:  ${user.phone}</h2>
    <h2 class="h2">Website:  ${user.website}</h2>
    `;
  const userInfoListContainer =
    document.getElementsByClassName("user_information")[0];
  userInfoListContainer.insertAdjacentHTML("afterend", userInfoHTML);
});