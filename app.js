const apps = [
  { id: 'finder',   title: 'Finder',   html:`
    <div class="finder">
          <h2>👋 Hi, I'm Aditya</h2>
          <p>Here are my socials.</p>
          <button>GitHub</button>
          <button>LinkedIn</button>
    </div>`,
    top: 60, left: 340 
  },
  { id: 'appstore',   title: 'App Store',   html:`<div class="app-store">
    <h1>here are some applications that i use</h1>
  </div>`, 
    top: 60, left: 345 
  },
  { id: 'spotify', title: 'Spotify', html:`
    <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/playlist/72FEk3sDYTJatVC9ZYboBZ?utm_source=generator&theme=0&si=cfab8f30aa0a4ac4" width="100%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>` ,
     top: 65, left: 340 
    },
  { id: 'netflix',   title: 'Netflix',   html: `
    <div class="netflix">
        <div class="netflix-app">
            <nav class="netflix-navbar">
                <div class="netflix-logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="76" height="20" fill="none" viewBox="0 0 370 100"><path fill="#e50914" d="M50.83 93.54V0H35.21v56.77L14.9 0H0v100c5.31-.83 10.31-1.56 15.94-2.19V43.23l17.81 52.4c5.94-.84 11.56-1.15 17.08-2.09m30.84-56.87V15.63h27.6V0H66.04v92.3l43.23-3.45v-15c-9.27.32-18.44 1.05-27.6 1.67V52.3c5.83-.31 13.95-.31 20.83-.31V36.35c-5.52 0-14.8.32-20.83.32m85.73-21.04V0h-48.03v15.63h16.15V87.7c5.1-.21 10.42-.21 15.63-.21V15.63zm25.41 19.9v-19.9h28.34V0H177.4v86.67h15.41V51.15h21.36V35.52zm53.65 37.39V0h-15.63v87.7a930 930 0 0 1 42.2 2.1V74.26c-8.65-.42-17.61-1.14-26.57-1.35m39.79 17.91c5 .32 10.2.52 15.31 1.15V0h-15.31zM370 0h-17.08l-10.94 26.25L331.78 0H314.9l18.23 46.98-20.1 45.83c5.62.73 11.14 1.04 16.76 1.98l11.46-26.56 11.15 28.96c5.93.94 11.77 1.98 17.6 2.81l-19.8-52.4z"><script xmlns=""/></path></svg>
                </div>
                <button class="nav-button">Home</button>
                <button class="nav-button">Shows</button>
                <button class="nav-button">Moives</button>
                <button class="nav-button">My List</button>
            </nav>
            <main>
              <div class="hero">
                  <div class="hero-content">
                      <h1 class="hero-title">Chainsaw Man The Movie: Reze Arc</h1>
                      <div class="hero-meta">
                          <span>Movie</span>
                          <span class="hero-dot"></span>
                          <span>Anime</span>
                          <span class="hero-dot"></span>
                          <span>2026</span>
                          <span class="hero-dot"></span>
                          <span>1 Episodes</span>
                      </div>
                      <p class="hero-description">
                          When a lost book reappears, a young inventor joins forces with a sake brewer's daughter to bring its electric ideas to life.
                      </p>
                      <div class="hero-buttons">
                          <button class="btn-play">▶ Play</button>
                          <button class="btn-info">More Info</button>
                      </div>
                  </div>
              </div>
              <p class="title">My Recommendations</p>
              <p class="row-title">Shows</p>
              <div class="row-wrapper">
                  <button class="scroll-btn scroll-left">‹</button>
                  <div class="row-scroll">
                      <div class="poster-card">
                        <img src="/assets/series1.webp" alt="">
                        <p>Breaking Bad</p>
                    </div>
                    <div class="poster-card">
                        <img src="/assets/series10.jpg" alt="">
                        <p>Game Of Thrones</p>
                    </div>
                    
                    <div class="poster-card">
                        <img src="/assets/series3.webp" alt="">
                        <p>End Of The Fucking World</p>
                    </div>
                    <div class="poster-card">
                        <img src="/assets/series4.webp" alt="">
                        <p>Dexter</p>
                    </div>
                    <div class="poster-card">
                        <img src="/assets/series5.jpg" alt="">
                        <p>Money Heist</p>
                    </div>
                    <div class="poster-card">
                        <img src="/assets/series2.webp" alt="">
                        <p>Sex Education</p>
                    </div>
                    <div class="poster-card">
                        <img src="/assets/series6.jpg" alt="">
                        <p>Stranger Things</p>
                    </div>
                    <div class="poster-card">
                        <img src="/assets/series7.jpg" alt="">
                        <p>Outlander</p>
                    </div>
                    <div class="poster-card">
                        <img src="/assets/series8.webp" alt="">
                        <p>Never Have I Ever</p>
                    </div>
                    <div class="poster-card">
                        <img src="/assets/series9.jpg" alt="">
                        <p>Peaky Blinders</p>
                    </div>
                    
                  </div>
                  <button class="scroll-btn scroll-right">›</button>
              </div>

            <div class="rec-section">
                <p class="row-title">Anime</p>
                <div class="row-wrapper">
                    <button class="scroll-btn scroll-left">‹</button>
                    <div class="row-scroll">
                        <div class="poster-card">
                            <img src="/assets/anime1.jpg" alt="">
                            <p>One Piece</p>
                        </div>
                        <div class="poster-card">
                            <img src="/assets/anime2.jpg" alt="">
                            <p>Cyberpunk Edgerunners</p>
                        </div>
                        <div class="poster-card">
                            <img src="/assets/anime3.webp" alt="">
                            <p>DanDaDan</p>
                        </div>
                        <div class="poster-card">
                            <img src="/assets/anime4.webp" alt="">
                            <p>Frieren:Beyond Journey's End</p>
                        </div>
                        <div class="poster-card">
                            <img src="/assets/anime5.webp" alt="">
                            <p>Hell's Paradise</p>
                        </div>
                        <div class="poster-card">
                            <img src="/assets/anime6.jpg" alt="">
                            <p>Attack On Titan</p>
                        </div>
                        <div class="poster-card">
                            <img src="/assets/anime7.jpg" alt="">
                            <p>Takopi's Original Sin</p>
                        </div>
                        <div class="poster-card">
                            <img src="/assets/anime8.avif" alt="">
                            <p>Record Of Ragnarok</p>
                        </div>
                        <div class="poster-card">
                            <img src="/assets/anime9.webp" alt="">
                            <p>Violet Evergarden</p>
                        </div>
                        <div class="poster-card">
                            <img src="/assets/anime10.webp" alt="">
                            <p>Demon Slayer</p>
                        </div>
                    </div>
                    <button class="scroll-btn scroll-right">›</button>
                </div>
            </div>
            <div class="rec-section">
                <p class="row-title">Movies</p>
                <div class="row-wrapper">
                    <button class="scroll-btn scroll-left">‹</button>
                    <div class="row-scroll">
                        <div class="poster-card">
                            <img src="/assets/movie1.webp" alt="">
                            <p>The Odyssey</p>
                        </div>
                        <div class="poster-card">
                            <img src="/assets/movie6.jpg" alt="">
                            <p>Parasite</p>
                        </div>
                        <div class="poster-card">
                            <img src="/assets/movie2.jpg" alt="">
                            <p>(500) days of summer</p>
                        </div>
                        <div class="poster-card">
                            <img src="/assets/movie13.webp" alt="">
                            <p>Saiyara</p>
                        </div>
                        <div class="poster-card">
                            <img src="/assets/movie3.webp" alt="">
                            <p>Enola Holmes 3</p>
                        </div>
                        <div class="poster-card">
                            <img src="/assets/movie4.webp" alt="">
                            <p>Adolescence</p>
                        </div>
                        <div class="poster-card">
                            <img src="/assets/movie5.webp" alt="">
                            <p>Grave Of The Fireflies</p>
                        </div>
                        
                        <div class="poster-card">
                            <img src="/assets/movie7.webp" alt="">
                            <p>Dhurandhar</p>
                        </div>
                        <div class="poster-card">
                            <img src="/assets/movie8.webp" alt="">
                            <p>Yeh Jawani Hai Diwani</p>
                        </div>
                        <div class="poster-card">
                            <img src="/assets/movie9.webp" alt="">
                            <p>Laapataa Ladies</p>
                        </div>
                        <div class="poster-card">
                            <img src="/assets/movie10.jpg" alt="">
                            <p>Voicemails For Isabelle</p>
                        </div>
                        <div class="poster-card">
                            <img src="/assets/movie11.webp" alt="">
                            <p>Final Destination</p>
                        </div>
                        <div class="poster-card">
                            <img src="/assets/movie12.jpg" alt="">
                            <p>The Great Flood</p>
                        </div>
                        
                    </div>
                    <button class="scroll-btn scroll-right">›</button>
                </div>
            </div>
            <div class="rec-section">
                <p class="row-title">Drama</p>
                <div class="row-wrapper">
                    <button class="scroll-btn scroll-left">‹</button>
                    <div class="row-scroll">
                        <div class="poster-card">
                            <img src="/assets/drama1.webp" alt="">
                            <p>When Life Gives You Tangerines</p>
                        </div>
                        <div class="poster-card">
                            <img src="/assets/drama2.webp" alt="">
                            <p>The 8 Show</p>
                        </div>
                        <div class="poster-card">
                            <img src="/assets/drama3.webp" alt="">
                            <p>If Wishes Could Kill Us</p>
                        </div>
                        <div class="poster-card">
                            <img src="/assets/drama4.webp" alt="">
                            <p>Squid Game</p>
                        </div>
                        <div class="poster-card">
                            <img src="/assets/drama5.webp" alt="">
                            <p>The Glory</p>
                        </div>
                        <div class="poster-card">
                            <img src="/assets/drama6.jpg" alt="">
                            <p>All Of Us Are Dead</p>
                        </div>
                        <div class="poster-card">
                            <img src="/assets/drama7.jpg" alt="">
                            <p>Alice In The Borderland</p>
                        </div>
                        <div class="poster-card">
                            <img src="/assets/drama8.jpg" alt="">
                            <p>Weak Hero</p>
                        </div>
                        <div class="poster-card">
                            <img src="/assets/drama9.jpg" alt="">
                            <p>Sweet Home</p>
                        </div>
                    </div>
                    <button class="scroll-btn scroll-right">›</button>
                </div>
            </div>
            <footer class="footer-disclaimer">
                <span>© 2026 Netflix.<br>This is a independent portfolio project and is not affiliated with, endorsed by, or connected to Netflix, Inc.<br>All Netflix trademarks, logos, and content are property of their respective owners.</span>
            </footer>
            </main>
            
        </div>
    </div>`, top: 45, left: 310 },
  { id: 'notes',   title: 'Notes',   html:` <div class="notes">
            <p class="heading">
                <span>About Me</span>
            </p>

            <p class="about-me">
                Hey!<br>
                Myself Aditya Shah, a computer science student at Graphic Era Hill University, Dehradun.<br>
                <br>
                I'm currently strengthening my foundations in JavaScript, Data Structures & Algorithms, 
                and modern web development while creating projects that combine functionality with thoughtful design.
                I enjoy experimenting with animations, intuitive user interfaces, and immersive experiences,
                such as my macOS-inspired portfolio.
                <br>
                <br>
                Beyond coding, I love turning ideas into reality—whether it's developing creative side projects,
                 contributing to open source, or continuously learning new technologies. 
                 My goal is to become a developer who builds products that are both visually
                 appealing and genuinely useful.
                 <br>
                 <br>
                 When I'm not programming, you'll probably find me solving LeetCode problems, playing games or guitar, watching anime, or trying to fix my sleep schedule T.T .
                
            </p>
        </div>`
    , top: 60, left: 345 },
  { id: 'setting', title: 'Settings', html: `<div><h2>settings (; </h2></div>`, top: 80, left: 265 },
  { id: 'mail', title: 'Mail', html: `<div><h2>if you wanna contact me just dm me on linkedin or mail me at adityashah0989@gmail.com  </h2></div>`, top: 85, left: 260 },
  { id: 'terminal', title: 'Terminal', html: `<div class="terminal"><pre>Hey!</pre>
        <pre class="para">Welcome to ADI's Terminal. Write "cmd" to know the commands</pre>
        <pre class="initcmd">visitor@adi's-os ~ %  </pre></div>`, top: 80, left: 260 },
  { id: 'trash', title: 'Trash', html: `<div><p>Your Haters</p></div>`
    , top: 69, left: 350 }
];

const nowPlaying = {
  title: "Sirf Tujhse",
  artist: "Saksham Sehgal",
  albumArt: "/assets/sirftujhse.png", 
  duration: 180 
};

const API_KEY = "17cc714df1ea4a27b7883100262607";


async function loadCity(city) {

    const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
    );

    const data = await res.json();

    const id = city.toLowerCase();

    document.querySelector(`#temp-${id}`).textContent =
        `${Math.round(data.current.temp_c)}°C`;

    document.querySelector(`#condition-${id}`).textContent =
        data.current.condition.text;

    document.querySelector(`#weather-icon-${id}`).src =
        "https:" + data.current.condition.icon;
}

loadCity("Dehradun");
loadCity("Delhi");


function updateClock() {
    const now = new Date();
    
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    const dayName = days[now.getDay()];
    const monthName = months[now.getMonth()];
    const dateNum = now.getDate();
    
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    
    document.getElementById("clock").innerHTML = `${dayName} ${monthName} ${dateNum}&nbsp;&nbsp;${hours}:${minutes} ${ampm}`;

    const indiaTime = new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        minute: "2-digit",
        hour12: true
    }).format(now);

    document.getElementById("india-time").textContent = indiaTime

}

updateClock();
setInterval(updateClock, 1000);

// ---- Focus / z-index logic (unchanged from Step 1) ----
  let highestZ = 10;
 
  function bringToFront(win) {
    document.querySelectorAll('.window').forEach(w => w.classList.remove('active'));
    win.classList.add('active');
    highestZ += 1;
    win.style.zIndex = highestZ;
  }
 
  // ---- Drag logic (unchanged from Step 1) ----
  function makeDraggable(win) {
    const titlebar = win.querySelector('.titlebar');
    let offsetX = 0, offsetY = 0;
    let dragging = false;
 
    titlebar.addEventListener('mousedown', (e) => {
      dragging = true;
      bringToFront(win);
      const rect = win.getBoundingClientRect();
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;
    });
 
    document.addEventListener('mousemove', (e) => {
      if (!dragging) return;
      win.style.left = (e.clientX - offsetX) + 'px';
      win.style.top = (e.clientY - offsetY) + 'px';
    });
 
    document.addEventListener('mouseup', () => {
      dragging = false;
    });
 
    win.addEventListener('mousedown', () => bringToFront(win));
  }
 
  // ---- NEW: build a window from a data object instead of writing HTML by hand ----
  function createWindow({ id, title, html, top = 100, left = 100 }) {
    const win = document.createElement('div');
    win.className = 'window';
    win.dataset.app = id;
    win.style.top = top + 'px';
    win.style.left = left + 'px';
 
    win.innerHTML = `
      <div class="titlebar">
        <div class="dot red"></div>
        <div class="dot yellow"></div>
        <div class="dot green"></div>
        <span class="titlebar-label">${title}</span>
      </div>

      <div class="content">
        ${html}
      </div>
    `;

  const closeBtn = win.querySelector('.dot.red');
  closeBtn.addEventListener('click', () => {
    win.remove();
  });

  const minimizeBtn = win.querySelector('.dot.yellow');
  minimizeBtn.addEventListener('click', () => {
    minimizeWindow(win, id);
  });

  const maximizeBtn = win.querySelector('.dot.green');
maximizeBtn.addEventListener('click', () => toggleMaximize(win));
 
    document.body.appendChild(win);
    makeDraggable(win);
    bringToFront(win);
    return win;
  }

function toggleMaximize(win) {
  win.classList.toggle('maximized');
}

function minimizeWindow(win, id) {
  const dockIcon = document.getElementById(id);
  if (!dockIcon) {
    win.style.transform = 'scale(0.1)';
    win.classList.add('minimized');
    return;
  }

  const winRect = win.getBoundingClientRect();
  const iconRect = dockIcon.getBoundingClientRect();

  const winCenterX = winRect.left + winRect.width / 2;
  const winCenterY = winRect.top + winRect.height / 2;
  const iconCenterX = iconRect.left + iconRect.width / 2;
  const iconCenterY = iconRect.top + iconRect.height / 2;

  const translateX = iconCenterX - winCenterX;
  const translateY = iconCenterY - winCenterY;

  win.style.transform = `translate(${translateX}px, ${translateY}px) scale(0.1)`;
  win.classList.add('minimized');
}


function toggleWindow(id, config) {
  let win = document.querySelector(`[data-app="${id}"]`);

  if (!win) {
    createWindow(config);
  } else if (win.classList.contains('minimized')) {
    win.classList.remove("minimized");
    win.style.transform = '';
    bringToFront(win);
  } else {
    minimizeWindow(win, id);
  }
}


const dockButtons = document.querySelectorAll('.apps button');

dockButtons.forEach(button => {
  button.addEventListener('click', () => {
    const id=button.id;
    const config = apps.find(app => app.id === id);
    toggleWindow(id,config);
  });
});

const dock = document.querySelector('.dock');
const icons = document.querySelectorAll('.apps button');
const maxDistance = 100;

dock.addEventListener('mousemove', (e) => {
  icons.forEach(icon => {
    const rect = icon.getBoundingClientRect();
    let iconCenterX = rect.left + rect.width / 2
    let distance=Math.abs(e.clientX - iconCenterX);
    let scale = 1 + 0.5 * Math.max(0, 1 - distance / maxDistance);
    icon.style.transform=`scale(${scale})`;
  });
});

dock.addEventListener("mouseleave",()=>{
  icons.forEach(icon=>{
    icon.style.transform='scale(1)';
  })
})



function toggleMaximize(win) {
  if (win.classList.contains('maximized')) {
    // RESTORE: read saved values back and re-apply them to win.style
    win.style.top = win.dataset.prevTop;
    win.style.left = win.dataset.prevLeft;
    win.style.width = win.dataset.prevWidth;
    win.style.height = win.dataset.prevHeight;
    win.classList.remove('maximized');
  } else {
    // MAXIMIZE: save current bounds first
    win.dataset.prevTop = win.style.top;
    win.dataset.prevLeft = win.style.left;
    win.dataset.prevWidth = win.style.width;
    win.dataset.prevHeight = win.style.height;

    // then overwrite win.style directly (not win.dataset.style!)
    win.style.top = '28px';
    win.style.left = '0px';
    win.style.width = '99.8vw';
    win.style.height = 'calc(100vh - 30px)';
    win.classList.add('maximized');
  }
}

// Global delegated scroll button listener for dynamic windows
document.addEventListener('click', (e) => {
    const leftBtn = e.target.closest('.scroll-left');
    const rightBtn = e.target.closest('.scroll-right');

    if (leftBtn) {
        const wrapper = leftBtn.closest('.row-wrapper');
        const row = wrapper ? wrapper.querySelector('.row-scroll') : null;
        if (row) {
            row.scrollBy({ left: -300, behavior: 'smooth' });
        }
    } else if (rightBtn) {
        const wrapper = rightBtn.closest('.row-wrapper');
        const row = wrapper ? wrapper.querySelector('.row-scroll') : null;
        if (row) {
            row.scrollBy({ left: 300, behavior: 'smooth' });
        }
    }
});



const playPauseBtn=document.querySelector(".play-pause-btn");
const progressBar=document.querySelector(".progress-bar");

// playPauseBtn.addEventListener("click",()=>{
//     playPauseBtn.classList.toggle("playing");

//     if (playPauseBtn.classList.contains('playing')) {
//         timer = setInterval(updateProgress, 1000);
//     } else {
//         clearInterval(timer);
//     }
// });

if (playPauseBtn) {
    playPauseBtn.addEventListener('click', () => {
        if (!window.spotifyController) return;

        if (playPauseBtn.classList.contains('playing')) {
            window.spotifyController.pause();
        } else {
            window.spotifyController.play();
        }
        playPauseBtn.classList.toggle('playing');
    });
}

window.onSpotifyIframeApiReady = (IFrameAPI) => {
    const element = document.getElementById('spotify-embed');
    if (!element) return;
    const options = {
        uri: 'spotify:track:5zICn0hbsUvZBpHeffRQcj'
    };
    IFrameAPI.createController(element, options, (EmbedController) => {
        window.spotifyController = EmbedController;
        EmbedController.addListener('playback_update', (e) => {
            const { position, duration, isPaused } = e.data;
            if (progressBar && duration > 0) {
                const percent = (position / duration) * 100;
                progressBar.style.width = percent + '%';
            }
            if (playPauseBtn && isPaused !== undefined) {
                playPauseBtn.classList.toggle('playing', !isPaused);
            }
        });
    });
};

const songs=[
    {title:'Sirf Tujhse' ,artist:'Saksham Sehgal',albumArt:"assets/sirftujhse.png",uri:"spotify:track:5zICn0hbsUvZBpHeffRQcj"},
    {title:'Petels On The Moon',artist:'Wasia Project',albumArt:"assets/song1.jpg",uri:"spotify:track:26qigRagi9CRNhbGYajKOS"},
    {title:'Seasons',artist:'Wave To Earth',albumArt:"assets/song2.jpg",uri:"spotify:track:0aVd7QiY8BstysHb62c5Fi"},
    {title:'REDRED',artist:'CORTIS',albumArt:"assets/song3.jpg",uri:"spotify:track:2fCwv2ppU5nTRTckomIGsd"}
];

const prevbtn=document.querySelector(".prev-btn");
const nextbtn=document.querySelector(".next-btn");

let currentIndex=0;

function loadTrack() {
    const song = songs[currentIndex];

    document.querySelector('#music img').src = song.albumArt;
    document.querySelector('.song-name').textContent = song.title;
    document.querySelector('.song-info').textContent = song.artist;

    if (window.spotifyController) {
        window.spotifyController.loadUri(song.uri);
        window.spotifyController.play();
    }

    playPauseBtn.classList.add('playing');
    progressBar.style.width = '0%';
}

prevbtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + songs.length) % songs.length;
    loadTrack();
});

nextbtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % songs.length;
    loadTrack();
});

const today = new Date();
let currentMonth = today.getMonth(); // 0 = January, 11 = December
let currentYear = today.getFullYear();

const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
// getDay() returns 0-6 (Sun-Sat) — tells us how many empty cells to leave before day 1

const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
// a neat trick: "day 0" of next month = last day of current month

const grid = document.querySelector('.calendar-grid');


function renderCalendar() {
    const grid = document.querySelector('.calendar-grid');
    grid.innerHTML = ''; // clear old days before rebuilding

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // your existing two loops go here (empty cells, then day cells)
    for (let i = 0; i < firstDayOfMonth; i++) {
    const emptyCell = document.createElement('div');
        grid.appendChild(emptyCell);
    }
    for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = document.createElement('div');
        dayCell.textContent = day;
        if(day===today.getDate() && currentMonth===today.getMonth() &&currentYear===today.getFullYear()){
            dayCell.classList.add('today');
        }
        grid.appendChild(dayCell);
    }

}

renderCalendar(); // call it once, so the calendar shows on page load

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const monthSelect=document.querySelector('#month-select');

for(let i=0;i<monthName.length;i++){
    const option=document.createElement('option');

    option.value=i;
    option.textContent=monthName[i];
    monthSelect.appendChild(option);

}