// const fileInput = document.getElementById('file-input');
// const audio = document.getElementById('audio');
// const playBtn = document.getElementById('play');
// const songTitle = document.getElementById('song-title');

// // Event listener for file input
// fileInput.addEventListener('change', (event) => {
//   const file = event.target.files[0]; // Get the selected file
//   if (file) {
//     const url = URL.createObjectURL(file); // Create a temporary URL for the file
//     audio.src = url; // Set the audio player's source to the selected file
//     songTitle.textContent = file.name; // Display the song title
//     audio.play(); // Automatically play the selected song
//     playBtn.textContent = '⏸️'; // Change button text to pause symbol
//   }
// });

// // Play/Pause functionality
// playBtn.addEventListener('click', () => {
//   if (audio.paused) {
//     audio.play(); // Play the song
//     playBtn.textContent = '⏸️'; // Change to pause symbol
//   } else {
//     audio.pause(); // Pause the song
//     playBtn.textContent = '▶️'; // Change to play symbol
//   }
// });

const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const songTitle = document.getElementById('song-title');
const songList = document.getElementById('song-list');

let currentSongIndex = 0;
let songs = []; // i stimulate an api to call all the songs each song has a tittle artist 


async function fetchSongs() {
  
  songs = [  
    {
      title: 'Chill Vibes',
      artist: 'muiz ',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
    },
    {
      title: 'Ocean Breeze',
      artist: 'kabir ',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
    },
    {
      title: 'Evening Flow',
      artist: 'feranmi ',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
    }
  ];

  renderSongList();
  loadSong(0);
}


function renderSongList() {
  songList.innerHTML = '';
  songs.forEach((song, index) => {
    const li = document.createElement('li');
    li.textContent = `${song.title} - ${song.artist}`;
    li.addEventListener('click', () => {
      loadSong(index);
      audio.play();
      playBtn.textContent = '⏸️';
    });
    songList.appendChild(li);
  });
}


function loadSong(index) {
  currentSongIndex = index;
  const song = songs[index];
  audio.src = song.url;
  songTitle.textContent = `${song.title} - ${song.artist}`;
}


playBtn.addEventListener('click', () => {
  if (audio.src) {
    if (audio.paused) {
      audio.play();
      playBtn.textContent = '⏸️';
    } else {
      audio.pause();
      playBtn.textContent = '▶️';
    }
  }
});

// Initialize
fetchSongs();

