import React from "react";
import "./dashboard.css";
import profilePic from "../assets/profile.jpg";
import { Link, useLocation } from "react-router-dom";

// Fake dataset data
const datasets = [
  { title: "Budget of Department", updated: "Jun 29, 2025", columns: 6 },
  { title: "Marketing Performance", updated: "Jun 29, 2025", columns: 7 },
  {
    title: "The placements status - in campus or off campus",
    updated: "May 01, 2025",
    columns: 7,
  },
  { title: "Livestock Census - Rural", updated: "Mar 21, 2025", columns: 14 },
  { title: "Livestock Census - Urban", updated: "Mar 21, 2025", columns: 13 },
  { title: "Apprenticeship Program", updated: "Mar 01, 2023", columns: 8 },
  { title: "Craftsmen Training Scheme", updated: "Mar 01, 2023", columns: 8 },
  {
    title: "Schools with Library facility by school category",
    updated: "May 07, 2025",
    columns: 15,
  },
  {
    title: "Schools with librarian by school category",
    updated: "May 07, 2025",
    columns: 10,
  },
  {
    title: "Schools with playground facility by school category",
    updated: "May 07, 2025",
    columns: 15,
  },
];

export default function Dashboard({ onLogout }) {
  const location = useLocation();
  // Fallback to empty if onLogout is not passed:
  const safeLogout = onLogout || (() => {});

  return (
    <div className="dash-root">
      <aside className="dash-sidebar">
        <div className="profile-box">
          <div className="profile-img-wrapper">
            <img src={profilePic} alt="Profile" className="profile-img" />
          </div>
          <div className="profile-name">SAJAL</div>
          <div className="profile-mail">sajaldharm7f8@gmail.com</div>
        </div>

        <nav className="sidebar-nav">
          <Link className={location.pathname === "/" ? "active" : ""} to="/">
            <span className="icon">&#8962;</span> Home
          </Link>
          <a href="#">
            <span className="icon">&#9733;</span> Bookmarks
          </a>
          <a href="#">
            <span className="icon">&#128276;</span> Subscriptions
          </a>
          <Link
            className={location.pathname === "/codespace" ? "active" : ""}
            to="/codespace"
          >
            <span className="icon">&#60;&#47;&#62;</span> Code
          </Link>
          <a href="#">
            <span className="icon">&#8681;</span> Downloads
          </a>
          <a href="#">
            <span className="icon">&#128196;</span> Data catalogue
          </a>
        </nav>
        <button className="logout-btn" onClick={safeLogout}>
          <span className="icon">&#8592;</span> LOG OUT
        </button>
      </aside>
      <main className="dash-main">
        <header className="dash-header">
          <h1>WELCOME SAJAL !</h1>
          <div className="search-notify-row">
            <div className="search-box">
              <input type="text" placeholder="Search" />
              <span className="search-icon">&#128269;</span>
            </div>
            <span className="notification-bell">&#128276;</span>
          </div>
        </header>

        <div className="cards-row">
          <div className="info-card">
            <div className="big">134</div>Datasets
            <br />
            seen
          </div>
          <div className="info-card">
            <div className="big">95</div>Datasets
            <br />
            download
          </div>
          <div className="info-card">
            <div className="big">134</div>Datasets
            <br />
            bookmarked
          </div>
          <div className="info-card">
            <div className="big">19</div>Ministries
            <br />
            visited
          </div>
          <div className="info-card">
            <div className="big">13</div>Notebooks
          </div>
        </div>
        <div className="overview-title">OVERVIEW</div>
        <section className="overview-grid">
          <div className="overview-card progress-card">
            <div className="ov-title">Notebook progress</div>
            <div className="circle-progress">
              <svg width="120" height="120" viewBox="0 0 120 120">
                <circle
                  cx="60"
                  cy="60"
                  r="47"
                  fill="none"
                  stroke="#e2d1f8"
                  strokeWidth="19"
                />
                {/* Completed (55.4%) */}
                <circle
                  cx="60"
                  cy="60"
                  r="47"
                  fill="none"
                  stroke="#8166bc"
                  strokeWidth="19"
                  strokeDasharray={`${2 * Math.PI * 47 * 0.554} ${
                    2 * Math.PI * 47 * (1 - 0.554)
                  }`}
                  strokeDashoffset={2 * Math.PI * 47 * 0.095}
                  strokeLinecap="round"
                  style={{
                    transform: "rotate(-90deg)",
                    transformOrigin: "50% 50%",
                  }}
                />
                {/* In progress (31.1%) */}
                <circle
                  cx="60"
                  cy="60"
                  r="47"
                  fill="none"
                  stroke="#bfaee0"
                  strokeWidth="19"
                  strokeDasharray={`${2 * Math.PI * 47 * 0.311} ${
                    2 * Math.PI * 47 * (1 - 0.311)
                  }`}
                  strokeDashoffset={2 * Math.PI * 47 * (0.554 + 0.095)}
                  strokeLinecap="round"
                  style={{
                    transform: "rotate(-90deg)",
                    transformOrigin: "50% 50%",
                  }}
                />
                {/* Shared (13.5%) */}
                <circle
                  cx="60"
                  cy="60"
                  r="47"
                  fill="none"
                  stroke="#8B80A9"
                  strokeWidth="19"
                  strokeDasharray={`${2 * Math.PI * 47 * 0.135} ${
                    2 * Math.PI * 47 * (1 - 0.135)
                  }`}
                  strokeDashoffset={
                    2 * Math.PI * 47 * (0.554 + 0.311 + 0.095)
                  }
                  strokeLinecap="round"
                  style={{
                    transform: "rotate(-90deg)",
                    transformOrigin: "50% 50%",
                  }}
                />
              </svg>
              <div className="cp-legend">
                <div>
                  <span className="dot c1"></span>Completed 55.4%
                </div>
                <div>
                  <span className="dot c2"></span>In progress 31.1%
                </div>
                <div>
                  <span className="dot c3"></span>Shared 13.5%
                </div>
              </div>
            </div>
          </div>
          <div className="overview-card badge-card">
            <div className="ov-title">Badges</div>
            <div className="badges-list">
              <span className="badge b1" />
              <span className="badge b2" />
              <span className="badge b3" />
              <span className="badge b4" />
              <span className="badge b5" />
              <span className="badge b6" />
            </div>
          </div>
          <div className="overview-card data-card">
            <div className="ov-title">Top 10 Data sets visited</div>
            <ol className="dataset-list">
              {datasets.map((item, i) => (
                <li key={i}>
                  <div className="ds-title">
                    <span className="ds-dot" />
                    <b>{item.title}</b>
                  </div>
                  <div className="ds-meta">
                    Date Updated on {item.updated} &bull; {item.columns} Columns
                    &bull; NDAP
                  </div>
                </li>
              ))}
            </ol>
            <div className="more-link">
              <a href="#">see 65 more datasets &gt;</a>
            </div>
          </div>
          <div className="overview-card chart-card">
            <div className="ov-title">Monthly datasets view/downloads</div>
            <div className="chart-info">
              <div>
                Data Range
                <button>April</button>
                <button>August</button>
              </div>
              <div className="chart-legend">
                <span className="cv-dot" />
                &nbsp;Datasets viewed <span className="cd-dot" />
                &nbsp;Datasets download
              </div>
            </div>
            <svg
              width="99%"
              height="130"
              viewBox="0 0 390 100"
              className="chart-svg"
            >
              <polyline
                fill="none"
                stroke="#6e52b2"
                strokeWidth="3"
                points="0,65 80,30 160,40 240,12 320,77 390,22"
              />
              <polyline
                fill="none"
                stroke="#bda2db"
                strokeWidth="3"
                points="0,89 80,63 160,73 240,31 320,81 390,60"
              />
              <text x="0" y="98" fontSize="15">
                April
              </text>
              <text x="80" y="98" fontSize="15">
                May
              </text>
              <text x="160" y="98" fontSize="15">
                June
              </text>
              <text x="240" y="98" fontSize="15">
                July
              </text>
              <text x="320" y="98" fontSize="15">
                August
              </text>
            </svg>
            <div className="chart-stats">
              <span>
                No. of visits <b>89</b>
              </span>
              <span>
                Visit percentage <b>84%</b>
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
