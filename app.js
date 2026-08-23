const apps = [
  { id: 'finder',   title: 'Finder',   html:`
    <div class="finder">
        <div class="finder-nav">
            <p>Favorites</p>
            <button class="finder-nav-items finder-btn active" id="projects-id"><svg width="14" height="12" viewBox="0 0 52 44" aria-hidden="true" class="shrink-0"><path d="M3 8 a4 4 0 0 1 4-4 h12 l4 5 h22 a4 4 0 0 1 4 4 v23 a4 4 0 0 1-4 4 H7 a4 4 0 0 1-4-4 Z" fill="#2e9be4"></path></svg> Projects</button>
            <p>Work</p>
            <div class="finder-works"></div>
        </div>
        <div class="finder-content">
            <div class="finder-header">
                <span class="back-arrow" id="finder-back"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M15 4 L7 12 L15 20" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
                <span class="finder-title" id="finder-title">Projects</span>
            </div>
            <div class="finder-body"></div>
        </div>
    </div>`,
    top: 60, left: 340 
  },
  { id: 'appstore',   title: 'App Store',   html:`
    <div class="app-store">
        <div class="app-store-nav">
            <input class="search-bar" placeholder="hehehe">
            <button class="app-store-nav-btn" data-category="tech">Tech</button>
            <button class="app-store-nav-btn" data-category="social">Social</button>
            <button class="app-store-nav-btn" data-category="games">Games</button>
        </div>
        <div class="app-store-content">
            
            <div class="app-store-body"></div>
        </div>
    </div>`, 
    top: 60, left: 345 
  },
  {
    id:'safari',title:'Safari', html:`
    
    `,
    top:63,left:343
  },
  { id: 'spotify', title: 'Spotify', html:`
    <iframe data-testid="embed-iframe" style="border-radius:0px" src="https://open.spotify.com/embed/playlist/72FEk3sDYTJatVC9ZYboBZ?utm_source=generator&theme=0&si=cfab8f30aa0a4ac4" width="100%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>` ,
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
                <button class="nav-button">Anime</button>
                <button class="nav-button">Moives</button>
                <button class="nav-button">Drama</button>
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
                          <span>1 Episode</span>
                      </div>
                      <p class="hero-description">
                          After meeting the mysterious Reze, Denji finds himself caught between romance and danger. As their relationship grows closer, a deadly new threat emerges, forcing Denji to face a battle that could change everything.
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
  { id: 'setting', title: 'Settings', html: `
    <div class="setting">
        <div class="setting-nav">
            <input class="search-bar" id="setting-search-bar" placeholder="hehehe">
            <div class="setting-nav-content">
                    <button class="setting-nav-btn active" data-category="Wifi"><span class="setting-svg" aria-hidden="true" style="background-color: rgb(10, 132, 255);"><svg width="12" height="12" viewBox="0 0 24 24"><path d="M3 10 C8 5.5 16 5.5 21 10 M6.5 13.5 C10 10.5 14 10.5 17.5 13.5 M9.5 17 C11 15.7 13 15.7 14.5 17" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"></path><circle cx="12" cy="19.5" r="1.3" fill="currentColor" stroke="none"></circle></svg></span><span class="setting-nav-text">Wifi</span></button>
                    <button class="setting-nav-btn" data-category="Sound"><span class="setting-svg" aria-hidden="true" style="background-color: rgb(255, 45, 85);"><svg width="12" height="12" viewBox="0 0 24 24"><path d="M5 9 H8.5 L13 5 V19 L8.5 15 H5 Z" fill="currentColor" stroke="none"></path><path d="M16 9.5 C17.2 10.8 17.2 13.2 16 14.5 M18.5 7.5 C20.5 9.7 20.5 14.3 18.5 16.5" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"></path></svg></span><span class="setting-nav-text">Sound</button>
                    <button class="setting-nav-btn" data-category="Appearance"><span class="setting-svg" aria-hidden="true" style="background-color: rgb(29, 29, 34);"><svg width="12" height="12" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"></circle><path d="M12 4 A8 8 0 0 1 12 20 Z" fill="currentColor" stroke="none"></path></svg></span><span class="setting-nav-text">Appearance</button>
                    <button class="setting-nav-btn" data-category="Battery"><span class="setting-svg" aria-hidden="true" style="background-color: rgb(52, 199, 89);"><svg width="13" height="12" viewBox="0 0 28 14"><rect x="1.5" y="2" width="20" height="10" rx="2.5" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"></rect><rect x="4" y="4.5" width="12" height="5" rx="1" fill="currentColor" stroke="none"></rect><path d="M24 5.5 C25 6 25 8 24 8.5" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"></path></svg></span><span class="setting-nav-text">Battery</button>
                    <button class="setting-nav-btn" data-category="General"><span class="setting-svg" aria-hidden="true" style="background-color: rgb(142, 142, 147);"><svg width="12" height="12" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.2" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"></circle><path d="M12 3.5 V6 M12 18 V20.5 M3.5 12 H6 M18 12 H20.5 M6 6 L7.8 7.8 M16.2 16.2 L18 18 M18 6 L16.2 7.8 M7.8 16.2 L6 18" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"></path></svg></span><span class="setting-nav-text">General</button>
                    <button class="setting-nav-btn" data-category="Display"><span class="setting-svg" aria-hidden="true" style="background-color: rgb(10, 132, 255);"><svg width="12" height="12" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="12" rx="2" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"></rect><path d="M9 20 H15" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"></path></svg></span><span class="setting-nav-text">Display</button>
                    <button class="setting-nav-btn" data-category="User"><span class="setting-svg" aria-hidden="true" style="background-color: rgb(142, 142, 147);"><svg width="12" height="12" viewBox="0 0 24 24"><circle cx="12" cy="9" r="3.5" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"></circle><path d="M5 20 C6 15.8 9 14.5 12 14.5 C15 14.5 18 15.8 19 20" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"></path></svg></span><span class="setting-nav-text">User</button>
            </div>
        </div>
        <div class="setting-content">
            <div class="setting-body"></div>
        </div>
    </div>`, top: 80, left: 265 },
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

appNames={
    appstore:'App Store',
    safari:'Safari',
    netflix:'Netflix',
    spotify:'Spotify',
    notes:'Notes',
    setting:'Setting',
    terminal:'Terminal',
    trash:'Trash'
}
// ---- Focus / z-index logic (unchanged from Step 1) ----
  let highestZ = 10;
 
  function bringToFront(win) {
    document.querySelectorAll('.window').forEach(w => w.classList.remove('active'));
    win.classList.add('active');
    highestZ += 1;
    win.style.zIndex = highestZ;

    const appId = win.dataset.app;
    const nameDisplay = document.querySelector('#active-app-name');
    nameDisplay.textContent = appNames[appId] || "Finder";
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
    document.querySelector('#active-app-name').textContent = "Finder";
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

    if (id === 'finder') {
        renderProjects();
        workList();
    }
    if(id==='appstore'){
        renderAppList('tech');
    }
  });
});

const dock = document.querySelector('.dock');
const icons = document.querySelectorAll('.apps button');
const maxDistance = 150;

dock.addEventListener('mousemove', (e) => {
  icons.forEach(icon => {
    const rect = icon.getBoundingClientRect();
    let iconCenterX = rect.left + rect.width / 2
    let distance=Math.abs(e.clientX - iconCenterX);
    let scale = 1 + 0.6 * Math.max(0, 1 - distance / maxDistance);
    let extraMargin = (scale - 1) * 20;

    icon.style.transform=`scale(${scale})`;
    icon.style.margin = `3px ${extraMargin + 3}px`;
  });
});

dock.addEventListener("mouseleave",()=>{
  icons.forEach(icon=>{
    icon.style.transform='scale(1)';
    icon.style.margin='3px 0px';
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
        uri: 'spotify:track:26qigRagi9CRNhbGYajKOS'
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
        // window.spotifyController.setVolume()
    });
};

const songs=[
    {title:'Petels On The Moon',artist:'Wasia Project',albumArt:"assets/song1.jpg",uri:"spotify:track:26qigRagi9CRNhbGYajKOS"},
    {title:'Sirf Tujhse' ,artist:'Saksham Sehgal',albumArt:"assets/sirftujhse.png",uri:"spotify:track:5zICn0hbsUvZBpHeffRQcj"},
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

// calendar
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

document.querySelector('.dropdown-selected').textContent = monthNames[currentMonth];
function populateDropdown(dropdownId, items, onSelect) {
    const dropdown = document.querySelector(`#${dropdownId}`);
    const selectedDisplay = dropdown.querySelector('.dropdown-selected');
    const optionsList = dropdown.querySelector('.dropdown-options');

    items.forEach((item, index) => {
        const optionEl = document.createElement('div');
        optionEl.textContent = item;
        optionEl.addEventListener('click', () => {
            selectedDisplay.textContent = item;
            optionsList.classList.remove('open');
            onSelect(index);
        });
        optionsList.appendChild(optionEl);
    });

    selectedDisplay.addEventListener('click', () => {
        optionsList.classList.toggle('open');
    });
}

populateDropdown('month-dropdown',monthNames,(selectedIndex)=>{
    currentMonth=selectedIndex;
    renderCalendar();
})

const projects = [
    { 
        title: 'Portfolio', 
        subtitle: 'mac-portfolio', 
        projectimg: '/assets/projects/portfolio.mp4',
        description: 'A macOS-inspired interactive desktop portfolio built with vanilla HTML, CSS, and JavaScript — draggable windows, a functional dock, and custom app experiences like this one.'
    },
    { 
        title: 'Amazon', 
        subtitle: 'homepage', 
        projectimg: '/assets/projects/amazon-clone.mp4',
        description: 'A pixel-accurate clone of the Amazon homepage, focused on responsive layout and recreating real-world e-commerce UI patterns.'
    },
    { 
        title: 'NotesAi', 
        subtitle: 'quiz and notes', 
        projectimg: '/assets/projects/notesAi.mp4',
        description: 'An AI-powered study tool that turns lecture notes and study material into structured summaries and interactive quizzes.'
    },
    { 
        title: 'Monitoring-System', 
        subtitle: 'restaurant-management', 
        projectimg: '/assets/reze.jpg',
        description: 'A restaurant monitoring and management system for tracking orders, staff, and operations in real time.'
    }
];

document.body.addEventListener('mouseover', (e) => {
  const card = e.target.closest('.finder-card');
  if (!card) return;
  const video = card.querySelector('video');
  if (video) video.play();
});

document.body.addEventListener('mouseout', (e) => {
  const card = e.target.closest('.finder-card');
  if (!card) return;
  const video = card.querySelector('video');
  if (video) {
    video.pause();
    video.currentTime = 0;
  }
});

function renderProjects() {
    const container = document.querySelector('.finder-body');
    if (!container) return;

    container.classList.remove('detail-view');
    container.innerHTML = projects.map((project,index) => {
    
    const isVideo = project.projectimg.endsWith('.mp4');

    const media = isVideo
      ? `<video class="finder-card-img" src="${project.projectimg}" muted loop playsinline></video>`
      : `<img class="finder-card-img" src="${project.projectimg}" alt="${project.title}">`;

    return `
      <div class="finder-card" data-index="${index}">
        
        <div class="finder-card-media">
          ${media}
        </div>
        <div class="finder-card-title">${project.title}</div>
        <div class="finder-card-subtitle">${project.subtitle}</div>
      </div>
    `;
  }).join('');
}

function renderProjectDetail(project){
    const container=document.querySelector('.finder-body');
    if(!container) return;

    container.classList.add('detail-view');

    const isVideo = project.projectimg.endsWith('.mp4');

    const media = isVideo
      ? `<video class="finder-detail-img" src="${project.projectimg}" controls controlsList="nodownload noremoteplayback" disablePictureInPicture playsinline></video>`
      : `<img class="finder-detail-img" src="${project.projectimg}" alt="${project.title}">`;

    container.innerHTML=`
        <div class="finder-detail-media">
        ${media}
        </div>
        <div class="finder-detail-title">${project.title}</div>
        <div class="finder-detail-subtitle">${project.subtitle}</div>
        <div class="finder-detail-description">${project.description}</div>
    `;
    const title=document.getElementById('finder-title');
    title.innerText=project.title;
}

document.body.addEventListener('click',(e)=>{
    const card= e.target.closest('.finder-card');
    if(!card) return;

    const index=Number(card.dataset.index);
    const project=projects[index];

    renderProjectDetail(project);
});

document.body.addEventListener('click', (e) => {
    const backBtn = e.target.closest('#finder-back');
    if (!backBtn) return;
    const title= document.getElementById('finder-title');
    if(title.innerText==='Projects') return;
    
    renderProjects();
    title.innerText='Projects';
});

function workList() {
    const container = document.querySelector('.finder-works');
    if (!container) return;

    container.innerHTML = projects.map((project,index) => {
    
    return `
    <button class="finder-nav-items" data-index="${index}">
        <svg width="11" height="13" viewBox="0 0 40 48" aria-hidden="true" class="shrink-0"><path d="M4 4 a3 3 0 0 1 3-3 h20 l9 9 v34 a3 3 0 0 1-3 3 H7 a3 3 0 0 1-3-3 Z" fill="#9b9ba4"></path></svg>
        <span class="finder-nav-title">${project.title}</span>
    </button>`
    
  }).join('');
}


document.body.addEventListener('click',(e)=>{
    const navItem= e.target.closest('.finder-nav-items');
    if(!navItem) return;

    if(navItem.id==='projects-id'){
        renderProjects();
    }else{
        const index=Number(navItem.dataset.index);
        const project=projects[index];
        renderProjectDetail(project);
    }

    const allNavItems=document.querySelectorAll('.finder-nav-items');
    allNavItems.forEach(item => item.classList.remove('active'));
    navItem.classList.add('active');
});

const appStoreItems = {
  social: [
    { name: 'Instagram', tagline: 'Follow me on insta (;', icon: '/assets/apps/insta-icon.png', url: 'https://instagram.com/_adi.ityashah_' },
    { name: 'LinkedIn', tagline: 'You can Connect to me on linkedin', icon: '/assets/apps/linkedin-icon.png', url: 'https://www.linkedin.com/in/aditya-shah-357579327/' },
    { name: 'GitHub', tagline: 'Here is My github profile', icon:'/assets/apps/github-icon.png',url:'https://github.com/adi-tya-sha-h'},
    { name: 'Telegram', tagline: 'hit me up on telegram ', icon:'/assets/apps/telegram-icon.png', url:'https://t.me/Xishah'}
  ],
  tech: [
    { name: 'Claude', icon: '/assets/apps/claude-icon.png'},
    { name: 'ChatGPT', icon: '/assets/apps/chatgpt-icon.png'},
    { name: 'VScode', icon: '/assets/apps/vscode-icon.png'},
    { name: 'Antigravity', icon: '/assets/apps/antigravity-icon.png'},
    { name: 'Grok', icon: '/assets/apps/grok-icon.png'}
  ],
  games: [
  { 
    name: 'Genshin Impact', 
    tagline:'Step Into a Vast Magical World of Adventure',
    icon: '/assets/apps/genshinimpact-icon.png',
    media: [
        { type: 'youtube', src: 'jvXVmvW8ZQw' },
        { type: 'image', src: '/assets/genshin-profile.png' },
        { type: 'youtube', src: 'tN5JACOEJFM' }
    ]
  },
  { 
    name: 'Wuthering Waves', 
    tagline:'Waking of a World',
    icon: '/assets/apps/wuwa-icon.png',
    media: [
        { type: 'youtube', src: 'op22gIZneCk' },
        { type: 'image', src: '/assets/wuwa-profile.jpg' },
        { type: 'youtube',src: 'mT86JXY6oEw'}
    ]
  }
]
};

function capitalize(str){
    return str[0].toUpperCase() + str.slice(1);
}

function renderAppList(category) {
  const container = document.querySelector('.app-store-body');
  if (!container) return;

  const items = appStoreItems[category];
  const heading=capitalize(category);

  const rows = items.map(item => {
    const link = item.url
      ? `<a class="app-link" href="${item.url}" target="_blank">SEE</a>`
      : '';
    const tag = item.tagline
      ? `<div class="app-tagline">${item.tagline}</div>`
      : '';
    
    return `
      <div class="app-row">
        <div class="app-content">
          <img src="${item.icon}" class="app-icon">
          <div class="app-details">
            <div class="app-name">${item.name}</div>
            ${tag}
          </div>
          ${link}
        </div>
      </div>
    `;
  }).join('');
  container.innerHTML = `
    <h1 class="app-store-header"s> ${heading} Apps</h1>
    <p class="app-store-heading">Here are the ${category} apps that I use</p>
    ${rows}
  `;
}

function renderGames() {
  const container = document.querySelector('.app-store-body');
  if (!container) return;

  const rows = appStoreItems.games.map(game => {

    const mediaItems=game.media.map(item=>{
        if(item.type==='youtube'){
            return `<iframe class="game-media" width="100%" height="100%" 
    src="https://www.youtube.com/embed/${item.src}?autoplay=0&mute=0&loop=1&playlist=${item.src}&controls=1&modestbranding=1&rel=0&disablekb=1"
    frameborder="0"; encrypted-media; fullscreen" allowfullscreen></iframe>`;
        }
        else if(item.type==='video'){
            return `<video class="game-media" src="${item.src}" controls controlsList="nodownload noremoteplayback" disablePictureInPicture playsinline></video>`;
        }
        else{
            return `<img class="game-media" src="${item.src}">`;
        }
    }).join('');

    return `
    <div class="games">
            <div class="game-content">
                <img src="${game.icon}" class="game-icon-img">
                <div class="game-title">
                    <div class="game-name">${game.name}</div>
                    <div class="game-tag">${game.tagline}</div>
                </div>
            </div>
            <div class="game-media-row">
                ${mediaItems}
            </div>
        </div>
    `;
  }).join('');

  container.innerHTML=`
  <h1 class="game-header"> Games</h1>
    <p class="game-headline">Here are the games that I am active in</p>
    ${rows}
  `;
}
document.body.addEventListener('click', (e) => {
  const navBtn = e.target.closest('.app-store-nav-btn');
  if (!navBtn) return;

  const category = navBtn.dataset.category;

  // what goes here? think about the if/else branching
  if(category==='tech' || category==='social'){
    renderAppList(category);
  }else if(category==='games'){
    renderGames();
  }
});

document.body.addEventListener('click', (e) => {
    const media = e.target.closest('.game-media');
    const enlarged = document.querySelector('.game-media.enlarged');
    let backdrop = document.querySelector('.media-backdrop');

    if (!media) {
        if (enlarged) {
            enlarged.classList.remove('enlarged');
            backdrop?.remove();
        }
        return;
    }

    const isImage = media.tagName === 'IMG';
    if (isImage) {
        const nowEnlarged = media.classList.toggle('enlarged');
    }
});


document.body.addEventListener('click', (e) => {
    const settingNavBtn = e.target.closest('.setting-nav-btn');
    const settings=document.querySelector('.setting-content');
    if (!settingNavBtn) return;

    const category = settingNavBtn.dataset.category; 
    switch(category){
        case 'Wifi':
            settings.innerHTML=`<div class="setting-body">
            <div class="setting-heading"><h1>Wifi</h1></div>
                <div class="setting-tab">
                    <div class="wifi">
                    <span>Wifi</span>
                    <span class="switch"><svg width="9" height="11" viewBox="0 0 12 14" class="text-(--os-text-dim)" aria-hidden="true"><rect x="1" y="6" width="10" height="7" rx="1.5" stroke="currentColor" stroke-width="1.4" fill="none"></rect><path d="M3.5 6 V4 a2.5 2.5 0 0 1 5 0 V6" stroke="currentColor" stroke-width="1.4" fill="none"></path></svg>
                    <button role="switch" aria-checked="true" aria-label="Wi-Fi always on" disabled="" class="switch-container"><span class="switch-ball"></span></button></span>
                    </div>
                    <div class="setting-line"></div>
                    <div class="wifi-msg">
                        <div class="wifi-con">
                            
                            <span class="wifi-name">
                            <div class="wifi-connected-logo"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
     xmlns="http://www.w3.org/2000/svg">
  <path d="M2.5 8.5C6.8 4.4 13.7 3.8 18.5 6.8"
        stroke="white" stroke-width="1.8" stroke-linecap="round"/>
  <path d="M5.5 12C8.5 9.2 12.8 8.7 16.2 10.2"
        stroke="white" stroke-width="1.8" stroke-linecap="round"/>
  <path d="M8.8 15.5C9.8 14.5 11.1 14 12.4 14"
        stroke="white" stroke-width="1.8" stroke-linecap="round"/>

  <!-- Lock -->
  <rect x="12.5" y="14.5" width="8" height="6.5"
        rx="1.2" fill="white"/>
  <path d="M14.5 14.5V12.8C14.5 11.4 15.4 10.5 16.5 10.5
           C17.6 10.5 18.5 11.4 18.5 12.8V14.5"
        stroke="white" stroke-width="1.7" stroke-linecap="round"/>
  <circle cx="16.5" cy="17.6" r="0.8" fill="#292A30"/>
</svg></div> <span class="wifi-status"><span class="network-name"> Adi</span><span>Secured</span></span>
                            
                        </div>
                        <div class="wifi-arrow">
                            <span>Connected</span>    
                        </div>
                    </div>
                </div>
                <div class="sub-heading"><span>NEARBY NETWORKS</span></div>
                <div class="setting-tab">
                    <div class="nearby-networks">
                        <span class="networks"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"
     xmlns="http://www.w3.org/2000/svg">
  <path d="M2.5 8.5C7.6 3.7 16.4 3.7 21.5 8.5"
        stroke="white" stroke-width="1.8" stroke-linecap="round"/>
  <path d="M5.5 12C9.1 8.6 14.9 8.6 18.5 12"
        stroke="white" stroke-width="1.8" stroke-linecap="round"/>
  <path d="M8.8 15.5C10.7 13.7 13.3 13.7 15.2 15.5"
        stroke="white" stroke-width="1.8" stroke-linecap="round"/>
  <circle cx="12" cy="19" r="1.4" fill="white"/>
</svg> SpotIsHot</span>
                        <div class="setting-line"></div>
                        <span class="networks"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"
     xmlns="http://www.w3.org/2000/svg">
  <path d="M2.5 8.5C7.6 3.7 16.4 3.7 21.5 8.5"
        stroke="white" stroke-width="1.8" stroke-linecap="round"/>
  <path d="M5.5 12C9.1 8.6 14.9 8.6 18.5 12"
        stroke="white" stroke-width="1.8" stroke-linecap="round"/>
  <path d="M8.8 15.5C10.7 13.7 13.3 13.7 15.2 15.5"
        stroke="white" stroke-width="1.8" stroke-linecap="round"/>
  <circle cx="12" cy="19" r="1.4" fill="white"/>
</svg> RechargeKrwaLe</span>
                    </div>
                </div>
            `;
            break;
        case 'Sound':
            settings.innerHTML=`<div class="setting-sound">
                <div class="setting-heading">
                    <h1>Sound</h1>
                </div>
                <div class="setting-tab">
                    <div class="setting-tab-element">
                        <span class="ml">Volume</span>
                        <input class="volume-slider" type="range" min=0 max=100 value=100 disabled="">     
                    </div>
                    <div class="setting-line"></div>
                    <div class="setting-tab-element">
                        <span class="ml"> Mute</span>
                        <div class="setting-right">
                            <svg width="9" height="11" viewBox="0 0 12 14" class="text-(--os-text-dim)" aria-hidden="true"><rect x="1" y="6" width="10" height="7" rx="1.5" stroke="currentColor" stroke-width="1.4" fill="none"></rect><path d="M3.5 6 V4 a2.5 2.5 0 0 1 5 0 V6" stroke="currentColor" stroke-width="1.4" fill="none"></path></svg>
                            <button class="switch-container off" role="switch" aria-checked="false" aria-label="mute" disabled=""><span class="switch-ball"></span></button>
                        </div>
                    </div>
                </div>
                <div class="setting-msg">Permission not granted by spotify iframe</div>
            </div>`;
            break;
        case 'Appearance':
            settings.innerHTML=`
            <div class="setting-heading"><h1 id="appearance-heading">Appearance</h1></div>
            <div class="setting-tab">
                <div class="theme-toggle">
                    <span class="appearance-subtitle">Appearance</span>
                    <div class="theme-right">
                        <div class="light-mode">
                            <button class="current-theme" id="theme-light">
                                    <div class="light-tab">
                                        <span class="theme-title" id="title-light"></span>
                                        <span class="theme-content" id="content-light"></span>
                                    </div>
                                                
                                </button>
                            <span>Light</span>
                                            
                        </div>
                        <div class="dark-mode ">
                            <button class="current-theme active" id="theme-dark">
                                <div class="dark-tab ">
                                    <span class="theme-title" id="title-dark"></span>
                                    <span class="theme-content" id="content-dark"></span>
                                </div>
                            </button>
                            <span>Dark</span>
                        </div>
                    </div>

                </div>
                <div class="setting-line"></div>
                <div class="brightness">
                    <span>Brightness</span>
                    <input class="brightness-slider" type="range" min="0" max="100" value="100">
                </div>
                
            </div>
            <div class="sub-heading">WALLPAPERS</div>
            <div class="wallpaper-grid">
                <div class="wallpaper-tab active" data-wallpaper="ember" data-color="radial-gradient(90rem 60rem at 110% -10%, #f3350c8c, #0000 60%), radial-gradient(70rem 50rem at -10% 40%, #7a1d0580, #0000 55%), linear-gradient(160deg, #2a0f08 0%, #120a08 100%)">
                    <div class="wp-color" style="background:#94260E;"></div>
                    <span class="wp-name">Ember</span>
                </div>
                <div class="wallpaper-tab" data-wallpaper="dynamic" data-color="radial-gradient(90rem 60rem at 110% -10%, #f3350c73, #0000 60%), radial-gradient(70rem 50rem at -10% 40%, #5626766b, #0000 55%), radial-gradient(60rem 50rem at 50% 125%, #1c387266, #0000 65%), linear-gradient(160deg, #121214 0%, #1b191f 100%)">
                    <div class="wp-color" style="background:#762B38;"></div>
                    <span class="wp-name">Dynamic</span>
                </div>
                <div class="wallpaper-tab" data-wallpaper="violet" data-color="radial-gradient(90rem 60rem at 110% -10%, #7a46b480, #0000 60%), radial-gradient(60rem 50rem at 50% 125%, #1c387266, #0000 65%), linear-gradient(160deg, #1a1424 0%, #161320 100%)">
                    <div class="wp-color" style="background:#443270;"></div>
                    <span class="wp-name">Violet</span>
                </div>
                <div class="wallpaper-tab" data-wallpaper="slate" data-color="radial-gradient(80rem 60rem at 80% 0, #787a8247, #0000 60%), linear-gradient(160deg, #2c2c33 0%, #0d0d0f 100%)">
                    <div class="wp-color" style="background:#35363B;"></div>
                    <span class="wp-name">Slate</span>
                </div>
                <div class="wallpaper-tab" data-wallpaper="dawn" data-color="radial-gradient(90rem 60rem at 110% -10%,#f3350c38,#0000 60%),radial-gradient(80rem 50rem at -10% 30%,#ffb88a73,#0000 55%),linear-gradient(160deg,#fbf4ef 0%,#f0dccf 100%)">
                    <div class="wp-color" style="background:#F6B89E;"></div>
                    <span class="wp-name">Dawn</span>
                </div>
                <div class="wallpaper-tab" data-wallpaper="midnight" data-color="radial-gradient(80rem 60rem at 100% -10%, #2850a066, #0000 60%), radial-gradient(60rem 50rem at 30% 120%, #56267666, #0000 60%), linear-gradient(160deg, #0a0c14 0%, #0c0a12 100%)">
                    <div class="wp-color" style="background:#252A5B;"></div>
                    <span class="wp-name">Midnight</span>
                </div>
            </div>
                        `;
            break;
        case 'Battery':
            settings.innerHTML=`
            <div class=setting-battery>
                <div class="setting-heading">
                    <h1>Battery</h1>
                </div>
                <div class="setting-tab">
                    <div class="setting-tab-element">
                        <span class="ml">Battery health</span>
                        <span class="sl">Normal</span>
                    </div>
                    <div class="setting-line"></div>
                    <div class="setting-tab-element">
                        <span class="ml">Screen Time</span>
                        <span class="sl">13h (Get a life Man T.T)</span>
                    </div>
                    <div class="setting-line"></div>
                    <div class="setting-tab-element">
                        <span class="ml">Low Power Mode</span>
                        <span class="sl">Off (Always High (;)</span>
                    </div>
                </div>
            </div>`;
            break;
        case 'General':
            settings.innerHTML=`<div>general</div>`;
            break;
        case 'Display':
            settings.innerHTML=`
            <div class=setting-display>
                <div class="setting-heading">
                    <h1>Display</h1>
                </div>
                <div class="setting-tab">
                    <div class="setting-tab-element">
                        <span class="ml">Resolution</span>
                        <span class="sl">More than 780x735 </span>
                    </div>
                    <div class="setting-line"></div>
                    <div class="setting-tab-element">
                        <span class="ml">Frame Rate</span>
                        <span class="sl">60 fps</span>
                    </div>
                    <div class="setting-line"></div>
                    <div class="setting-tab-element">
                        <span class="ml">Display Oreintation</span>
                        <span class="sl">Landscape</span>
                    </div>
                    <div class="setting-line"></div>
                    <div class="setting-tab-element">
                        <span class="ml">Light House (desktop)</span>
                        <span class="sl">Score 100/100</span>
                    </div>
                </div>
            </div>
            `;
            break;
        case 'User':
            settings.innerHTML=`<div class=setting-display>
                <div class="setting-heading">
                    <h1>User</h1>
                </div>
                <div class="setting-tab">
                    <div class="setting-tab-element">
                        <span class="ml"><div class="user-profile" id="admin"><span>A</span></div> Adi</span>
                        <span class="sl">Admin </span>
                    </div>
                    <div class="setting-line"></div>
                    <div class="setting-tab-element">
                        <span class="ml"><div class="user-profile"id="you">Y</div> You</span>
                        <span class="sl">Visitor</span>
                    </div>
                    <div class="setting-line"></div>
                    <div class="setting-tab-element">
                        <span class="ml"><div class="user-profile"id="guest">G</div> Guest</span>
                        <span class="sl">Allowed</span>
                    </div>
                </div>
                <div class="setting-msg"><span>Thanks for visiting this site <3 </span></div>
                <div class="setting-tab">
                    <div class="setting-tab-element">
                        <span class="ml">Code</span>
                        <span class="sl">Open Source </span>
                    </div>
                    <div class="setting-line"></div>
                    <div class="setting-tab-element">
                        <span class="ml">License</span>
                        <span class="sl">MIT</span>
                    </div>
                    <div class="setting-line"></div>
                    <div class="setting-tab-element">
                        <span class="ml">Code Link</span>
                        <span class="sl"><a href="https://github.com/adi-tya-sha-h/portfolio-os"><svg class="setting-arrow" width="7" height="11" viewBox="0 0 7 11" class="ml-2 shrink-0 text-(--os-text-dim)" aria-hidden="true"><path d="M1 1 L6 5.5 L1 10" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"></path></svg></a></span>
                    </div>
                </div>
            </div>`;
            break;
        default:
            settings.innerHTML = `<div>Not found</div>`;
            break;
    }
    const allNavItems=document.querySelectorAll('.setting-nav-btn');
    allNavItems.forEach(item => item.classList.remove('active'));
    settingNavBtn.classList.add('active');
});

document.body.addEventListener('click',(e)=>{
    const wallpaper=e.target.closest('.wallpaper-tab');
    if(!wallpaper) return;

    const colour=wallpaper.dataset.color;

    const wallpapers=document.querySelectorAll('.wallpaper-tab');
    wallpapers.forEach(item =>
        item.classList.remove('active'));
    wallpaper.classList.add('active');

    const background=document.querySelector('.wallpaper');
    background.style.background=colour;

})

function convertbrightness(brightness){
    return 1-(brightness/100);
}
document.body.addEventListener('input',(e)=>{
    const brightness=e.target.classList.contains('brightness-slider');
    if(!brightness) return;
    const brightnessValue=e.target.value;
    const currValue=convertbrightness(brightnessValue);

    const brightnessDesktop=document.querySelector('.desktop-brightness');
    brightnessDesktop.style.opacity=currValue;
})

document.body.addEventListener('click', (e) => {
    const themeBtn = e.target.closest('.current-theme');
    if (!themeBtn) return;

    // TODO: clear .active from both buttons, add to themeBtn
    document.querySelectorAll('.current-theme').forEach(btn => btn.classList.remove('active'));
    themeBtn.classList.add('active');
    // TODO: check themeBtn.id — if it's the light one, add 'light-theme' 
    //       to document.body's classList; if dark, remove it
    if(themeBtn.id==='theme-light'){
        document.body.classList.add('light-theme');
    }
    else{
        document.body.classList.remove('light-theme');
    }
});
