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

const createFormHandler = async (event) => {
    event.preventDefault();
    console.log('please work');
    const name = document.querySelector('#cosplay-name').value.trim();
    const description = document.querySelector('#cosplay-description').value.trim();

    if (name && description) {
        const response = await fetch('/api/users/create', {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/profile');
    } else {
        alert('Failed to sign up.');
    }
    }
};
    console.log(document.querySelector('#create-post'));
// document.querySelector("#create").addEventListener("click", loadCreate);
document.querySelector("#create-post").addEventListener("click", createFormHandler);