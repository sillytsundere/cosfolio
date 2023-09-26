const loadProfile = async () => {
    
    console.log("hhullo");
    const response = await fetch("/profile", {
        method: "GET",
    });
    console.log("hewwo");
    if (response.ok) {
        document.location.replace("/profile");
    } else {
        alert("Could not load profile page.");
    }
};

document.querySelector("#profile").addEventListener("click", loadProfile);