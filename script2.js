document.addEventListener("DOMContentLoaded", function () {
   //shuffle songs
    const songs = [
    { spotifyUrl: "https://open.spotify.com/track/22I3h5AOENlH4CqXJsEbFR?si=0c6cf7aefe694e93", albumArt: "songCovers/collide.jpg", name: "Collide - Justine Skye, Tyga" }, //e
    { spotifyUrl: "https://open.spotify.com/track/5mjYQaktjmjcMKcUIcqz4s?si=8e7e35cc74a240ef", albumArt: "songCovers/strangers.jpg", name: "Strangers - Kenya Grace" },
    { spotifyUrl: "https://open.spotify.com/track/0DiWol3AO6WpXZgp0goxAV?si=ebf3d45473fc4647", albumArt: "songCovers/onemoretime.jpg", name: "One More Time - Daft Punk" },
    { spotifyUrl: "https://open.spotify.com/track/664gdARxaClFsoF5SXKOws?si=dc95f8060d7440de", albumArt: "songCovers/here.jpg", name: "Here - Alessia Cara" },
    { spotifyUrl: "https://open.spotify.com/track/74fpNVAJrKGQuqHETi4WSt?si=7801cc46eaac4937", albumArt: "songCovers/tenniscourt.jpg", name: "Tennis Court - Lorde" },
    { spotifyUrl: "https://open.spotify.com/track/2Foc5Q5nqNiosCNqttzHof?si=9ef8bc3a6d6f4536", albumArt: "songCovers/getlucky.jpg", name: "Get Lucky - Daft Punk, Pharrell Williams" },
    { spotifyUrl: "https://open.spotify.com/track/4XNn3iaEu6MLiOnt5makMJ?si=a72bb5020a644b48", albumArt: "songCovers/dancemytearsaway.jpg", name: "Dance My Tears Away - Latroit" },
    { spotifyUrl: "https://open.spotify.com/track/6GyFP1nfCDB8lbD2bG0Hq9?si=5b4df83a696c4d8a", albumArt: "songCovers/midnightcity.jpg", name: "Midnight City - M83" },
    { spotifyUrl: "https://open.spotify.com/track/1nV6VafLPuRSsXgbDY3i6L?si=a89e1cd9f5544257", albumArt: "songCovers/onelastdance.jpg", name: "One Last Dance - Audien" },
    { spotifyUrl: "https://open.spotify.com/track/5KPYMz7DUZc6ZdcxNgfL18?si=2b92ceb03527405c", albumArt: "songCovers/heavier.jpg", name: "Heavier - ODESZA" },
    { spotifyUrl: "https://open.spotify.com/track/5VfEuwErhx6X4eaPbyBfyu?si=16c5ebfe53354960", albumArt: "songCovers/intro.jpg", name: "Intro - The xx" },
    { spotifyUrl: "https://open.spotify.com/track/2gQK13gXYZRq2MgvPJyHx8?si=3cea5afbd7d444de", albumArt: "songCovers/thelastgoodbye.jpg", name: "The Last Goodbye - ODESZA" },
    { spotifyUrl: "https://open.spotify.com/track/2MvvoeRt8NcOXWESkxWn3g?si=1dfe16ec79a04a8a", albumArt: "songCovers/tenniscourt.jpg", name: "Ribs - Lorde" },
    { spotifyUrl: "https://open.spotify.com/track/5m2ygcCfU5qA0kLyrR4xWR?si=69484c63943d4db3", albumArt: "songCovers/wideawake.jpg", name: "Wide Awake - ODESZA" },
    { spotifyUrl: "https://open.spotify.com/track/221qmpQeBNV87sUjQeUTVH?si=e0f858cae8a742db", albumArt: "songCovers/aroundme.jpg", name: "Around Me - Metro Boomin, Don Toliver" },
    { spotifyUrl: "https://open.spotify.com/track/1GwMQaZz6Au3QLDbjbMdme?si=a4db5237219643b8", albumArt: "songCovers/callitwhatyouwant.jpg", name: "Call It What You Want - Taylor Swift" },
    { spotifyUrl: "https://open.spotify.com/track/4qu63nuBpdn0qHUHuObEj1?si=b7e22c5674c74f29", albumArt: "songCovers/leavebeforeyouloveme.jpg", name: "Leave Before You Love Me - Marshmello" },
    { spotifyUrl: "https://open.spotify.com/track/5WoaF1B5XIEnWfmb5NZikf?si=181cb97522da4e10", albumArt: "songCovers/skywalker.jpg", name: "Sky Walker - Miguel, Travis Scott" },
    { spotifyUrl: "https://open.spotify.com/track/6FZDfxM3a3UCqtzo5pxSLZ?si=7c2a5d4b847440c0", albumArt: "songCovers/withoutme.jpg", name: "Without Me - Halsey" },
    { spotifyUrl: "https://open.spotify.com/track/2ufmtcIFdFpuUYBPXK5f67?si=c8f919f025f64189", albumArt: "songCovers/withoutme.jpg", name: "Graveyard - Halsey" },
    { spotifyUrl: "https://open.spotify.com/track/0JXXNGljqupsJaZsgSbMZV?si=798506f869b941ed", albumArt: "songCovers/surething.jpg", name: "Sure Thing - Miguel" },
    { spotifyUrl: "https://open.spotify.com/track/3GZD6HmiNUhxXYf8Gch723?si=51270f97b7af41cb", albumArt: "songCovers/lost.jpg", name: "Lost - Frank Ocean" },
    { spotifyUrl: "https://open.spotify.com/track/0fYVliAYKHuPmECRs1pbRf?si=03b2c7fc3f9d406b", albumArt: "songCovers/renegades.jpg", name: "Renegades - X Ambassadors" },
    { spotifyUrl: "https://open.spotify.com/track/2WWfjbHALIb3e7FMcj9mr4?si=dd70e227c8ae4b37", albumArt: "songCovers/lineofsight.jpg", name: "Line Of Sight - ODESZA" },
    { spotifyUrl: "https://open.spotify.com/track/5Nu5Uyoauauy9LFePYL1Z3?si=c363f94d10a8489e", albumArt: "songCovers/lineofsight.jpg", name: "Late Night - ODESZA" },
    { spotifyUrl: "https://open.spotify.com/track/0nrRP2bk19rLc0orkWPQk2?si=b26eef0c87f6429e", albumArt: "songCovers/wakemeup.jpg", name: "Wake Me Up - Avicii" },
    { spotifyUrl: "https://open.spotify.com/track/59nOXPmaKlBfGMDeOVGrIK?si=dbf4efc45f9c441d", albumArt: "songCovers/waitforu.jpg", name: "WAIT FOR U - Future, Drake, Tems" },
    { spotifyUrl: "https://open.spotify.com/track/5jQI2r1RdgtuT8S3iG8zFC?si=c8b7b22bb4de4742", albumArt: "songCovers/lavenderhaze.jpg", name: "Lavender Haze - Taylor Swift" },
    { spotifyUrl: "https://open.spotify.com/track/3azJifCSqg9fRij2yKIbWz?si=3b3595436a4c4a84", albumArt: "songCovers/thecolorviolet.jpg", name: "The Color Violet - Tory Lanez" },
  
        // { spotifyUrl: "", albumArt: "songCovers/", name: "" },
        // { spotifyUrl: "", albumArt: "songCovers/", name: "" },
        // { spotifyUrl: "", albumArt: "songCovers/", name: "" },
        // { spotifyUrl: "", albumArt: "songCovers/", name: "" },
  
    ];
  
  
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  
    function shuffleSongs() {
      shuffleArray(songs); 

      for (let i = 1; i <= 3; i++) {
        const songEl = document.getElementById(`song${i}`);
        songEl.href = songs[i - 1].spotifyUrl;
        songEl.children[0].src = songs[i - 1].albumArt; 
        songEl.children[0].alt = `Album cover for ${songs[i - 1].name}`;
        songEl.children[1].textContent = songs[i - 1].name;
      }
    }
  
    shuffleSongs();
  
    document.getElementById('shuffleBtn').addEventListener('click', shuffleSongs);
  
  });

  