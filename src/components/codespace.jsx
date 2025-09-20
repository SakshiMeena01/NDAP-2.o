import React from "react";
import "./codespace.css";
import { Link, useLocation } from "react-router-dom";

// Sidebar navigation links
const navLinks = [
  { icon: "🏠", label: "Dashboard", path: "/" },
  { icon: "🔖", label: "Bookmarks" },
  { icon: "📰", label: "Subscriptions" },
  { icon: "💻", label: "Code", path: "/codespace" },
  { icon: "⬇️", label: "Downloads" },
  { icon: "📄", label: "Data catalogue" },
];

// Dummy data for contribution/projects
const contributions = [
  {
    title: "Wep project",
    desc: "The WEP mobile app is a digital platform designed to empower women entrepreneurs by offering mentorship, community support, access to schemes, events, incubators, and other WEP offerings.",
  },
  {
    title: "ML project",
    desc: "Mobile-first design ensures reach to grassroots and under-connected users.",
  },
  {
    title: "AI project",
    desc: "The AI engine aims to personalize user experience by recommending schemes, datasets, events, and resources based on user profile, region, and sector.",
  },
];

export default function Codespace({ onLogout }) {
  const location = useLocation();
  const safeLogout = onLogout || (() => {}); // fallback if not passed

  return (
    <div className="codespace-root">
      {/* Sidebar */}
      <aside className="codespace-sidebar">
        {/* Profile Section */}
        <div className="profile-box">
          <div className="profile-img-wrapper">
            <img src="/profile.jpg" alt="Profile" className="profile-img" />
          </div>
          <div className="profile-name">SAJAL</div>
          <div className="profile-mail">sajaldharm7f8@gmail.com</div>
        </div>

        {/* Sidebar navigation links */}
        <nav className="sidebar-nav">
          {navLinks.map((link) =>
            link.path ? (
              <Link
                key={link.label}
                to={link.path}
                className={location.pathname === link.path ? "active" : ""}
              >
                <span className="icon">{link.icon}</span> {link.label}
              </Link>
            ) : (
              <a key={link.label} href="#" className="inactive-link">
                <span className="icon">{link.icon}</span> {link.label}
              </a>
            )
          )}
        </nav>

        {/* Log Out Button */}
        <button className="logout-btn" onClick={safeLogout}>
          <span className="icon">&#8592;</span> LOG OUT
        </button>
      </aside>

      {/* Main Content Area */}
      <main className="codespace-main">
        <header className="codespace-header">
          <div>
            <h1>
              Your NDAP
              <br />
              <span className="subhead">Code Workspace</span>
            </h1>
            <p className="subtitle">
              Manage, Run &amp; Share Your Analytics Notebooks.
            </p>
          </div>
          <div className="icons">
            <span className="gear">&#9881;</span>
            <span className="bell">&#128276;</span>
          </div>
        </header>

        {/* Top Tab Bar */}
        <div className="tabbar">
          <button className="tab all active">
            <span className="tab-ico">&#9679;</span> All
          </button>
          <button className="tab collections">
            <span className="tab-ico">&#128193;</span> Collections
          </button>
          <button className="tab code">
            <span className="tab-ico">&#128187;</span> Code
          </button>
          <button className="tab models">
            <span className="tab-ico">&#129302;</span> Models
          </button>
          <button className="tab discussions">
            <span className="tab-ico">&#128172;</span> Discussions
          </button>
        </div>

        {/* Main "All your work" */}
        <section className="codespace-workspace">
          {/* Search and filters */}
          <div className="workspace-filters">
            <input
              type="text"
              className="workspace-search"
              placeholder="Search"
            />
            <div className="workspace-filter-row">
              <button>All Filters</button>
              <button>Tags</button>
              <button>Type</button>
              <button>Owner</button>
              <button>Privacy</button>
              <button>Groups</button>
              <span
                style={{
                  marginLeft: "auto",
                  fontSize: "0.96em",
                  color: "#7d70b6",
                }}
              >
                Recently Updated &#9660;
              </span>
            </div>
          </div>

          {/* Notebook list */}
          <div className="workspace-list">
            <div className="notebook-row">
              <input type="checkbox" />
              <img
                src="/profile.jpg"
                alt="notebook profile"
                className="notebook-icon"
              />
              <div className="notebook-details">
                <div className="notebook-title">notebook9f796b38e6</div>
                <div className="notebook-subtitle">
                  Notebook • Updated 2 hours ago
                  <br />
                  <span className="notebook-private">Private</span> • 0 comments
                </div>
              </div>
              <div className="notebook-status">
                <span>draft</span>
                <span className="notebook-comments">0</span>
              </div>
            </div>
          </div>

          {/* Create new notebook */}
          <div className="create-notebook-row">
            <button className="create-notebook-btn">+</button>
            <span>Create new notebook</span>
          </div>

          {/* Contribution/Activity Section as grid on large, stacked on small screens */}
          <div className="codespace-bottom-row">
            {/* Contribution panel */}
            <section className="contribution-card">
              <h2>Contribution</h2>
              <div className="contribution-timeline">
                {contributions.map((con, idx) => (
                  <div className="con-item" key={con.title}>
                    <div className="con-step">
                      <div
                        className="con-dot"
                        style={{ background: idx === 0 ? "#7e66c1" : "#bbb" }}
                      ></div>
                      {idx < contributions.length - 1 && <div className="con-line" />}
                    </div>
                    <div>
                      <div className="con-title">{con.title}</div>
                      <div className="con-desc">{con.desc}</div>
                    </div>
                    <button className="con-nav">{">"}</button>
                  </div>
                ))}
              </div>
            </section>
            {/* Activity Chart Panel */}
            <section className="activity-card">
              <h2>Activity</h2>
              <div className="activity-filter">
                <span>Data Range</span>
                <button>june</button>
                <button>october</button>
              </div>
              <div className="bar-chart">
                <div className="bar-group">
                  <div className="bar" style={{ height: "35%" }}></div>
                  <div className="label">june</div>
                </div>
                <div className="bar-group">
                  <div className="bar ml" style={{ height: "55%" }}></div>
                  <div className="label">july</div>
                </div>
                <div className="bar-group">
                  <div className="bar ai" style={{ height: "75%" }}></div>
                  <div className="label">august</div>
                </div>
                <div className="bar-group">
                  <div className="bar ai" style={{ height: "70%" }}></div>
                  <div className="label">september</div>
                </div>
                <div className="bar-group">
                  <div className="bar" style={{ height: "25%" }}></div>
                  <div className="label">october</div>
                </div>
              </div>
              <div className="bar-legend">
                <div>
                  <span className="legend-dot" style={{ background: "#d7d3e0" }}></span> project retags
                </div>
                <div>
                  <span className="legend-dot" style={{ background: "#8371c3" }}></span> ml work
                </div>
                <div>
                  <span className="legend-dot" style={{ background: "#bfaee0" }}></span> ai work
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}
