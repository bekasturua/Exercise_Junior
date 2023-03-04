window.addEventListener("load", async () => {
  const users = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => json);
  let usersNameHTML = "";
  users.forEach((user) => {
    usersNameHTML += `
      <li><button id='${user.id}' class='user'>${user.name}</button></li>
      `;
  });
  const userListContainer = document.getElementsByClassName("users_list")[0];
  userListContainer.insertAdjacentHTML("afterend", usersNameHTML);

  let userBtns = [...document.getElementsByClassName("user")];
  userBtns.forEach((userBtn) => {
    userBtn.addEventListener("click", () => {
      location.replace("../users_information/index.html?userId=" + userBtn.id);
    });
  });
});
