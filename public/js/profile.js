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

document.querySelector("#profile").addEventListener("click", loadProfile);