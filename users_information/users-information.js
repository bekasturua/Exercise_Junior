window.addEventListener("load", async () => {
  const params = new URLSearchParams(location.search);
  const user = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.get("userId")}`
  )
    .then((response) => response.json())
    .then((json) => json);
  let userInfoHTML = "";
  userInfoHTML += `
    <h2 class="h2">Name:  ${user.name}</h2>
    <h2 class="h2">Username:  ${user.username}</h2>
    <h2 class="h2">Email:  ${user.email}</h2>
    <h2 class="h2">Address</h2>
    <h2 class="h2">Street:  ${user.address.street}</h2>
    <h2 class="h2">Street:  ${user.address.suite}</h2>
    <h2 class="h2">Street:  ${user.address.city}</h2>
    <h2 class="h2">Street:  ${user.address.zipcode}</h2>
    <h2 class="h2">Address - Geo</h2>
    <h2 class="h2">Street:  ${user.address.geo.lat}</h2>
    <h2 class="h2">Street:  ${user.address.geo.lng}</h2>
    <h2 class="h2">Phone:  ${user.phone}</h2>
    <h2 class="h2">Website:  ${user.website}</h2>
    <h2 class="h2">Company</h2>
    <h2 class="h2">Website:  ${user.company.name}</h2>
    <h2 class="h2">Website:  ${user.company.catchPhrase}</h2>
    <h2 class="h2">Website:  ${user.company.bs}</h2>


    `;
  const userInfoListContainer =
    document.getElementsByClassName("user_information")[0];
  userInfoListContainer.insertAdjacentHTML("afterend", userInfoHTML);

  const postBtn = document.getElementsByClassName("posts")[0];
  postBtn.addEventListener("click", () => {
    location.replace("../user_posts/index.html?userId=" + params.get("userId"));
  });
});
