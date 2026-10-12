import { useEffect, useState } from 'react';
import './navigation.css';

const menuGroups = [
  {
    label: 'Abhay',
    items: ['About This Mac', 'Preferences', 'Recent Items', 'Force Quit'],
  },
  {
    label: 'Portfolio',
    items: ['Overview', 'Selected Work', 'Experience', 'Contact'],
  },
  {
    label: 'Work',
    items: ['Quality Engineering', 'Debugging', 'Growth', 'Backend'],
  },
  {
    label: 'About',
    items: ['Profile', 'GitHub', 'LinkedIn', 'Email'],
  },
];

const profileLinks = {
  GitHub: 'https://github.com/Abhayd121',
  LinkedIn: 'https://www.linkedin.com/in/abhay-veer-dhiman-899335443/',
};

const dockApps = [
//   { name: '', icon: '◦', color: '#f0f4ff' },
//   { name: 'Safari', icon: 'S', color: '#e6f0ff' },
  {
    name: 'Chrome',
    icon: <img src={`${import.meta.env.BASE_URL}chrome.svg`} alt="" width={24} height={24} />,
    color: '#fff',
  },
  {
    name: 'Codex',
    icon: (
      <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" aria-hidden="true">
        <g transform="scale(32)">
          <clipPath id="prefix__a">
            <path d="M0 0h16v16H0z" />
          </clipPath>
          <g clipPath="url(#prefix__a)">
            <path d="M13.003 0H2.997A3.012 3.012 0 000 2.997v10.006A3.012 3.012 0 002.997 16h10.006A3.012 3.012 0 0016 13.003V2.997A3.012 3.012 0 0013.003 0z" fill="#fff" fillRule="nonzero" />
            <path d="M9.064 3.344a4.578 4.578 0 012.285-.312c1 .115 1.891.54 2.673 1.275.01.01.024.017.037.021a.104.104 0 00.043 0 4.556 4.556 0 013.046.275l.047.022.116.057a4.585 4.585 0 012.188 2.399c.209.51.313 1.041.315 1.595.015.412-.03.824-.134 1.223a.124.124 0 00.03.115c.594.607.988 1.33 1.183 2.17.289 1.425-.007 2.71-.887 3.854l-.136.166a4.548 4.548 0 01-2.201 1.388.12.12 0 00-.081.076c-.191.551-.383 1.023-.74 1.494-.9 1.187-2.222 1.846-3.711 1.838-1.187-.006-2.239-.44-3.157-1.302a.109.109 0 00-.105-.024c-.388.125-.78.143-1.204.138a4.438 4.438 0 01-1.945-.466 4.553 4.553 0 01-1.61-1.335c-.152-.202-.303-.392-.414-.617a5.797 5.797 0 01-.37-.961 4.575 4.575 0 01-.014-2.298.133.133 0 00.006-.056.083.083 0 00-.027-.048 4.467 4.467 0 01-1.034-1.651 3.898 3.898 0 01-.251-1.192 5.193 5.193 0 01.141-1.6c.337-1.112.982-1.985 1.933-2.618.212-.141.413-.251.601-.33a6.29 6.29 0 01.646-.227.1.1 0 00.065-.066 4.512 4.512 0 01.829-1.615 4.54 4.54 0 011.837-1.388zm3.482 10.565a.64.64 0 00-.601.636.64.64 0 00.601.636h3.636l.036.001a.64.64 0 00.637-.637.64.64 0 00-.637-.637l-.036.001h-3.636zM8.462 9.23a.64.64 0 00-.543-.304.64.64 0 00-.563.935l1.272 2.224-1.266 2.136a.638.638 0 001.095.649l1.454-2.455a.637.637 0 00.005-.64L8.462 9.23z" fill="url(#prefix___Linear2)" fillRule="nonzero" transform="scale(.66667)" />
          </g>
        </g>
        <defs>
          <linearGradient id="prefix___Linear2" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 18 -18 0 12 3)">
            <stop offset="0" stopColor="#b1a7ff" />
            <stop offset=".5" stopColor="#7a9dff" />
            <stop offset="1" stopColor="#3941ff" />
          </linearGradient>
        </defs>
      </svg>
    ),
    color: '#fff',
  },
  {
    name: 'Claude Code',
    icon: (
      <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" aria-hidden="true">
        <path d="M447.957 233.579H512v66.176h-64v64.597h-31.723v62.315H384v-62.315h-31.723v62.315H320v-62.315H192v62.315h-32.256v-62.315H128v62.315H95.723v-62.315H64v-64.619H0V233.6h64V106.667h383.957v126.912zm-319.957 0h31.744v-60.736H128v60.736zm224.213 0H384v-60.736h-31.787v60.736z" fill="#d97757" />
      </svg>
    ),
    color: '#fff',
  },
  {
    name: 'Outlook',
    icon: <img src={`${import.meta.env.BASE_URL}outlook.svg`} alt="" width={24} height={24} />,
    color: '#fff',
  },
  {
    name: 'OneNote',
    icon: <img src={`${import.meta.env.BASE_URL}onenote.svg`} alt="" width={24} height={24} />,
    color: '#fff',
  },
  {
    name: 'Eclipse',
    icon: <img src={`${import.meta.env.BASE_URL}eclipse.svg`} alt="" width={24} height={24} />,
    color: '#fff',
  },
  {
    name: 'Spotify',
    icon: <img src={`${import.meta.env.BASE_URL}spotify.svg`} alt="" width={24} height={24} />,
    color: '#000',
  },
  {
    name: 'Chess',
    icon: <img src={`${import.meta.env.BASE_URL}chess.svg`} alt="" width={24} height={24} />,
    color: '#9cde5d',
  },
  {
    name: 'Google Sheets',
    icon: <img src={`${import.meta.env.BASE_URL}sheets.svg`} alt="" width={24} height={24} />,
    color: '#fff',
  },
  {
    name: 'GitHub',
    icon: (
      <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
      </svg>
    ),
    color: '#f0f3ff',
  },
  {
    name: 'VS Code',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" width="100%" height="100%" aria-hidden="true">
        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
          <path fillRule="evenodd" clipRule="evenodd" d="M70.9119 99.3171C72.4869 99.9307 74.2828 99.8914 75.8725 99.1264L96.4608 89.2197C98.6242 88.1787 100 85.9892 100 83.5872V16.4133C100 14.0113 98.6243 11.8218 96.4609 10.7808L75.8725 0.873756C73.7862 -0.130129 71.3446 0.11576 69.5135 1.44695C69.252 1.63711 69.0028 1.84943 68.769 2.08341L29.3551 38.0415L12.1872 25.0096C10.589 23.7965 8.35363 23.8959 6.86933 25.2461L1.36303 30.2549C-0.452552 31.9064 -0.454633 34.7627 1.35853 36.417L16.2471 50.0001L1.35853 63.5832C-0.454633 65.2374 -0.452552 68.0938 1.36303 69.7453L6.86933 74.7541C8.35363 76.1043 10.589 76.2037 12.1872 74.9905L29.3551 61.9587L68.769 97.9167C69.3925 98.5406 70.1246 99.0104 70.9119 99.3171ZM75.0152 27.2989L45.1091 50.0001L75.0152 72.7012V27.2989Z" fill="white"/>
        </mask>
        <g mask="url(#mask0)">
          <path d="M96.4614 10.7962L75.8569 0.875542C73.4719 -0.272773 70.6217 0.211611 68.75 2.08333L1.29858 63.5832C-0.515693 65.2373 -0.513607 68.0937 1.30308 69.7452L6.81272 74.754C8.29793 76.1042 10.5347 76.2036 12.1338 74.9905L93.3609 13.3699C96.086 11.3026 100 13.2462 100 16.6667V16.4275C100 14.0265 98.6246 11.8378 96.4614 10.7962Z" fill="#0065A9"/>
          <g filter="url(#filter0_d)">
            <path d="M96.4614 89.2038L75.8569 99.1245C73.4719 100.273 70.6217 99.7884 68.75 97.9167L1.29858 36.4169C-0.515693 34.7627 -0.513607 31.9063 1.30308 30.2548L6.81272 25.246C8.29793 23.8958 10.5347 23.7964 12.1338 25.0095L93.3609 86.6301C96.086 88.6974 100 86.7538 100 83.3334V83.5726C100 85.9735 98.6246 88.1622 96.4614 89.2038Z" fill="#007ACC"/>
          </g>
          <g filter="url(#filter1_d)">
            <path d="M75.8578 99.1263C73.4721 100.274 70.6219 99.7885 68.75 97.9166C71.0564 100.223 75 98.5895 75 95.3278V4.67213C75 1.41039 71.0564 -0.223106 68.75 2.08329C70.6219 0.211402 73.4721 -0.273666 75.8578 0.873633L96.4587 10.7807C98.6234 11.8217 100 14.0112 100 16.4132V83.5871C100 85.9891 98.6234 88.1786 96.4586 89.2196L75.8578 99.1263Z" fill="#1F9CF0"/>
          </g>
          <g style={{ mixBlendMode: 'overlay' }} opacity="0.25">
            <path fillRule="evenodd" clipRule="evenodd" d="M70.8511 99.3171C72.4261 99.9306 74.2221 99.8913 75.8117 99.1264L96.4 89.2197C98.5634 88.1787 99.9392 85.9892 99.9392 83.5871V16.4133C99.9392 14.0112 98.5635 11.8217 96.4001 10.7807L75.8117 0.873695C73.7255 -0.13019 71.2838 0.115699 69.4527 1.44688C69.1912 1.63705 68.942 1.84937 68.7082 2.08335L29.2943 38.0414L12.1264 25.0096C10.5283 23.7964 8.29285 23.8959 6.80855 25.246L1.30225 30.2548C-0.513334 31.9064 -0.515415 34.7627 1.29775 36.4169L16.1863 50L1.29775 63.5832C-0.515415 65.2374 -0.513334 68.0937 1.30225 69.7452L6.80855 74.754C8.29285 76.1042 10.5283 76.2036 12.1264 74.9905L29.2943 61.9586L68.7082 97.9167C69.3317 98.5405 70.0638 99.0104 70.8511 99.3171ZM74.9544 27.2989L45.0483 50L74.9544 72.7012V27.2989Z" fill="url(#paint0_linear)"/>
          </g>
        </g>
        <defs>
          <filter id="filter0_d" x="-8.39411" y="15.8291" width="116.727" height="92.2456" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="4.16667"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="overlay" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
          </filter>
          <filter id="filter1_d" x="60.4167" y="-8.07558" width="47.9167" height="116.151" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="4.16667"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="overlay" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
          </filter>
          <linearGradient id="paint0_linear" x1="49.9392" y1="0.257812" x2="49.9392" y2="99.7423" gradientUnits="userSpaceOnUse">
            <stop stopColor="white"/>
            <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    color: '#edf3ff',
  },
];

const formatLiveClock = (date: Date) => {
  const weekday = date.toLocaleDateString('en-US', { weekday: 'short' });
  const month = date.toLocaleDateString('en-US', { month: 'short' });
  const day = date.getDate();
  const time = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  return `${weekday} ${month} ${day} ${time}`;
};

const Navigationtopbar = () => {
  const [currentTime, setCurrentTime] = useState(() => formatLiveClock(new Date()));

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentTime(formatLiveClock(new Date()));
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <header className="macos-topbar" role="banner" aria-label="Mac OS style navigation bar">
      <div className="macos-app" aria-label="Application icon and name">
        <span className="app-mark" aria-label="Apple logo"></span>
        <span className="app-name">Abhay</span>
      </div>

      <nav className="macos-menu" aria-label="Main navigation">
        {menuGroups.map((group) => (
          <div className="menu-item-wrap" key={group.label}>
            <button type="button" className="menu-button">
              {group.label}
            </button>

            <div className="menu-dropdown" role="menu" aria-label={`${group.label} menu`}>
              {group.items.map((item) => {
                const profileUrl = profileLinks[item as keyof typeof profileLinks];

                return profileUrl ? (
                  <a
                    key={item}
                    className="dropdown-item"
                    role="menuitem"
                    href={profileUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item}
                  </a>
                ) : (
                  <button type="button" key={item} className="dropdown-item" role="menuitem">
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="macos-status" aria-label="System status">
        <div className="status-item" aria-label="Wi-Fi connection">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 9.5c4.5-4.5 13.5-4.5 18 0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M6.5 13c2.7-2.7 8.3-2.7 11 0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M10 16.5c1.3-1.3 3.7-1.3 5 0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="12" cy="19" r="1.2" fill="currentColor" />
          </svg>
        </div>

        <div className="status-item battery-group" aria-label="Battery status">
          <span className="battery-percent">100%</span>
          <svg viewBox="0 0 24 24" aria-hidden="true" className="battery-icon">
            <rect x="2.5" y="7" width="17" height="10" rx="2.2" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <rect x="20" y="9.2" width="2.5" height="5.6" rx="1" fill="currentColor" />
            <rect x="5" y="9.2" width="12.5" height="6.6" rx="1.2" fill="currentColor" />
          </svg>
        </div>

        <div className="status-item" aria-label="Search">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="10.5" cy="10.5" r="5.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <path d="M15 15l5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </div>

        <div className="status-clock" aria-live="polite">{currentTime}</div>
      </div>
    </header>
  );
};

type NavigationbottombarProps = {
  onAppClick?: (name: string) => void;
};

export const Navigationbottombar = ({ onAppClick }: NavigationbottombarProps) => {
  return (
    <div className="dock-wrapper" aria-label="Mac OS dock">
      <div className="dock-bar">
        {dockApps.map((app) => {
          const profileUrl = profileLinks[app.name as keyof typeof profileLinks];
          const icon = <span>{app.icon}</span>;

          return profileUrl ? (
            <a
              key={app.name}
              className="dock-icon"
              style={{ background: app.color }}
              aria-label={app.name}
              title={app.name}
              href={profileUrl}
              target="_blank"
              rel="noreferrer"
            >
              {icon}
            </a>
          ) : (
            <button
              type="button"
              key={app.name}
              className="dock-icon"
              style={{ background: app.color }}
              aria-label={app.name}
              title={app.name}
              onClick={() => onAppClick?.(app.name)}
            >
              {icon}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Navigationtopbar;