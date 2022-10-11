console.log("welcome to music web app");

let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "Warriyo - Mortals [NCS Release]",
    songFile: "songs/1.mp3",
    coverpath: "covers/1.jpg",
  },
  {
    songName: "Cielo - Huma-Huma",
    songFile: "songs/2.mp3",
    coverpath: "covers/2.jpg",
  },
  {
    songName: "DEAF KEV - Invincible [NCS Release]",
    songFile: "songs/3.mp3",
    coverpath: "covers/3.jpg",
  },
  {
    songName: "Different Heaven & EH!DE - My Heart",
    songFile: "songs/4.mp3",
    coverpath: "covers/4.jpg",
  },
  {
    songName: "Janji-Heroes-Tonight-feat-Johnning-",
    songFile: "songs/5.mp3",
    coverpath: "covers/5.jpg",
  },
  {
    songName: "Rabba - Salam-e-Ishq",
    songFile: "songs/6.mp3",
    coverpath: "covers/6.jpg",
  },
  {
    songName: "Sakhiyaan - Salam-e-Ishq",
    songFile: "songs/7.mp3",
    coverpath: "covers/7.jpg",
  },
  {
    songName: "Bhula Dena - Salam-e-Ishq",
    songFile: "songs/8.mp3",
    coverpath: "covers/8.jpg",
  },
  {
    songName: "Bhula Dena - Salam-e-Ishq",
    songFile: "songs/9.mp3",
    coverpath: "covers/9.jpg",
  },
  {
    songName: "Na Jaana - Salam-e-Ishq",
    songFile: "songs/10.mp3",
    coverpath: "covers/10.jpg",
  },
];
songItems.forEach((element, i) => {
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play() ;
    masterSongName.innerText = songs[songIndex].songName;
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = -1;
  }
});

audioElement.addEventListener("timeupdate", () => {
  console.log("timeupdate");
  var progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  myProgressBar.value = progress;
  console.log(progress);
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      songIndex = parseInt(e.target.id);
      audioElement.src = `songs/${songIndex + 1}.mp3`;
      audioElement.currentTime = 0;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) songIndex = 0;
  else songIndex += 1;
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  audioElement.currentTime = 0;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) songIndex = 9;
  else songIndex -= 1;

  audioElement.src = `songs/${songIndex + 1}.mp3`;
  audioElement.currentTime = 0;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
