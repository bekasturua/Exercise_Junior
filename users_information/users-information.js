window.addEventListener("load", async () => {
  const params = new URLSearchParams(location.search);
  const user = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.get("userId")}`
  )
    .then((response) => response.json())
    .then((json) => json);
  let userInfoHTML = "";
  userInfoHTML += `
    <div class="info">
      <div class="first-info">
        <h3>Name:  ${user.name}</h3>
        <h3>Username:  ${user.username}</h3>
        <h3>Email:  ${user.email}</h3>
        <h3>Phone:  ${user.phone}</h3>
        <h3>Website:  ${user.website}</h3>
      </div>
      <div class="address-info">
          <h1>Address</h1>
          <h3>Street:  ${user.address.street}</h3>
          <h3>Suite:  ${user.address.suite}</h3>
          <h3>City:  ${user.address.city}</h3>
          <h3>Zipcode:  ${user.address.zipcode}</h3>
        <div class="address-geo-info">
          <h1>Address - Geo</h1>
          <h3>Lat:  ${user.address.geo.lat}</h3>
          <h3>Lng:  ${user.address.geo.lng}</h3>
        </div>
      </div>
      <div class="company-info">
        <h1>Company</h1>
        <h3>Name:  ${user.company.name}</h3>
        <h3>CatchPhrase:  ${user.company.catchPhrase}</h3>
        <h3>Bs:  ${user.company.bs}</h3>
      </div>
    </div>
    
   


    `;
  const userInfoListContainer =
    document.getElementsByClassName("user_information")[0];
  userInfoListContainer.insertAdjacentHTML("afterend", userInfoHTML);

  const postBtn = document.getElementsByClassName("posts")[0];
  postBtn.addEventListener("click", () => {
    location.replace("../user_posts/index.html?userId=" + params.get("userId"));
  });
});
