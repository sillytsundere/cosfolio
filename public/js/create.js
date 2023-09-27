const loadCreate = async () => {
    console.log("create.js");
    const response = await fetch("/create", {
        method: "GET",
    });
    if (response.ok) {
        document.location.replace("/create");
    } else {
        alert("Could not load post creation.");
    }
};

document.querySelector("#create").addEventListener("click", loadCreate);
