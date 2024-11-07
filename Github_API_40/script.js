const input = document.querySelector("input");
const btn = document.querySelector("button");
const result = document.querySelector("#result");

const search = async () => {
  try {
    const username = input.value;
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    console.log(data);

    if (response.ok) {
      result.innerHTML = `
<div class="profile">
<div class="profile-iamge">
<img src="${data.avatar_url}">
</div>
<div class="profile-details">
<h2 class="name"> NAME:${data.name || data.login}</h2>
<p class="bio">BIO:${data.bio || "Account doesn't have bio"}</p>
<p>REPO: ${data.public_repos}</p>
<p>FOLLOWERS: ${data.followers}</p>
<p>URL:${data.url}</p>

`;
    } else {
      console.log("User not found or another error occurred.");
      result.innerHTML = `<p>User not found or another error occurred.</p>`;
    }
  } catch (error) {
    console.log("Error", error);
  }
};

btn.addEventListener("click", search);
