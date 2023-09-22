const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to log out.");
  }
};

const loadProfile = async () => {
  const response = await fetch("/profile", {
    method: "GET",
  });

  if (response.ok) {
    document.location.replace("/profile");
  } else {
    alert("Could not load profile page.");
  }
};

document.querySelector("#logout").addEventListener("click", logout);
document.querySelector("#profile").addEventListener("click", loadProfile);
