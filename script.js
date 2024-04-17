var playBtn = document.getElementById("play"),
  resetBtn = document.getElementById("reset"),
  hearbeat = document.getElementById("heartbeat");
audios = document.querySelectorAll("audio");
console.log(audios);

playBtn.addEventListener(
  "mouseover",
  function () {
    [].forEach.call(audios, function (audio) {
      // do whatever
      audio.play();
    });
  },
  false
);

playBtn.addEventListener(
  "mouseleave",
  function () {
    heartbeat.pause();
    heartbeat.currentTime = 0;
  },
  false
);

document
  .querySelector(".menu-button")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default behavior of the anchor tag
    showSidebar();
  });

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
  // Prevent scrolling on the body when the sidebar is open
  document.body.style.overflow = "hidden";
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
  // Restore scrolling on the body when the sidebar is closed
  document.body.style.overflow = "auto";
}

// Automatically close the sidebar when a list item is clicked
document.querySelectorAll(".sidebar a").forEach((item) => {
  item.addEventListener("click", () => {
    hideSidebar();
  });
});
