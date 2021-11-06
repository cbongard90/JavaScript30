const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const toggle = player.querySelector(".toggle");
const progressBar = player.querySelector(".progress__filled");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

const togglePlay = () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};
const updateButton = (event) => {
  const icon = event.target.paused ? "►" : "❚ ❚";
  console.log(icon);
  toggle.textContent = icon;
};

const skip = (event) => {

  video.currentTime += parseFloat(event.target.dataset.skip);
};

const handleRangeUpdate = (event) => {
  video[event.target.name] = event.target.value;
};

const handleProgress = () => {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
};

const scrub = (event) => {
  const scrubTime = (event.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
};

video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);

toggle.addEventListener("click", togglePlay);

skipButtons.forEach((button) => {
  button.addEventListener("click", skip);
});

ranges.forEach((range) => {
  range.addEventListener("change", handleRangeUpdate);
  range.addEventListener("mousemove", handleRangeUpdate);
});

let mouseDown = false
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (event) => mouseDown && scrub(event));
progress.addEventListener("mousedown", () => mouseDown = true);
progress.addEventListener("mouseup", () => (mouseDown = false));
