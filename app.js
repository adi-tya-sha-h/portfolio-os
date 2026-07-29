const apps = [
  { id: 'finder',   title: 'Finder',   html:`
    <div class="finder">
          <h2>👋 Hi, I'm Aditya</h2>
          <p>Here are my socials.</p>
          <button>GitHub</button>
          <button>LinkedIn</button>
    </div>`,
    top: 60, left: 120 
  },
  { id: 'appstore',   title: 'App Store',   html:`<div class="app-store">
    <h1>here are some applications that i use</h1>
  </div>`, 
    top: 80, left: 160 
  },
  { id: 'spotify', title: 'Spotify', html:`
    <iframe
        src="https://open.spotify.com/playlist/6j6HqKATHWhxDn4z8gErvX?si=8772d2bede324e1f"
        width="100%"
        height="100%"
        frameborder="0">
    </iframe>` ,
     top: 100, left: 200 
    },
  { id: 'netflix',   title: 'Netflix',   html: `<div class="netflix"><h2> Here are some of my fav movies and dramas </h2></div>`, top: 120, left: 240 },
  { id: 'notes',   title: 'Notes',   html:` <div class="notes" contenteditable="true" data-placeholder="Start- Typing"></div>`
    , top: 140, left: 280 },
  { id: 'setting', title: 'Settings', html: `<div><h2>settings (; </h2></div>`, top: 160, left: 320 },
  { id: 'mail', title: 'Mail', html: `<div><h2>if you wanna contact me just dm me on linkedin or mail me at adityashah0989@gmail.com  </h2></div>`, top: 180, left: 360 },
  { id: 'terminal', title: 'Terminal', html: `<div><h2>@adi's-terminal-welcomes-you-T.T:"write cmd to know the commands of this terminal"</h2></div>`, top: 200, left: 400 },
  { id: 'trash', title: 'Trash', html: `<div><h2>your haters (; </h2></div>`
    , top: 220, left: 440 }
];


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

      <div class="content"
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

function minimizeWindow(win, id) {
  const dockIcon = document.getElementById(id); // your dock buttons already use id="spotify" etc.
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
    win.style.width = '100vw';
    win.style.height = 'calc(100vh - 28px)';
    win.classList.add('maximized');
  }
}