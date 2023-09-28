const createFormHandler = async (event) => {
  event.preventDefault();
  console.log("please work");
  const name = document.querySelector("#cosplay-name").value.trim();
  const description = document
    .querySelector("#cosplay-description")
    .value.trim();

  if (name && description) {
    const response = await fetch("/api/users/create", {
      method: "POST",
      body: JSON.stringify({ name, description }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to sign up.");
    }
  }
};

if (document.querySelector("#create-post")) {
  document.querySelector("#create-post").addEventListener("click", createFormHandler);
}
