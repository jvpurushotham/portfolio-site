import { useState, useEffect, useRef } from "react";

// ─── SVG ICON COMPONENTS ─────────────────────────────────────────────────────

const GithubIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const TwitterXIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.213 5.567zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const MailIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const ResumeIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
  </svg>
);

const ExternalIcon = ({ size = 13, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const StarIcon = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#f59e0b">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const SunIcon = ({ size = 17, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

const MoonIcon = ({ size = 17, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

const MediumIcon = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>
);

const DevToIcon = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.29zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z"/>
  </svg>
);

// Platform logos
const LeetCodeLogo = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24">
  <image
    href="https://leetcode.com/static/images/LeetCode_logo_rvs.png"
    width="24"
    height="24"
  />
  </svg>
);

const GeeksForGeeksLogo = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24">
  <image
    href="https://media.geeksforgeeks.org/wp-content/uploads/20220413171711/gfgblack.png"
    width="24"
    height="24"
  />
  </svg>
);

const CodingNinjasLogo = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24">
  <image
    href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv8uuCmLe0QC3G-vxLDXmaT4UbrJCQFeQ_SQ&s"
    width="24"
    height="24"
  />
  </svg>
);

const HackerRankLogo = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24">
  <image
    href="https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png"
    width="24"
    height="24"
  />
  </svg>
);

const DataWarsLogo = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24">
  <image
    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUcAAACaCAMAAAANQHocAAAAflBMVEX5+fn6+vojIyP///8AAACcnJzr6+sODg4VFRUzMzPGxsbAwMDy8vJXV1cJCQmXl5ckJCQcHBwXFxfc3Nzj4+N5eXk9PT1hYWHPz89PT0+wsLAqKipvb29nZ2fW1taioqJ+fn5ISEirq6uNjY25ubmPj484ODhbW1tBQUGFhYVEYbMNAAAF40lEQVR4nO2da2+jOhCG48yUEEIh5NLcb23adP//H9wxNqRp90hH2pdWG73PlwA2sDyZGRun0vYcQdBzPfL30CMGesRAjxjoEQM9YqBHDPSIgR4x0CMGesRAjxjoEQM9YqBHDPSIgR4x0CMGesRAjxjoEQM9YqBHDPSIgR4x0CMGesRAjxjoEQM9YqBHDPSIgR4x0CMGesRAjxjoEQM9YqBHDPSIgR4x0CMGesRAjxjoEQM9YqBHDPSIgR4x0CMGesRAjxjoEQM9YqBHDPSIgR4x0CMGesRAjxjoEQM9YqBHDN/j0YnIN9zmB/kOj0565Wopdx343Xs0i4e0qPTxrk125bG9qrhDVfSNSi/71qT7EaWuu9t25NFlsSC6TLUfmegl3M1Jvmxv62un5/rvuFbTpq1tvW65sBH2XVt+PxbiTxe2xEh6XeVERx5F30fhCWS/1TTEY3XIw0MnL1o2j+uSdDMej1eHDyH8VoVmN7PvYLPZ9PuaBWvrKg395FXP4rumS/8IVRWuJ8dq1Sp9shP7w2MSLizTi6o+TrsZ8LryaNqG69qkk9lRB592Bw9XjzrcbnepbpIm0paajoPHZDufLwar+Xy7D/ZWg1qfbWU6Fy+6MOV2xjac0NOJzprYHabz+fxdJ+Hbm6rOD3PVaTcJ2JVHH4D9gwvqkpcYnk6mdXjeeLz47Cv1KR6So150GQuAmLBDk5ym7VJcgjGnG7H4LNKTfTzoOtg926lNqMuw8Bd+0Vd/QLaa1VdbdBKQHXo0iqLMg766bIksFzrxDTceH8X32OqoiamnmR7b7Bxp29d8ZTsNcSsLCzzZFjvNnVyuB61MXD36x/Pfk997Vz/KSLb81+KxZqAvSaztFgwrreLhzx59bv5qYupBhtoMrTceh2qth9Dt2WJQ0svIwqwXY9nlepJfMZajR5nprvZ41G1icd3RQNO1x34/1flMnEXk+amx+EePScw4H2iW5aMmqq4e3d5qYq7vwdnUdqZ6yE3/MqSud/tsOzGWZTiwNEgWQbzLT6qncv/PevQmt1NZb64W/8PjJTyvrqQJot6NRx9qYvkfRgoZb+SgU3l/s3RfBo8nzUU2gxDLMqzSwcCG6FhcZbSdqC46muh9g0c/c6yK6uOBP3j08dWrY+pSlmVf85idrUcnVfpalrsm+I6a7AZ+gMovWj+FDUObh7JcxViW4cRG+2IRI9CnhOwX4S5wvsfjF756tKB6rj9PqXqK55idrUcbawvfEidF1nBO52J19ZzGilAO6lPTXfTox+txMw9K/FBkFXVwtx7reY9N73wEWkw99vI8n+rqi0ebuVhLbxuy2ArAm00mnSvewjfQk40mvsMwxHI9zti4tIi9+/Uoo+O79XganddHDdloafpsbpyVuhBHrUczMa5bspiaspr46Y5s09DVInNXdyjDbDKO129Bu+x0sZxlp1gV0HTl8bYcfuHje2Gdi3raBzmDGEzPTRkcxb525KWOLKexy0M9dMvaIq3uMA/vOlZp62mQVL5smva3+mjvUt+nm/LYmcfb4fkTqe5m7W3zbLnM9nGS6WxPmo1wJMlCX7fPkpsNa/Ejt/UML41umfXajeuHZFl8rZ+uD+dZR+vJXa2b3U4Xb3O6nlB+7GqF67oo4/73hmsmNF86uJuPa7t0tgTa3Trux9eXG4vtC8490eV6+PV1uqVIwwv33dHt7wrN8k6g0vGhs4XUH6br32fCcmOwOFx3tUrw83zH71zJq1/HbRbI75Pv+d01Lx+z+/4Fm38HgIF/l4KBHjHQIwZ6xECPGOgRAz1ioEcM9IiBHjHQIwZ6xECPGOgRAz1ioEcM9IiBHjHQIwZ6xECPGOgRAz1ioEcM9IiBHjHQIwZ6xECPGOgRAz1ioEcM9IiBHjHQIwZ6xECPGOgRAz1ioEcM9IiBHjHQIwZ6xECPGOgRAz1ioEcM9IiBHjHQIwZ6xECPGOgRAz1ioEcM9IiBHjHQIwZ6xECPGOgRAz1icP4/USN/z2+8eD1PJsfyrQAAAABJRU5ErkJggg=="
    width="24"
    height="24"
  />
  </svg>
);

// Certification logos
const MicrosoftCertLogo = ({ size = 30 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48">
    <rect x="4" y="4" width="18" height="18" fill="#F25022" />
    <rect x="26" y="4" width="18" height="18" fill="#7FBA00" />
    <rect x="4" y="26" width="18" height="18" fill="#00A4EF" />
    <rect x="26" y="26" width="18" height="18" fill="#FFB900" />
  </svg>
);

const DatabricksCertLogo = ({ size = 30 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48">
    <path
      fill="#FF3621"
      d="M6 10l18-8 18 8-18 8-18-8z"
    />
    <path
      fill="#FF3621"
      d="M6 20l18-8 18 8-18 8-18-8z"
      opacity="0.85"
    />
    <path
      fill="#FF3621"
      d="M6 30l18-8 18 8-18 8-18-8z"
      opacity="0.7"
    />
  </svg>
);

const GoogleCertLogo = ({ size = 30 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48">
    <path fill="#EA4335" d="M24 9.5c3.4 0 6.4 1.2 8.7 3.2l6.5-6.5C35.5 2.6 30.1 0 24 0 14.6 0 6.6 5.4 2.6 13.3l7.6 5.9C12.2 13.6 17.7 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.5 24.5c0-1.7-.1-3.3-.4-4.9H24v9.3h12.7c-.5 2.9-2.1 5.4-4.5 7.1l7 5.5c4.1-3.8 7.3-9.3 7.3-17z"/>
    <path fill="#FBBC05" d="M10.2 28.6c-.5-1.4-.8-2.9-.8-4.6s.3-3.2.8-4.6l-7.6-5.9C.9 17 0 20.4 0 24s.9 7 2.6 10.5l7.6-5.9z"/>
    <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7-5.5c-2 1.3-4.6 2.1-8.9 2.1-6.3 0-11.7-4.1-13.7-9.7l-7.6 5.9C6.6 42.6 14.6 48 24 48z"/>
  </svg>
);

const CourseraCertLogo = ({ size = 30 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48">
    <circle cx="24" cy="24" r="20" fill="#0056D2"/>
    <path
      d="M32 18c-1.8-2.2-4.6-3.5-8-3.5-5.6 0-9.5 3.8-9.5 9.5s3.9 9.5 9.5 9.5c3.4 0 6.2-1.3 8-3.5"
      stroke="#ffffff"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

// DATA 

const SKILLS = {
  "Languages & Core": [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "#3776AB" },
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", color: "#3776AB" },
    { name: "C++", icon: "https://icon2.cleanpng.com/20180408/xew/avb9b16cz.webp", color: "#3178C6" },
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "#4479A1" },
    { name: "Bash", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg", color: "#4EAA25" },
    { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg", color: "#00ACD7" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", color: "#c95740" },
    { name: "MongoDB", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRivXCkaET9d6hHwTXDxxR8Lw5Vql5cUqrkAg&s", color: "#8ad775" },
  ],
  "Data Science & ML": [
    { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", color: "#FF6F00" },
    { name: "Scipy", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/SCIPY_2.svg/1280px-SCIPY_2.svg.png", color: "#619ce3" },
    { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", color: "#150458" },
    { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", color: "#013243" },
    { name: "Scikit-learn", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg", color: "#F7931E" },
    { name: "Matplotlib", icon: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg", color: "#11557C" },
    { name: "Seaborn", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAV3OXm5r6RxAuqB1t0iU-YM6j6U2g5vKMNA&s", color: "#11557C" },
    { name: "Keras", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Keras_Logo.jpg", color: "#678fa7" },
    { name: "NLTK", icon: "https://miro.medium.com/1*YM2HXc7f4v02pZBEO8h-qw.png", color: "#2e3336" },
    { name: "BeautifulSoup", icon: "https://miro.medium.com/v2/resize:fit:1400/1*UY8Ew9W6VR6wwnU9kavWvg.jpeg", color: "#000000" },
    { name: "Plotly", icon: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Plotly-logo.png", color: "#3d0606" },
    { name: "OpenCV", icon: "https://upload.wikimedia.org/wikipedia/commons/5/53/OpenCV_Logo_with_text.png", color: "#3d0606" },
  ],
  "Data Engineering": [
    { name: "Apache Spark", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg", color: "#E25A1C" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "#6B4FBB" },
    { name: "Google BigQuery", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM6Jotciswl54Y0-7ThvRxenDy2RarrSH8ZA&s", color: "#017CEE" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "#336791" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "#47A248" },
    { name: "OracleDB", icon: "https://m.media-amazon.com/images/I/41QodfboFdL.png", color: "#DC382D" },
    { name: "IBMDB2", icon: "https://www.simpleindex.com/wp-content/uploads/2023/07/IBM-DB2-Logo.png", color: "#408e36" },
    { name: "Hadoop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original.svg", color: "#eed723" },
  ],
  "DevOps & Cloud": [
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "#2496ED" },
    { name: "Linux", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1280px-Tux.svg.png", color: "#2496ED" },
    { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", color: "#326CE5" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", color: "#FF9900" },
    { name: "GCP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", color: "#4285F4" },
    { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg", color: "#623CE4" },
    { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", color: "#2088FF" },
    { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg", color: "#2496ED" },
    { name: "Maven", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg", color: "#623CE4" },
    { name: "GitLab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg", color: "#2088FF" },
  ],
  "Web & Full Stack": [
    { name: "HTML", icon: "https://cdn3d.iconscout.com/3d/free/preview/free-html-3d-icon-png-download-4781249.png?f=webp&h=700", color: "#61DAFB" },
    { name: "CSS", icon: "https://pngdownload.io/wp-content/uploads/2023/12/CSS-Logo-PNG-Symbol-for-Web-Development-Transparent-jpg.webp", color: "#339933" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", color: "#F7DF1E" },
    { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", color: "#092E20" },
    { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", color: "#E10098" },
    { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi.svg", color: "#6B6B6B" },
  ],
  "Core Subjects": [
    { name: "OS", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFkstzZyZhjgwwoNJuVslHe0cM8WSnjAbv6w&s", color: "#61DAFB" },
    { name: "System Design", icon: "https://img.favpng.com/20/14/24/sketch-product-design-logo-fluent-design-system-brand-png-favpng-KmUu55GBz7unwDUJrUcCNnpY9.jpg", color: "#61DAFB" },
    { name: "DBMS", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcnaYCELk-MeSCeUkQVdw0pyy2JnncIvS8FA&s", color: "#1f437d" },
    { name: "CN", icon: "https://cdn.vectorstock.com/i/1000v/02/30/computer-networks-earth-globe-vector-18440230.jpg", color: "#F7DF1E" },
    { name: "COD", icon: "https://www.vhv.rs/dpng/d/14-143163_computer-lab-icon-png-transparent-png.png", color: "#d4b61f" },
    { name: "SDLC", icon: "https://uniquesoftwaredev.com/wp-content/uploads/2023/08/Aug-B2-1.png", color: "#E10098" },
    { name: "NLP", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLowUK1w_hTjyyfL1-uWSzMtQcPA8dywJiNg&s", color: "#6B6B6B" },
  ],
};

const EXPERIENCES = [
  { role: "ML Trainee", company: "CSE Pathshala", period: "Jun 2025 – Aug 2025", desc: "Developed machine learning models by performing data preprocessing, feature engineering, and model training using Python, Pandas, and Scikit-learn. Evaluated model performance using appropriate metrics and deployed an interactive ML application using Streamlit for real-time predictions.", tags: ["Machine Learning", "Python", "EDA", "Scikit-learn", "Streamlit"] },
  { role: "Educator", company: "Sangamithra", period: "Jun 2024 – Aug 2024", desc: "Volunteered as an educator at a non-profit NGO, mentoring and teaching students from underprivileged backgrounds. Conducted sessions on fundamental computer skills, problem solving, and basic programming concepts while supporting students in their academic development.", tags: ["Teaching", "Mentoring", "Communication", "Social Impact", "Education"] },
];

const PROJECTS = [
  { name: "InsureSense", desc: "InsureSense is a machine learning–driven system that analyzes customer data to predict the likelihood of an insurance client accepting a policy offer, helping businesses target potential customers more effectively.", tags: ["Python", "Docker", "scikit-learn", "VS Code"], stars: 0, image: "https://wpblogassets.paytm.com/paytmblog/uploads/2021/09/15_Insurance_-What-is-Vehicle-Insurance-800x500.jpg", github: "https://github.com/jvpurushotham/InsureSense-Smart-Customer-Response-Predictor", live: "https://github.com/jvpurushotham/InsureSense-Smart-Customer-Response-Predictor" },
  { name: "Smart Hospital Queue System", desc: "A smart hospital queue management system allows patients to book tokens online and track real-time queue status. Built using Django and modern web technologies to streamline appointment scheduling, authentication, and notifications.", tags: ["Python(Django)", "HTML", "CSS", "JS"], stars: 0, image: "https://www.bestdocapp.com/wp-content/uploads/2021/12/14-01.png", github: "https://github.com/jvpurushotham/smart-hospital-queue-system", live: "https://github.com/jvpurushotham/smart-hospital-queue-system" },
  { name: "QuickCart", desc: "QuickCart is a full-stack grocery delivery web application developed using Django and JavaScript, featuring category-based product browsing, an intelligent cart system, real-time order tracking, and secure user authentication.", tags: ["Python(Django)", "HTML", "CSS", "JS"], stars: 0, image: "https://png.pngtree.com/png-vector/20250217/ourlarge/pngtree-friendly-grocery-delivery-person-holding-bags-bringing-fresh-food-and-smiles-png-image_15504176.png", github: "https://github.com/jvpurushotham/QuickCart", live: "https://quickcart-bhq2.onrender.com/admin/" },
  { name: "Netflix Customer Churn Prediction", desc: "A machine learning–based churn prediction system for Netflix that analyzes user activity patterns, viewing history, subscription plans, and engagement metrics to forecast the likelihood of customers cancelling their subscriptions.", tags: ["Python", "Docker", "Streamlit", "VS Code", "Flask"], stars: 0, image: "https://www.taboola.com/wp-content/uploads-neo/2025/04/customer-churn.jpg", github: "https://github.com/jvpurushotham/Netflix-Customer-Churn-Prediction", live: "https://netflix-customer-churn-model.streamlit.app" },
  { name: "Electronic Review Analysis", desc: "This project is a sentiment analysis project using machine learning to analyze Flipkart electronics reviews, uncover customer insights, and identify product trends that support data-driven consumer decisions and business strategies.", tags: ["NLP", "Python", "Streamlit", "scikit-learn"], stars: 0, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIXprp-rCmM3z3MGEKKBO6Tc3HVN8sMpEgpQ&s", github: "https://github.com/jvpurushotham/Electronics-Review-Analysis", live: "https://electronics-review-analysis-laptops-dashboard.streamlit.app" },
  { name: "Optimal Fertilizer Prediction", desc: "A data-driven fertilizer recommendation system powered by XGBoost that analyzes soil and environmental factors to predict the most suitable fertilizer, helping improve crop productivity and agricultural decision-making.", tags: ["Python", "scikit-learn", "XGBoost", "VS Code"], stars: 0, image: "https://4.imimg.com/data4/BN/XU/MY-311945/organic-fertilizer-500x500.jpg", github: "https://github.com/jvpurushotham/Optimal-Fertilizer-Prediction", live: "https://optimal-fertilizer-prediction-model.streamlit.app" },
  { name: "Chess-Game", desc: "A web-based chess application developed using Flask and the python-chess library, enabling users to play against other players or an AI powered by the Stockfish engine. The application features an intuitive drag-and-drop interface, real-time move validation, move history tracking, and a fully responsive design for seamless gameplay across devices.", tags: ["HTML", "CSS", "JS", "Python(Flask)", "Stockfish", "python-chess"], stars: 0, image: "https://www.popsci.com/wp-content/uploads/2026/01/Chess-Checkmate.jpg?quality=85", github: "https://github.com/jvpurushotham/Chess-Game", live: "https://chess-game-60x4.onrender.com/" },
];

const CERTS = [
  { name: "Generative AI For Data Science", org: "Microsoft", year: "2025", color: "#FF9900", logo: <MicrosoftCertLogo size={30}/> },
  { name: "Advance Machine Lerning Operations", org: "Databricks", year: "2025", color: "#4285F4", logo: <DatabricksCertLogo size={30}/> },
  { name: "Introduction to GenAI", org: "GCP", year: "2025", color: "#326CE5", logo: <GoogleCertLogo size={30}/> },
  { name: "Software Development Life Cycle", org: "Coursera / University of Minnesota", year: "2024", color: "#FF6F00", logo: <CourseraCertLogo size={30}/> },
  { name: "Database and SQL", org: "Coursera / IBM", year: "2024", color: "#623CE4", logo: <CourseraCertLogo size={30}/> },
  { name: "The Bits and Bytes of Computer Networking", org: "Coursera / Google", year: "2024", color: "#0866FF", logo: <GoogleCertLogo size={30}/> },
];

const PLATFORMS = [
  { name: "LeetCode", handle: "@jvpurushotham", solved: 400, rating: "Top 40%", color: "#FFA116", logo: <LeetCodeLogo size={26}/>, url: "https://leetcode.com/u/purushothamjv/" },
  { name: "GeekForGeeks", handle: "@jvpurushotham", solved: 180, rating: "5-Star SQL", color: "#00EA64", logo: <GeeksForGeeksLogo size={26}/>, url: "https://www.geeksforgeeks.org/profile/pandupuuw0d6" },
  { name: "Coding Ninjas", handle: "@jvpurushotham", solved: 110, rating: "", color: "#e16530", logo: <CodingNinjasLogo size={26}/>, url: "https://www.naukri.com/code360/profile/jvpurushotham" },
  { name: "HackerRank", handle: "@jvpurushotham", solved: 70, color: "#9cda5f", logo: <HackerRankLogo size={26}/>, url: "https://www.hackerrank.com/profile/pandupuushotham" },
  { name: "GitHub", handle: "@jvpurushotham", solved: 20, rating: "240 Contributions", color: "#8B5CF6", logo: <GithubIcon size={26} color="#8B5CF6"/>, url: "https://github.com/jvpurushotham" },
  { name: "Datawars", handle: "@jvpurushotham", solved: 40, color: "#d3b7a1", logo: <DataWarsLogo size={26}/>, url: "https://profiles.datawars.io/pandupuushotham" },
];

const EDUCATION = [
  { degree: "B.Tech – Computer Science", school: "Lovely Professional University", period: "2023 – Present", percentage: "87.9" },
  { degree: "Intermediate – PCM", school: "Narayana Junior college", period: "2021 – 2023", percentage: "97.4" },
  { degree: "Matriculation – PCMB", school: "Sarvagna EM High School", period: "2020 – 2021", percentage: "98.3" },
];

const ACHIEVEMENTS = [
  {
    title: "Merit Scholarship",
    desc: "Awarded for academic excellence, 4 consecutive years",
    icon: <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
  },
  {
    title: "Naukri Campus Young Turks",
    desc: "Qualified for Round 2 of Naukri Campus Young Turks. Top 1%",
    icon: <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>
  },
  {
    title: "Competitive Programming",
    desc: "Solved 500+ Data Structures & Algorithms problems across coding platforms.",
    icon: <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="10" y1="20" x2="14" y2="4"/></svg>
  },
  {
    title: "Machine Learning",
    desc: "Built and deployed 5+ machine learning applications used for real-time predictions.",
    icon: <GithubIcon size={22} color="#ec4899"/>
  },
  {
    title: "Technical Bolgs",
    desc: "Published technical articles on Python OOP and Git, simplifying complex concepts for developers.",
    icon: <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
  },
];

const ARTICLES = [
  {
    title: "OOPS in Python — The Only Article You Need (Seriously)",
    summary: "An in-depth exploration of Python's OOP principles, demonstrating how to design modular, reusable, and scalable programs using classes, abstraction, and object-oriented design patterns.",
    date: "Mar 2, 26",
    readTime: "5 min read",
    tags: ["Oops", "Python", "Class", "Object", "Oops 4-Pillars"],
    platform: "medium",
    cover: "https://cdn.hashnode.com/res/hashnode/image/upload/v1722092270765/4bd19604-1fbf-4474-aa65-c8b2c355d558.png",
    url: "https://medium.com/@pandupuushotham/oops-in-python-the-only-article-you-need-seriously-6ad780e603ea",
  },
  {
    title: "Stop Searching for Git Tutorials — The Only Git Guide You’ll Ever Need",
    summary: "A comprehensive guide to Git fundamentals, covering version control concepts, branching strategies, and collaborative workflows that help developers efficiently manage and track code changes.",
    date: "Mar 16, 26",
    readTime: "10 min read",
    tags: ["Git", "GtHub", "Git Commands", "Version Control"],
    platform: "medium",
    cover: "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_e4ae003c4d9b2b7615189af32032183d/git.png",
    url: "https://medium.com/@pandupuushotham/stop-searching-for-git-tutorials-the-only-git-guide-youll-ever-need-1247eaf32bbe",
  },
];

const NAV = ["Home","Resume","Skills","Experience","Projects","Certificates","Education","Achievements","Platforms","Articles","Contact"];

// UTILS 

function useIntersect(ref, threshold = 0.1) {
  const [v, setV] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return v;
}

function FadeIn({ children, delay = 0, style = {} }) {
  const ref = useRef();
  const v = useIntersect(ref);
  return (
    <div ref={ref} style={{ opacity: v ? 1 : 0, transform: v ? "none" : "translateY(28px)", transition: `opacity 0.7s cubic-bezier(.16,1,.3,1) ${delay}s, transform 0.7s cubic-bezier(.16,1,.3,1) ${delay}s`, ...style }}>
      {children}
    </div>
  );
}

// APP 

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [skillTab, setSkillTab] = useState("Languages & Core");
  const [typed, setTyped] = useState("");
  const [cursor, setCursor] = useState(true);
  const [hov, setHov] = useState(null);
  const [mobMenu, setMobMenu] = useState(false);
  const roleRef = useRef(0); const charRef = useRef(0); const delRef = useRef(false);
  const roles = ["Data Analyst", "Data Scientist","Data Engineer","ML Engineer","DevOps Engineer","Software Engineering","Python Full Stack Developer"];

  useEffect(() => {
    const tick = () => {
      const r = roles[roleRef.current];
      if (!delRef.current) { charRef.current++; setTyped(r.slice(0, charRef.current)); if (charRef.current === r.length) { delRef.current = true; setTimeout(tick, 1800); return; } }
      else { charRef.current--; setTyped(r.slice(0, charRef.current)); if (charRef.current === 0) { delRef.current = false; roleRef.current = (roleRef.current + 1) % roles.length; } }
      setTimeout(tick, delRef.current ? 50 : 105);
    };
    const id = setTimeout(tick, 700);
    return () => clearTimeout(id);
  }, []);
  useEffect(() => { const id = setInterval(() => setCursor(c => !c), 530); return () => clearInterval(id); }, []);

  const d = dark;
  const T = d
    ? { bg:"#060610",surf:"#0d0d1e",card:"#111128",border:"#ffffff10",text:"#eeeef8",muted:"#6b6b9a",acc:"#7c3aed",accL:"#a855f7",accP:"#ec4899",glow:"rgba(124,58,237,0.2)",nav:"rgba(6,6,16,0.9)",inp:"#0d0d1e" }
    : { bg:"#f2f1ff",surf:"#ffffff",card:"#faf9ff",border:"#e2ddf5",text:"#111028",muted:"#645c94",acc:"#6d28d9",accL:"#7c3aed",accP:"#db2777",glow:"rgba(109,40,217,0.11)",nav:"rgba(242,241,255,0.92)",inp:"#f2f1ff" };

  const G = `linear-gradient(135deg,${T.acc},${T.accP})`;
  const go = id => { document.getElementById(id)?.scrollIntoView({ behavior:"smooth" }); setMobMenu(false); };

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,400&display=swap');
    *{box-sizing:border-box;margin:0;padding:0}
    html{scroll-behavior:smooth}
    body{background:${T.bg};font-family:'DM Sans',sans-serif;color:${T.text};overflow-x:hidden}
    ::-webkit-scrollbar{width:3px}::-webkit-scrollbar-track{background:${T.bg}}::-webkit-scrollbar-thumb{background:${T.acc};border-radius:2px}
    ::selection{background:${T.acc};color:#fff}
    .D{font-family:'Outfit',sans-serif}
    .H{font-family:'Space Grotesk',sans-serif}
    .M{font-family:'JetBrains Mono',monospace}
    .GT{background:${G};-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .SL{font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:${T.accL};display:block;margin-bottom:9px}
    .ST{font-family:'Outfit',sans-serif;font-size:clamp(30px,4vw,50px);font-weight:800;line-height:1.1;color:${T.text}}
    .TAG{font-family:'JetBrains Mono',monospace;font-size:10px;padding:3px 9px;border-radius:20px;background:${T.acc}18;color:${T.accL};border:1px solid ${T.acc}2e;letter-spacing:.04em;white-space:nowrap}
    .CARD{background:${T.card};border:1px solid ${T.border};border-radius:18px;transition:all .28s cubic-bezier(.16,1,.3,1)}
    .CARD:hover{transform:translateY(-5px);box-shadow:0 20px 56px ${T.glow}}
    .BPR{background:${G};border:none;color:#fff;padding:11px 26px;border-radius:10px;font-family:'DM Sans',sans-serif;font-weight:600;cursor:pointer;font-size:14px;transition:opacity .2s,transform .15s}
    .BPR:hover{opacity:.86;transform:scale(1.02)}
    .BGH{background:transparent;border:1.5px solid ${T.border};color:${T.text};padding:11px 26px;border-radius:10px;font-family:'DM Sans',sans-serif;font-weight:500;cursor:pointer;font-size:14px;transition:border-color .2s,color .2s}
    .BGH:hover{border-color:${T.accL};color:${T.accL}}
    .GBX{box-shadow:0 0 42px ${T.glow},0 4px 28px rgba(0,0,0,.18)}
    .GBG{background-image:linear-gradient(${T.border} 1px,transparent 1px),linear-gradient(90deg,${T.border} 1px,transparent 1px);background-size:52px 52px}
    .NAV{font-family:'DM Sans',sans-serif;font-size:13.5px;font-weight:500;cursor:pointer;color:${T.muted};transition:color .2s}
    .NAV:hover{color:${T.accL}}
    .SK{background:${T.card};border:1px solid ${T.border};border-radius:14px;padding:20px 14px;display:flex;flex-direction:column;align-items:center;gap:9px;transition:all .22s;cursor:default}
    .SK:hover{transform:translateY(-4px) scale(1.03);border-color:${T.accL}55;box-shadow:0 10px 30px ${T.glow}}
    .SK:hover img{transform:scale(1.12) translateY(-2px)}
    .RSGR{display:grid;grid-template-columns:1fr 1fr;gap:20px}
    .PC{background:${T.card};border:1px solid ${T.border};border-radius:16px;padding:20px;transition:all .25s;cursor:pointer;text-decoration:none;display:block}
    .PC:hover{transform:translateY(-4px);border-color:${T.accL}44;box-shadow:0 12px 38px ${T.glow}}
    .PL{display:inline-flex;align-items:center;gap:6px;font-size:12px;font-family:'DM Sans',sans-serif;font-weight:500;padding:7px 13px;border-radius:8px;cursor:pointer;text-decoration:none;transition:all .18s}
    .PLG{background:${T.border};color:${T.text};border:1px solid ${T.border}}
    .PLG:hover{background:${T.acc};color:#fff;border-color:${T.acc}}
    .PLL{background:${G};color:#fff;border:1px solid transparent}
    .PLL:hover{opacity:.85}
    .AC{background:${T.card};border:1px solid ${T.border};border-radius:18px;overflow:hidden;transition:all .28s cubic-bezier(.16,1,.3,1);display:block;text-decoration:none}
    .AC:hover{transform:translateY(-5px);box-shadow:0 20px 56px ${T.glow}}
    .TL{position:absolute;left:20px;top:8px;bottom:0;width:2px;background:linear-gradient(to bottom,${T.acc},${T.accP}44,transparent)}
    .DOT{width:13px;height:13px;border-radius:50%;background:${G};box-shadow:0 0 14px ${T.glow};flex-shrink:0;margin-top:5px}
    input,textarea{background:${T.inp};border:1.5px solid ${T.border};border-radius:10px;padding:12px 16px;color:${T.text};font-size:14px;font-family:'DM Sans',sans-serif;outline:none;transition:border-color .2s;width:100%}
    input:focus,textarea:focus{border-color:${T.accL}}
    input::placeholder,textarea::placeholder{color:${T.muted}}
    .FLT{animation:flt 5.5s ease-in-out infinite}
    @keyframes flt{0%,100%{transform:translateY(0)}50%{transform:translateY(-9px)}}
    .PRG{animation:prg 2.8s ease-in-out infinite}
    @keyframes prg{0%,100%{opacity:.45;transform:scale(1)}50%{opacity:.1;transform:scale(1.2)}}
    .NOISE{position:fixed;inset:0;pointer-events:none;opacity:.025;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-repeat:repeat;z-index:9999}
    .MMENU{position:fixed;inset:0;top:64px;background:${T.nav};backdrop-filter:blur(24px);z-index:997;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:26px}
    @media(max-width:900px){.HNAV{display:none!important}}
    @media(max-width:768px){.HM{display:none!important}.SKGR{grid-template-columns:repeat(3,1fr)!important}.PJGR{grid-template-columns:1fr!important}.PLGR{grid-template-columns:repeat(2,1fr)!important}.RSGR{grid-template-columns:1fr!important}}
    @media(max-width:500px){.SKGR{grid-template-columns:repeat(3,1fr)!important}}
    @media(max-width:500px){.STROW{flex-wrap:wrap;gap:14px}}
  `;

  return (
    <div style={{ background: T.bg, color: T.text, minHeight:"100vh" }}>
      <style>{css}</style>
      <div className="NOISE" />

      {/* NAV */}
      <nav style={{ position:"fixed",top:0,left:0,right:0,zIndex:998,background:T.nav,backdropFilter:"blur(22px)",borderBottom:`1px solid ${T.border}`,padding:"0 clamp(16px,4vw,60px)",height:64,display:"flex",alignItems:"center",justifyContent:"space-between" }}>
        <div className="D" style={{ fontSize:19,fontWeight:900,cursor:"pointer",letterSpacing:"-0.04em" }} onClick={() => window.scrollTo({top:0,behavior:"smooth"})}>
          <span className="GT">{"<"}</span><span>Purushotham</span><span className="GT">{"/>"}</span>
        </div>
        <div className="HNAV" style={{ display:"flex",gap:22 }}>
          {NAV.slice(1).map(n => <span key={n} className="NAV" onClick={() => go(n)}>{n}</span>)}
        </div>
        <div style={{ display:"flex",gap:10,alignItems:"center" }}>
          <button onClick={() => setDark(x=>!x)} style={{ background:T.card,border:`1px solid ${T.border}`,borderRadius:8,width:38,height:38,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:T.text }}>
            {d ? <SunIcon size={16} color={T.text}/> : <MoonIcon size={16} color={T.text}/>}
          </button>
          <button className="BPR HM" style={{ padding:"8px 18px",fontSize:13 }} onClick={() => go("Contact")}>Hire Me</button>
          <button onClick={() => setMobMenu(m=>!m)} style={{ background:"transparent",border:`1px solid ${T.border}`,borderRadius:8,width:38,height:38,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:T.text }} className="HNAV" id="mb">
            <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
        </div>
      </nav>

      {mobMenu && (
        <div className="MMENU">
          {NAV.slice(1).map(n => <span key={n} style={{ fontSize:19,fontWeight:600,cursor:"pointer",fontFamily:"'Outfit',sans-serif",color:T.text }} onClick={() => go(n)}>{n}</span>)}
        </div>
      )}

      {/* HERO */}
      <section id="Home" style={{ minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",overflow:"hidden",paddingTop:80 }}>
        <div className="GBG" style={{ position:"absolute",inset:0,opacity:d?0.45:0.5 }}/>
        <div style={{ position:"absolute",top:"18%",right:"4%",width:520,height:520,borderRadius:"50%",background:`radial-gradient(circle,${T.acc}18 0%,transparent 65%)`,pointerEvents:"none" }}/>
        <div style={{ position:"absolute",bottom:"12%",left:"-6%",width:400,height:400,borderRadius:"50%",background:`radial-gradient(circle,${T.accP}13 0%,transparent 65%)`,pointerEvents:"none" }}/>
        <div style={{ position:"absolute",top:"55%",left:"28%",width:280,height:280,borderRadius:"50%",background:`radial-gradient(circle,#38bdf818 0%,transparent 65%)`,pointerEvents:"none" }}/>

        <div style={{ position:"relative",zIndex:2,maxWidth:960,margin:"0 auto",padding:"0 clamp(16px,4vw,40px)",textAlign:"center" }}>
          {/* Avatar */}
          <div className="FLT" style={{ position:"relative",display:"inline-block",marginBottom:28 }}>
            <div className="PRG" style={{ position:"absolute",inset:-14,borderRadius:"50%",border:`2px solid ${T.accL}2e` }}/>
            <div style={{ width:112,height:112,borderRadius:"50%",background:G,display:"flex",alignItems:"center",justifyContent:"center",border:`3px solid ${T.border}`,boxShadow:`0 0 52px ${T.glow}`,overflow:"hidden" }}>
              <svg width={58} height={58} viewBox="0 0 24 24" fill="white" opacity={0.9}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <div style={{ position:"absolute",bottom:6,right:6,width:18,height:18,borderRadius:"50%",background:"#22c55e",border:`2.5px solid ${T.bg}`,boxShadow:"0 0 8px #22c55e55" }}/>
          </div>

          <div><span className="SL">Available for opportunities</span></div>

          <h1 className="D" style={{ fontSize:"clamp(44px,7vw,86px)",fontWeight:900,lineHeight:1.05,marginBottom:12,letterSpacing:"-0.05em" }}>
            J V {" "}<span className="GT">Purushotham</span>
          </h1>

          <div className="H" style={{ fontSize:"clamp(16px,2.4vw,25px)",fontWeight:600,marginBottom:22,minHeight:34,color:T.muted }}>
            <span style={{ color:T.accL }}>{typed}</span>
            <span style={{ opacity:cursor?1:0,color:T.accL }}>|</span>
          </div>

          <p className="DM" style={{ maxWidth:540,margin:"0 auto 34px",color:T.muted,lineHeight:1.82,fontSize:15.5,fontFamily:"'DM Sans',sans-serif" }}>
            Crafting intelligent systems at the intersection of data, cloud &amp; code. Turning raw data into decisions and ideas into production-grade software.
          </p>

          <div style={{ display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap",marginBottom:52 }}>
            <button className="BPR" onClick={() => go("Projects")}>View My Work</button>
            <button className="BGH" onClick={() => go("Contact")}>Get In Touch</button>
          </div>

          <div className="STROW" style={{ display:"flex",borderTop:`1px solid ${T.border}`,paddingTop:30,justifyContent:"center" }}>
            {[["5+","Languages"],["20+","Projects"],["240+","Commits"],["6+","Certificates"]].map(([n,l],i,a) => (
              <div key={l} style={{ padding:"0 clamp(14px,3vw,32px)",borderRight:i<a.length-1?`1px solid ${T.border}`:"none",textAlign:"center" }}>
                <div className="D GT" style={{ fontSize:"clamp(22px,3vw,30px)",fontWeight:900 }}>{n}</div>
                <div className="M" style={{ fontSize:10.5,color:T.muted,marginTop:3,letterSpacing:"0.05em" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESUME ── */}
      <section id="Resume" style={{ padding:"100px clamp(16px,5vw,80px)",background:T.surf,position:"relative",overflow:"hidden" }}>
        {/* decorative orbs */}
        <div style={{ position:"absolute",top:"-10%",right:"-5%",width:420,height:420,borderRadius:"50%",background:`radial-gradient(circle,${T.acc}14 0%,transparent 65%)`,pointerEvents:"none" }}/>
        <div style={{ position:"absolute",bottom:"-10%",left:"-5%",width:340,height:340,borderRadius:"50%",background:`radial-gradient(circle,${T.accP}10 0%,transparent 65%)`,pointerEvents:"none" }}/>

        <FadeIn>
          <div style={{ textAlign:"center",marginBottom:56 }}>
            <span className="SL">Career Document</span>
            <h2 className="ST">My <span className="GT">Resume</span></h2>
            <p style={{ color:T.muted,fontSize:15,marginTop:14,fontFamily:"'DM Sans',sans-serif",lineHeight:1.7 }}>
              A snapshot of my experience, education, and skills —<br/>available to view online or download instantly.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="RSGR" style={{ maxWidth:900,margin:"0 auto" }}>

            {/* ── View Online card ── */}
            <div style={{ background:T.card,border:`1px solid ${T.border}`,borderRadius:22,padding:"36px 32px",display:"flex",flexDirection:"column",alignItems:"flex-start",gap:18,position:"relative",overflow:"hidden",transition:"all .28s cubic-bezier(.16,1,.3,1)" }}
              onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-5px)";e.currentTarget.style.boxShadow=`0 20px 56px ${T.glow}`;e.currentTarget.style.borderColor=T.accL+"55";}}
              onMouseLeave={e=>{e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow="none";e.currentTarget.style.borderColor=T.border;}}>
              {/* bg glow */}
              <div style={{ position:"absolute",top:-40,right:-40,width:180,height:180,borderRadius:"50%",background:`radial-gradient(circle,${T.acc}18,transparent 70%)`,pointerEvents:"none" }}/>
              {/* icon */}
              <div style={{ width:56,height:56,borderRadius:14,background:`linear-gradient(135deg,${T.acc}33,${T.accP}22)`,border:`1px solid ${T.acc}44`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
                <svg width={26} height={26} viewBox="0 0 24 24" fill="none" stroke={T.accL} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <div>
                <div className="H" style={{ fontSize:20,fontWeight:700,marginBottom:6 }}>View Online</div>
                <p style={{ color:T.muted,fontSize:13.5,lineHeight:1.72,fontFamily:"'DM Sans',sans-serif" }}>
                  Browse my full resume in your browser — interactive, always up to date, with links to projects and profiles.
                </p>
              </div>
              {/* resume preview thumbnail */}
              <div style={{ width:"100%",background:d?"#0a0a18":"#f0eeff",border:`1px solid ${T.border}`,borderRadius:12,padding:"20px 18px",fontFamily:"'JetBrains Mono',monospace",fontSize:11,color:T.muted,lineHeight:1.9,letterSpacing:"0.01em",position:"relative",overflow:"hidden" }}>
                <div style={{ color:T.text,fontWeight:600,fontSize:13,fontFamily:"'Outfit',sans-serif",marginBottom:2 }}>J V Purushotham</div>
                <div style={{ color:T.accL,fontSize:10.5,marginBottom:8 }}>Data Scientist · ML Engineer · Software Engineer</div>
                <div style={{ borderTop:`1px solid ${T.border}`,paddingTop:8,display:"flex",flexDirection:"column",gap:4 }}>
                  {["Languages · 5+","Skills · Python, Spark, AWS, Django","Education · LPU · Narayana","Certificates · 6+ coursera certs"].map(l=>(
                    <div key={l} style={{ display:"flex",alignItems:"center",gap:6 }}>
                      <div style={{ width:4,height:4,borderRadius:"50%",background:T.accL,flexShrink:0 }}/>
                      <span>{l}</span>
                    </div>
                  ))}
                </div>
                {/* shimmer line */}
                <div style={{ position:"absolute",bottom:0,left:0,right:0,height:3,background:`linear-gradient(to right,${T.acc},${T.accP})`,opacity:0.6 }}/>
              </div>
              <a href="https://github.com/jvpurushotham/MyResume/blob/main/Purushotham_JV_CV_Feb.pdf" target="_blank" rel="noopener noreferrer"
                style={{ display:"inline-flex",alignItems:"center",gap:9,background:`linear-gradient(135deg,${T.acc},${T.accP})`,border:"none",color:"#fff",padding:"13px 28px",borderRadius:10,fontFamily:"'DM Sans',sans-serif",fontWeight:600,fontSize:14,cursor:"pointer",textDecoration:"none",letterSpacing:"0.02em",transition:"opacity .2s,transform .15s",marginTop:4,width:"100%",justifyContent:"center" }}
                onMouseEnter={e=>{e.currentTarget.style.opacity="0.86";e.currentTarget.style.transform="scale(1.02)";}}
                onMouseLeave={e=>{e.currentTarget.style.opacity="1";e.currentTarget.style.transform="none";}}>
                <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                </svg>
                View Resume Online
              </a>
            </div>

            {/* ── Download card ── */}
            <div style={{ background:T.card,border:`1px solid ${T.border}`,borderRadius:22,padding:"36px 32px",display:"flex",flexDirection:"column",alignItems:"flex-start",gap:18,position:"relative",overflow:"hidden",transition:"all .28s cubic-bezier(.16,1,.3,1)" }}
              onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-5px)";e.currentTarget.style.boxShadow=`0 20px 56px ${T.glow}`;e.currentTarget.style.borderColor=T.accP+"55";}}
              onMouseLeave={e=>{e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow="none";e.currentTarget.style.borderColor=T.border;}}>
              <div style={{ position:"absolute",top:-40,right:-40,width:180,height:180,borderRadius:"50%",background:`radial-gradient(circle,${T.accP}18,transparent 70%)`,pointerEvents:"none" }}/>
              {/* icon */}
              <div style={{ width:56,height:56,borderRadius:14,background:`linear-gradient(135deg,${T.accP}33,${T.acc}22)`,border:`1px solid ${T.accP}44`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
                <svg width={26} height={26} viewBox="0 0 24 24" fill="none" stroke={T.accP} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              </div>
              <div>
                <div className="H" style={{ fontSize:20,fontWeight:700,marginBottom:6 }}>Download PDF</div>
                <p style={{ color:T.muted,fontSize:13.5,lineHeight:1.72,fontFamily:"'DM Sans',sans-serif" }}>
                  Save a polished, print-ready version of my resume to your device. It includes my latest projects, technical skills, and experience in software development, machine learning, and problem solving.
                </p>
              </div>
              {/* file info card */}
              <div style={{ width:"100%",background:d?"#0a0a18":"#f0eeff",border:`1px solid ${T.border}`,borderRadius:12,padding:"18px 18px",display:"flex",alignItems:"center",gap:16 }}>
                <div style={{ width:46,height:56,background:`linear-gradient(135deg,${T.acc}22,${T.accP}22)`,border:`1px solid ${T.border}`,borderRadius:8,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",flexShrink:0,position:"relative",overflow:"hidden" }}>
                  <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke={T.accL} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
                  </svg>
                  <span style={{ fontSize:7,fontFamily:"'JetBrains Mono',monospace",color:T.accL,fontWeight:600,marginTop:2,letterSpacing:"0.05em" }}>PDF</span>
                </div>
                <div style={{ flex:1 }}>
                  <div className="H" style={{ fontSize:13.5,fontWeight:600,color:T.text }}>JV_Purushotham_Resume.pdf</div>
                  <div className="M" style={{ fontSize:11,color:T.muted,marginTop:3,letterSpacing:"0.03em" }}>1 page · 225 KB · Updated Mar 2026</div>
                  <div style={{ display:"flex",gap:8,marginTop:8,flexWrap:"wrap" }}>
                    {["ATS Friendly","Clean Format","Hyperlinked"].map(b=>(
                      <span key={b} style={{ fontSize:9.5,fontFamily:"'JetBrains Mono',monospace",padding:"2px 8px",borderRadius:20,background:`${T.acc}16`,color:T.accL,border:`1px solid ${T.acc}2e` }}>{b}</span>
                    ))}
                  </div>
                </div>
              </div>
              <a href="/JV_Purushotham_Resume.pdf" download="JV_Purushotham_Resume.pdf"
                style={{ display:"inline-flex",alignItems:"center",gap:9,background:"transparent",border:`2px solid ${T.accP}`,color:T.accP,padding:"13px 28px",borderRadius:10,fontFamily:"'DM Sans',sans-serif",fontWeight:600,fontSize:14,cursor:"pointer",textDecoration:"none",letterSpacing:"0.02em",transition:"all .2s",marginTop:4,width:"100%",justifyContent:"center" }}
                onMouseEnter={e=>{e.currentTarget.style.background=T.accP;e.currentTarget.style.color="#fff";}}
                onMouseLeave={e=>{e.currentTarget.style.background="transparent";e.currentTarget.style.color=T.accP;}}>
                <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download PDF
              </a>
            </div>

          </div>
        </FadeIn>
      </section>

      {/* ── SKILLS ── */}
      <section id="Skills" style={{ padding:"100px clamp(16px,5vw,80px)",background:T.bg }}>
        <FadeIn><div style={{ textAlign:"center",marginBottom:44 }}><span className="SL">Tech Arsenal</span><h2 className="ST">Skills & <span className="GT">Technologies</span></h2></div></FadeIn>
        <FadeIn delay={0.08}>
          <div style={{ display:"flex",gap:8,flexWrap:"wrap",justifyContent:"center",marginBottom:36 }}>
            {Object.keys(SKILLS).map(cat => (
              <button key={cat} onClick={() => setSkillTab(cat)} style={{ padding:"8px 17px",borderRadius:24,border:`1.5px solid ${skillTab===cat?T.acc:T.border}`,background:skillTab===cat?`${T.acc}1e`:"transparent",color:skillTab===cat?T.accL:T.muted,cursor:"pointer",fontSize:12,fontFamily:"'JetBrains Mono',monospace",fontWeight:500,transition:"all .18s",letterSpacing:"0.03em" }}>
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.15}>
          {/* Logo-only grid — name shown only on hover via title tooltip */}
          <div className="SKGR" style={{ display:"grid",gridTemplateColumns:"repeat(6,1fr)",gap:12,maxWidth:820,margin:"0 auto" }}>
            {SKILLS[skillTab].map((s,i) => (
              <div key={s.name} title={s.name} className="SK"
                style={{ padding:"18px 10px",gap:0,position:"relative",cursor:"default",borderRadius:14 }}>
                {/* color glow dot */}
                <div style={{ position:"absolute",inset:0,borderRadius:14,background:`radial-gradient(circle at 50% 110%,${s.color}22,transparent 70%)`,pointerEvents:"none" }}/>
                <img src={s.icon} alt={s.name}
                  style={{ width:48,height:48,objectFit:"contain",position:"relative",zIndex:1,transition:"transform .22s" }}
                  onError={e=>{
                    // fallback: colored initial badge
                    e.target.style.display="none";
                    const fb=e.target.nextSibling;
                    if(fb) fb.style.display="flex";
                  }}
                />
                {/* fallback initial badge */}
                <div style={{ display:"none",width:48,height:48,borderRadius:10,background:s.color,color:"#fff",fontFamily:"'Outfit',sans-serif",fontWeight:800,fontSize:18,alignItems:"center",justifyContent:"center",flexShrink:0 }}>
                  {s.name.charAt(0)}
                </div>
                {/* name label below logo */}
                <span className="M" style={{ fontSize:9.5,color:T.muted,marginTop:9,textAlign:"center",letterSpacing:"0.02em",lineHeight:1.3,zIndex:1,position:"relative",display:"block" }}>
                  {s.name}
                </span>
                {/* bottom accent bar */}
                <div style={{ position:"absolute",bottom:0,left:"20%",right:"20%",height:2,borderRadius:2,background:`linear-gradient(to right,transparent,${s.color},transparent)`,opacity:0.6 }}/>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* EXPERIENCE */}
      <section id="Experience" style={{ padding:"100px clamp(16px,5vw,80px)",background:T.bg }}>
        <FadeIn><span className="SL">Career Path</span><h2 className="ST" style={{ marginBottom:54 }}>Work <span className="GT">Experience</span></h2></FadeIn>
        <div style={{ maxWidth:760,position:"relative",paddingLeft:50 }}>
          <div className="TL"/>
          {EXPERIENCES.map((e,i) => (
            <FadeIn key={i} delay={i*.1}>
              <div style={{ display:"flex",gap:20,marginBottom:42,position:"relative" }}>
                <div className="DOT" style={{ position:"absolute",left:-37,top:6 }}/>
                <div className="CARD" style={{ padding:"24px 28px",flex:1 }}>
                  <div style={{ display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:8,marginBottom:8 }}>
                    <div>
                      <div className="H" style={{ fontSize:17,fontWeight:700 }}>{e.role}</div>
                      <div style={{ color:T.accL,fontSize:13.5,fontWeight:500,marginTop:2 }}>{e.company}</div>
                    </div>
                    <span className="M" style={{ fontSize:11,color:T.muted,padding:"4px 12px",border:`1px solid ${T.border}`,borderRadius:20,alignSelf:"flex-start",letterSpacing:"0.04em" }}>{e.period}</span>
                  </div>
                  <p style={{ color:T.muted,fontSize:13.5,lineHeight:1.76,marginBottom:14 }}>{e.desc}</p>
                  <div style={{ display:"flex",flexWrap:"wrap",gap:6 }}>{e.tags.map(t=><span key={t} className="TAG">{t}</span>)}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="Projects" style={{ padding:"100px clamp(16px,5vw,80px)",background:T.surf }}>
        <FadeIn><div style={{ marginBottom:46 }}><span className="SL">Built in Production</span><h2 className="ST">Featured <span className="GT">Projects</span></h2></div></FadeIn>
        <div className="PJGR" style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))",gap:18,maxWidth:1100 }}>
          {PROJECTS.map((p,i) => (
            <FadeIn key={i} delay={i*.06}>
              <div onMouseEnter={()=>setHov(i)} onMouseLeave={()=>setHov(null)}
                style={{ background:T.card,border:`1px solid ${hov===i?T.accL+"44":T.border}`,borderRadius:18,overflow:"hidden",transition:"all .28s cubic-bezier(.16,1,.3,1)",transform:hov===i?"translateY(-5px)":"none",boxShadow:hov===i?`0 20px 56px ${T.glow}`:"none" }}>
                <div style={{ position:"relative",overflow:"hidden",height:178 }}>
                  <img src={p.image} alt={p.name} style={{ width:"100%",height:178,objectFit:"cover",display:"block",transition:"transform .4s ease",transform:hov===i?"scale(1.07)":"scale(1)" }} onError={e=>{e.target.parentNode.style.background=`${T.acc}22`;e.target.style.display="none"}}/>
                  <div style={{ position:"absolute",inset:0,background:`linear-gradient(to top,${T.card} 0%,transparent 55%)` }}/>
                  <div style={{ position:"absolute",top:11,right:11,display:"flex",alignItems:"center",gap:4,background:"rgba(0,0,0,.55)",backdropFilter:"blur(8px)",borderRadius:20,padding:"3px 9px" }}>
                    <StarIcon size={11}/><span className="M" style={{ fontSize:11,color:"#e8e8f0" }}>{p.stars}</span>
                  </div>
                </div>
                <div style={{ padding:"18px 20px 20px" }}>
                  <div className="H" style={{ fontSize:16,fontWeight:700,marginBottom:7 }}>{p.name}</div>
                  <p style={{ color:T.muted,fontSize:13,lineHeight:1.7,marginBottom:14 }}>{p.desc}</p>
                  <div style={{ display:"flex",flexWrap:"wrap",gap:5,marginBottom:15 }}>{p.tags.map(t=><span key={t} className="TAG">{t}</span>)}</div>
                  <div style={{ display:"flex",gap:8 }}>
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="PL PLG"><GithubIcon size={13} color={T.text}/> GitHub</a>
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="PL PLL"><ExternalIcon size={12} color="#fff"/> Live Demo</a>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CERTIFICATES */}
      <section id="Certificates" style={{ padding:"100px clamp(16px,5vw,80px)",background:T.bg }}>
        <FadeIn><span className="SL">Validated Expertise</span><h2 className="ST" style={{ marginBottom:46 }}>Certifi<span className="GT">cates</span></h2></FadeIn>
        <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:13,maxWidth:900 }}>
          {CERTS.map((c,i) => (
            <FadeIn key={i} delay={i*.06}>
              <div className="CARD" style={{ padding:"20px 22px",borderLeft:`3px solid ${c.color}` }}>
                <div style={{ display:"flex",alignItems:"center",gap:12,marginBottom:12 }}>
                  <div style={{ width:46,height:46,borderRadius:10,background:`${c.color}14`,display:"flex",alignItems:"center",justifyContent:"center",border:`1px solid ${c.color}2e`,flexShrink:0 }}>{c.logo}</div>
                  <div>
                    <div className="H" style={{ fontSize:13.5,fontWeight:600,lineHeight:1.35 }}>{c.name}</div>
                    <div className="M" style={{ fontSize:10.5,color:T.muted,marginTop:3,letterSpacing:"0.03em" }}>{c.org} · {c.year}</div>
                  </div>
                </div>
                <div style={{ height:3,borderRadius:2,background:`${c.color}18`,overflow:"hidden" }}><div style={{ height:"100%",width:"88%",borderRadius:2,background:`linear-gradient(to right,${c.color},${c.color}55)` }}/></div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section id="Education" style={{ padding:"100px clamp(16px,5vw,80px)",background:T.surf }}>
        <FadeIn><span className="SL">Academic Background</span><h2 className="ST" style={{ marginBottom:46 }}>Edu<span className="GT">cation</span></h2></FadeIn>
        <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))",gap:18,maxWidth:780 }}>
          {EDUCATION.map((e,i) => (
            <FadeIn key={i} delay={i*.1}>
              <div className="CARD GBX" style={{ padding:"28px",position:"relative",overflow:"hidden" }}>
                <div style={{ position:"absolute",top:-28,right:-28,width:96,height:96,borderRadius:"50%",background:`${T.acc}10` }}/>
                <div style={{ width:46,height:46,borderRadius:12,background:G,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:14 }}>
                  <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                </div>
                <div className="H" style={{ fontSize:17,fontWeight:700,marginBottom:5 }}>{e.degree}</div>
                <div style={{ color:T.accL,fontSize:13.5,marginBottom:3 }}>{e.school}</div>
                <div className="M" style={{ fontSize:11,color:T.muted,marginBottom:13,letterSpacing:"0.04em" }}>{e.period}</div>
                <div style={{ display:"inline-flex",alignItems:"center",gap:8,background:`${T.acc}16`,border:`1px solid ${T.acc}2e`,borderRadius:8,padding:"6px 14px" }}>
                  <span className="M" style={{ fontSize:10.5,color:T.muted }}>percentage</span>
                  <span className="H" style={{ fontSize:15,color:T.accL,fontWeight:700 }}>{e.percentage}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="Achievements" style={{ padding:"100px clamp(16px,5vw,80px)",background:T.bg }}>
        <FadeIn><span className="SL">Milestones</span><h2 className="ST" style={{ marginBottom:46 }}>Achieve<span className="GT">ments</span></h2></FadeIn>
        <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:13,maxWidth:980 }}>
          {ACHIEVEMENTS.map((a,i) => (
            <FadeIn key={i} delay={i*.06}>
              <div className="CARD" style={{ padding:"22px",display:"flex",gap:14,alignItems:"flex-start" }}>
                <div style={{ width:44,height:44,borderRadius:10,background:`${T.acc}12`,border:`1px solid ${T.border}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>{a.icon}</div>
                <div><div className="H" style={{ fontWeight:600,fontSize:14.5,marginBottom:5 }}>{a.title}</div><div style={{ color:T.muted,fontSize:13,lineHeight:1.65 }}>{a.desc}</div></div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* PLATFORMS */}
      <section id="Platforms" style={{ padding:"100px clamp(16px,5vw,80px)",background:T.surf }}>
        <FadeIn><div style={{ textAlign:"center",marginBottom:46 }}><span className="SL">Competitive Coding</span><h2 className="ST">Coding <span className="GT">Platforms</span></h2></div></FadeIn>
        <div className="PLGR" style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(255px,1fr))",gap:13,maxWidth:900,margin:"0 auto" }}>
          {PLATFORMS.map((p,i) => (
            <FadeIn key={i} delay={i*.06}>
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="PC">
                <div style={{ display:"flex",alignItems:"center",gap:12,marginBottom:14 }}>
                  <div style={{ width:46,height:46,borderRadius:10,background:`${p.color}16`,display:"flex",alignItems:"center",justifyContent:"center",border:`1px solid ${p.color}2e`,flexShrink:0 }}>{p.logo}</div>
                  <div>
                    <div className="H" style={{ fontWeight:700,fontSize:15,color:T.text }}>{p.name}</div>
                    <div className="M" style={{ fontSize:11,color:T.muted,letterSpacing:"0.03em" }}>{p.handle}</div>
                  </div>
                </div>
                <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-end" }}>
                  <div><div className="D" style={{ fontSize:26,fontWeight:800,color:p.color,lineHeight:1 }}>{p.solved}</div><div className="M" style={{ fontSize:10,color:T.muted,marginTop:3 }}>Problems / Contributions</div></div>
                  <div style={{ textAlign:"right" }}><div className="M" style={{ fontSize:10.5,color:T.muted }}>Rating</div><div className="H" style={{ fontSize:12,fontWeight:600,color:p.color,marginTop:2 }}>{p.rating}</div></div>
                </div>
                <div style={{ marginTop:13,height:3,borderRadius:2,background:`${p.color}18`,overflow:"hidden" }}><div style={{ height:"100%",width:`${48+(i*12)%45}%`,background:p.color,borderRadius:2 }}/></div>
              </a>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ARTICLES */}
      <section id="Articles" style={{ padding:"100px clamp(16px,5vw,80px)",background:T.bg }}>
        <FadeIn>
          <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:16,marginBottom:46 }}>
            <div><span className="SL">Writing &amp; Thoughts</span><h2 className="ST">Latest <span className="GT">Articles</span></h2></div>
            <a href="https://medium.com/@pandupuushotham" target="_blank" rel="noopener noreferrer" style={{ display:"flex",alignItems:"center",gap:6,color:T.accL,fontSize:13.5,fontWeight:500,textDecoration:"none",border:`1px solid ${T.acc}38`,borderRadius:8,padding:"8px 14px",transition:"all .2s",fontFamily:"'DM Sans',sans-serif" }}>
              View all <ExternalIcon size={12} color={T.accL}/>
            </a>
          </div>
        </FadeIn>
        <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:18,maxWidth:1100 }}>
          {ARTICLES.map((a,i) => (
            <FadeIn key={i} delay={i*.07}>
              <a href={a.url} target="_blank" rel="noopener noreferrer" className="AC">
                <div style={{ position:"relative",height:162,overflow:"hidden" }}>
                  <img src={a.cover} alt={a.title} style={{ width:"100%",height:162,objectFit:"cover",display:"block",transition:"transform .4s ease" }} onMouseEnter={e=>e.target.style.transform="scale(1.07)"} onMouseLeave={e=>e.target.style.transform="scale(1)"} onError={e=>{e.target.style.display="none"}}/>
                  <div style={{ position:"absolute",inset:0,background:`linear-gradient(to top,${T.card} 0%,transparent 55%)` }}/>
                  <div style={{ position:"absolute",top:11,left:11,background:"rgba(0,0,0,.58)",backdropFilter:"blur(8px)",borderRadius:8,padding:"5px 10px",display:"flex",alignItems:"center",gap:6 }}>
                    {a.platform==="medium" ? <MediumIcon size={14} color="white"/> : <DevToIcon size={14} color="white"/>}
                    <span className="M" style={{ fontSize:9.5,color:"white",letterSpacing:"0.06em" }}>{a.platform==="medium"?"Medium":"Dev.to"}</span>
                  </div>
                </div>
                <div style={{ padding:"17px 19px 21px" }}>
                  <div style={{ display:"flex",gap:5,flexWrap:"wrap",marginBottom:10 }}>{a.tags.map(t=><span key={t} className="TAG">{t}</span>)}</div>
                  <div className="H" style={{ fontSize:15,fontWeight:700,lineHeight:1.4,marginBottom:8,color:T.text }}>{a.title}</div>
                  <p style={{ color:T.muted,fontSize:12.5,lineHeight:1.68,marginBottom:14 }}>{a.summary}</p>
                  <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center" }}>
                    <div className="M" style={{ fontSize:10.5,color:T.muted,letterSpacing:"0.04em" }}>{a.date}</div>
                    <div className="M" style={{ fontSize:10.5,color:T.accL,letterSpacing:"0.04em" }}>{a.readTime}</div>
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="Contact" style={{ padding:"100px clamp(16px,5vw,80px)",background:T.surf,position:"relative",overflow:"hidden" }}>
          <div style={{ position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:700,height:700,borderRadius:"50%",background:`radial-gradient(circle,${T.acc}0c,transparent 60%)`,pointerEvents:"none" }}/>
          <FadeIn>
            <div style={{ maxWidth:700,margin:"0 auto",position:"relative",zIndex:2 }}>
              <div style={{ textAlign:"center",marginBottom:46 }}>
                <span className="SL">Let's collaborate</span>
                <h2 className="ST" style={{ marginBottom:13 }}>Get In <span className="GT">Touch</span></h2>
                <p style={{ color:T.muted,fontSize:15,lineHeight:1.78 }}>Open to full-time roles, freelance projects, and exciting collaborations. Let's build something incredible together.</p>
              </div>
              <form action="https://formspree.io/f/xjgaaked" method="POST" className="GBX" style={{ background:T.card,border:`1px solid ${T.border}`,borderRadius:22,padding:"34px" }}>
                <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:13,marginBottom:13 }}>
                  <input name="name" placeholder="Your Name"/>
                  <input name="email" placeholder="Your Email" type="email"/>
                </div>
                <div style={{ marginBottom:13 }}>
                  <input name="subject" placeholder="Subject"/>
                </div>
                <textarea name="message" placeholder="Your message..." rows={4} style={{ marginBottom:18,resize:"vertical" }}/>
                <button type="submit" className="BPR" style={{ width:"100%",padding:"14px",fontSize:15,display:"flex",alignItems:"center",justifyContent:"center",gap:8 }}>
                  <MailIcon size={16} color="#fff"/> Send Message
                </button>
              </form>
            {/* Social links — real SVG logos */}
            <div style={{ display:"flex",justifyContent:"center",gap:10,marginTop:30,flexWrap:"wrap" }}>
              {[
                { label:"GitHub",    icon:<GithubIcon size={16} color="currentColor"/>,   color:"#8B5CF6", url:"https://github.com/jvpurushotham" },
                { label:"LinkedIn",  icon:<LinkedInIcon size={16} color="currentColor"/>, color:"#0077b5", url:"https://www.linkedin.com/in/jvpurushotham/" },
                { label:"Twitter",   icon:<TwitterXIcon size={16} color="currentColor"/>, color:"#1da1f2", url:"https://x.com/Purushothamjv" },
                { label:"Email",     icon:<MailIcon size={16} color="currentColor"/>,     color:T.accL,    url:"mailto:jvpurushotham31@gmail.com" },
                { label:"Resume",    icon:<ResumeIcon size={16} color="currentColor"/>,   color:"#22c55e", url:"#Resume" },
              ].map(({ label, icon, color, url }) => (
                <a key={label} href={url} style={{ display:"flex",alignItems:"center",gap:7,background:T.card,border:`1.5px solid ${T.border}`,borderRadius:10,padding:"9px 15px",color:T.muted,fontSize:13,fontWeight:500,fontFamily:"'DM Sans',sans-serif",textDecoration:"none",transition:"all .2s" }}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor=color;e.currentTarget.style.color=color;}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor=T.border;e.currentTarget.style.color=T.muted;}}>
                  {icon} {label}
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* FOOTER */}
      <footer style={{ background:T.bg,borderTop:`1px solid ${T.border}`,padding:"22px clamp(16px,5vw,80px)",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12 }}>
        <div className="D" style={{ fontWeight:900,letterSpacing:"-0.04em",fontSize:17 }}>
          <span className="GT">{"<"}</span><span>J V Purushotham</span><span className="GT">{"/>"}</span>
        </div>
        <div className="M" style={{ fontSize:11,color:T.muted,letterSpacing:"0.05em" }}>Crafted with precision · {new Date().getFullYear()}</div>
        <button onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} style={{ background:`${T.acc}16`,border:`1px solid ${T.acc}2e`,color:T.accL,borderRadius:8,padding:"7px 16px",cursor:"pointer",fontSize:13,fontFamily:"'DM Sans',sans-serif",display:"flex",alignItems:"center",gap:5 }}>
          <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="18 15 12 9 6 15"/></svg> Top
        </button>
      </footer>
    </div>
  );
}
