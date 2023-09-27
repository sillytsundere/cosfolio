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

var confettiSettings = { target: "my-canvas" };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();

setTimeout(() => {
  confetti.clear();
  document.getElementById("my-canvas").remove();
}, 3000);

