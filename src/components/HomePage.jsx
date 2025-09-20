import React from "react";
import "./HomePage.css";
import "./dashboard";
import { useNavigate } from 'react-router-dom'; 

// Top NDAP Navigation Bar (Header)
const TopHeader = () => {
  const navigate = useNavigate(); // Use hook inside component

  return (
    <nav className="top-header">
      <div className="header-left">
        <img src="/niti_img.png" className="niti-logo" alt="NITI Logo" />
        <img src="/ndap.png" className="ndap-logo" alt="NDAP Logo" />
      </div>
      <ul className="header-nav">
        <li>Newsletter</li>
        <li>Data Catalogue</li>
        <li>Screen Reader</li>
        <li>English</li>
        <li className="font-size-menu">
          <button>A^</button>
          <button>A</button>
          <button>A↓</button>
        </li>
        <li>Help</li>
        <li>
          <img
            src="https://img.icons8.com/?size=100&id=c8SsrDOfQgn3&format=png&color=000000"
            alt="Profile"
            className="profile-icon"
            style={{ background: "#8250df", borderRadius: "4px", padding: "7px", height: "32px", width: "32px", cursor: "pointer" }}
            onClick={() => navigate("/dashboard")}
          />
        </li>
      </ul>
    </nav>
  );
};

const HomePage = () => {
  const navigate = useNavigate();

  const handleChatClick = () => {
    navigate('/chatbot');
  };
  return (
    <div className="homepage">
      <TopHeader />
      <div className="floating-side-buttons">
        <button className="feedback-btn">Feedback</button>
        <button onClick={handleChatClick}>
          <span className="ai-avatar" role="img" aria-label="bot">🤖</span>Let’s Chat with AI
        </button>
      </div>

      {/* Header */}
      <header className="header">
        <div className="header-content">
          <h1>Explore India’s Public Data</h1>
          <p>
            The National Data & Analytics Platform brings together and makes India’s public datasets accessible at one place.
          </p>
          <div className="search-bar">
            <input type="text" placeholder="Search for datasets" />
          </div>
        </div>
      </header>

      {/* Stats bar */}
      <div className="stats-bar">
        <div>
          <img
            src="https://img.icons8.com/?size=100&id=KZHjwwenS7oK&format=png&color=000000"
            alt="Datasets Icon"
            className="stats-icon-img"
          />
          <span className="stats-count">6096</span>
          <p>Datasets</p>
        </div>
        <div>
          <img
            src="https://img.icons8.com/?size=100&id=VHI9yoKao9K6&format=png&color=000000"
            alt="Sectors Icon"
            className="stats-icon-img"
          />
          <span className="stats-count">31</span>
          <p>Sectors</p>
        </div>
        <div>
          <img
            src="https://img.icons8.com/?size=100&id=SD7z9lASurXH&format=png&color=000000"
            alt="Ministries Icon"
            className="stats-icon-img"
          />
          <span className="stats-count">53</span>
          <p>Ministries</p>
        </div>
      </div>

      {/* Datasets by Sectors */}
      <section className="section-sector">
        <h2>Datasets by Sectors</h2>
        <div className="sector-cards">
          <div className="sector-card">
            <li style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span className="header-title">DatasetName</span>
              <span className="header-num">Dataset no.</span>
            </li>
            <ul>
              <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>
                  <img
                    src="https://img.icons8.com/?size=100&id=18053&format=png&color=000000"
                    alt="Datasets Icon"
                    className="stats-icon-img"
                  />
                </span>
                <span>
                  <a href="https://ndap.niti.gov.in/catalogue?sectors=22&search=Variables%2CDatasetInfo&query=*&domain=ndap" target="_blank" rel="noopener noreferrer" className="section-ministry-link">
                    Agriculture and Cooperation
                  </a>
                </span>
                <span>27</span>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>
                  <img
                    src="https://img.icons8.com/?size=100&id=12198&format=png&color=000000"
                    alt="Datasets Icon"
                    className="stats-icon-img"
                  />
                </span>
                <span>
                  <a href="https://ndap.niti.gov.in/catalogue?sectors=6&search=Variables%2CDatasetInfo&query=*&domain=ndap" target="_blank" rel="noopener noreferrer" className="section-ministry-link">
                    Energy and Power
                  </a>
                </span>
                <span>42</span>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>
                  <img
                    src="https://img.icons8.com/?size=100&id=zawchKWIuGY8&format=png&color=000000"
                    alt="Datasets Icon"
                    className="stats-icon-img"
                  />
                </span>
                <span>
                  <a href="https://ndap.niti.gov.in/catalogue?sectors=8&search=Variables%2CDatasetInfo&query=*&domain=ndap" target="_blank" rel="noopener noreferrer" className="section-ministry-link">
                    Science and Technology 
                  </a>
                </span>
                <span>15</span>
              </li>
            </ul>
          </div>
          <div className="sector-card">
            <li style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span className="header-title">DatasetName</span>
              <span className="header-num">Dataset no.</span>
            </li>
            <ul>
              <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>
                  <img
                    src="https://img.icons8.com/?size=100&id=75944&format=png&color=000000"
                    alt="Datasets Icon"
                    className="stats-icon-img"
                  />
                </span>
                <span>
                  <a href="https://ndap.niti.gov.in/catalogue?sectors=28&search=Variables%2CDatasetInfo&query=*&domain=ndap" target="_blank" rel="noopener noreferrer" className="section-ministry-link">
                    Coal and Mine 
                  </a>
                </span>
                <span>18</span>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>
                  <img
                    src="https://img.icons8.com/?size=100&id=TJuNiRdsJniB&format=png&color=000000"
                    alt="Datasets Icon"
                    className="stats-icon-img"
                  />
                </span>
                <span>
                  <a href="https://ndap.niti.gov.in/catalogue?sectors=1&search=Variables%2CDatasetInfo&query=*&domain=ndap" target="_blank" rel="noopener noreferrer" className="section-ministry-link">
                    Animal Husbandary and Fishing 
                  </a>
                </span>
                <span>17</span>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>
                  <img
                    src="https://img.icons8.com/?size=100&id=13182&format=png&color=000000"
                    alt="Datasets Icon"
                    className="stats-icon-img"
                  />
                </span>
                <span>
                  <a href="https://ndap.niti.gov.in/catalogue?sectors=19&search=Variables%2CDatasetInfo&query=*&domain=ndap" target="_blank" rel="noopener noreferrer" className="section-ministry-link">
                    law and Justice
                  </a>
                </span>
                <span>22</span>
              </li>
            </ul>
          </div>
          <div className="sector-card">
            <li style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span className="header-title">DatasetName</span>
              <span className="header-num">Dataset no.</span>
            </li>
            <ul>
              <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>
                  <img
                    src="https://img.icons8.com/?size=100&id=13795&format=png&color=000000"
                    alt="Datasets Icon"
                    className="stats-icon-img"
                  />
                </span>
                <span>
                  <a href="https://ndap.niti.gov.in/catalogue?sectors=10&search=Variables%2CDatasetInfo&query=*&domain=ndap" target="_blank" rel="noopener noreferrer" className="section-ministry-link">
                    Tourism
                  </a>
                </span>
                <span>27</span>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>
                  <img
                    src="https://img.icons8.com/?size=100&id=33752&format=png&color=000000"
                    alt="Datasets Icon"
                    className="stats-icon-img"
                  />
                </span>
                <span>
                  <a href="https://ndap.niti.gov.in/catalogue?sectors=7&search=Variables%2CDatasetInfo&query=*&domain=ndap" target="_blank" rel="noopener noreferrer" className="section-ministry-link">
                    Transport and Infrastructure 
                  </a>
                </span>
                <span>37</span>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>
                  <img
                    src="https://img.icons8.com/?size=100&id=TncYtqGB4Mi6&format=png&color=000000"
                    alt="Datasets Icon"
                    className="stats-icon-img"
                  />
                </span>
                <span>
                  <a href="https://ndap.niti.gov.in/catalogue?sectors=4&search=Variables%2CDatasetInfo&query=*&domain=ndap" target="_blank" rel="noopener noreferrer" className="section-ministry-link">
                    Health and Family Welfare 
                  </a>
                </span>
                <span>55</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Datasets by Ministries */}
      <section className="section-ministry">
        <h2>Datasets by Ministries</h2>
        <div className="ministry-boxes">
          <div className="ministry-box">
            <ul>
              <li>
                <a 
                  href="https://ndap.niti.gov.in/catalogue?ministries=m5&search=Variables%2CDatasetInfo&query=*&domain=ndap" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="section-ministry-link"
                >
                  AYUSH
                </a>
              </li>
              <li>
                <a 
                  href="https://ndap.niti.gov.in/catalogue?ministries=m46&search=Variables%2CDatasetInfo&query=*&domain=ndap" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="section-ministry-link"
                >
                  Agriculture and Farmers Welfare
                </a>
              </li>
              <li>
                <a 
                  href="https://ndap.niti.gov.in/catalogue?ministries=m8&search=Variables%2CDatasetInfo&query=*&domain=ndap" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="section-ministry-link"
                >
                  Chemicals and Fertilizers
                </a>
              </li>
              <li>
                <a 
                  href="https://ndap.niti.gov.in/catalogue?ministries=m92&search=Variables%2CDatasetInfo&query=*&domain=ndap" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="section-ministry-link"
                >
                  Defence
                </a>
              </li>
              <li>
                <a 
                  href="https://ndap.niti.gov.in/catalogue?ministries=m149&search=Variables%2CDatasetInfo&query=*&domain=ndap" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="section-ministry-link"
                >
                  Cooperation
                </a>
              </li>
              <li>
                <a 
                  href="https://ndap.niti.gov.in/catalogue?ministries=m149&search=Variables%2CDatasetInfo&query=*&domain=ndap" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="section-ministry-link"
                >
                  Corporate Affairs
                </a>
              </li>
            </ul>
          </div>
          <div className="ministry-box">
            <ul>
              <li>
                <a 
                  href="https://ndap.niti.gov.in/catalogue?ministries=m140&search=Variables%2CDatasetInfo&query=*&domain=ndap" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="section-ministry-link"
                >
                  Agricultural and Processed Food Products Export Development Authority (APEDA)
                </a>
              </li>
              <li>
                <a 
                  href="https://ndap.niti.gov.in/catalogue?ministries=m99&search=Variables%2CDatasetInfo&query=*&domain=ndap" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="section-ministry-link"
                >
                  Animal Husbandry
                </a>
              </li>
              <li>
                <a 
                  href="https://ndap.niti.gov.in/catalogue?ministries=m11&search=Variables%2CDatasetInfo&query=*&domain=ndap" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="section-ministry-link"
                >
                  Ministry of Consumer Affairs
                </a>
              </li>
              <li>
                <a 
                  href="https://ndap.niti.gov.in/catalogue?ministries=m140&search=Variables%2CDatasetInfo&query=*&domain=ndap" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="section-ministry-link"
                >
                  Commerce and Industry
                </a>
              </li>
              <li>
                <a 
                  href="https://ndap.niti.gov.in/catalogue?ministries=m140&search=Variables%2CDatasetInfo&query=*&domain=ndap" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="section-ministry-link"
                >
                  Ministry of Food and Public Distribution
                </a>
              </li>
              <li>
                <a 
                  href="https://ndap.niti.gov.in/catalogue?ministries=m29&search=Variables%2CDatasetInfo&query=*&domain=ndap" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="section-ministry-link"
                >
                  Culture
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How does it work? */}
      <section className="section-how">
        <h2>How does NDAP work?</h2>
        <div className="how-steps">
          <div>
            <span role="img" aria-label="step1">🔍</span>
            <p>Discover</p>
            <span className="subtext">Search across 1000s of datasets published by the Indian government</span>
          </div>
          <div>
            <span role="img" aria-label="step1">❓</span>
            <p>Query</p>
            <span className="subtext">Find the right information in any dataset through advanced filters</span>
          </div>
          <div>
            <span role="img" aria-label="step2">📥</span>
            <p>Merge</p>
            <span className="subtext">Combine multiple datasets with ease in a few clicks</span>
          </div>
          <div>
            <span role="img" aria-label="step3">📊</span>
            <p>Visualise</p>
            <span className="subtext">Summarise key indicators and analyse trends on the go</span>
          </div>
        </div>
      </section>

      {/* Help/Guide graphics section */}
      <section className="section-guide">
        <div className="guide-graphic">
          <img src="/ss.png" alt="guide-graphic" className="section-guide-logo" />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-left">
          <img src="/ndap.png" className="ndap-logo" alt="NDAP Logo" />
        </div>
        <div className="footer-links">
          <div>
            <a href="#">About Ndap</a>
            <a href="#">Sitemap</a>
            <a href="#">Terms & Conditions</a>
          </div>
          <div>
            <a href="#">Accessibility Document</a>
            <a href="#">Standardized Document Policy</a>
          </div>
          <div>
            <a href="#">Sample Use Cases</a>
            <a href="#">News & Community updates</a>
            <a href="#">Research Papers</a>
          </div>
        </div>
        <div className="footer-contact">
          <p>
            <strong>Contact Us:</strong> adviserdma-niti[at]gov[dot]in
          </p>
        </div>
        <div className="social-icons">
          <a href="https://x.com/NITIAayog" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            {/* Twitter SVG */}
            <svg viewBox="0 0 32 32"><path d="M32 6.076a13.14 13.14 0 0 1-3.769 1.031A6.601 6.601 0 0 0 31.112 4.3a13.158 13.158 0 0 1-4.169 1.595 6.573 6.573 0 0 0-11.19 5.993A18.652 18.652 0 0 1 2.229 4.808a6.565 6.565 0 0 0 2.031 8.755A6.533 6.533 0 0 1 1.28 12.15v.083a6.573 6.573 0 0 0 5.271 6.437 6.573 6.573 0 0 1-2.894.11 6.574 6.574 0 0 0 6.13 4.565A13.188 13.188 0 0 1 0 28.042a18.597 18.597 0 0 0 10.064 2.948c12.072 0 18.676-10.003 18.676-18.676 0-.284-.006-.568-.02-.851A13.348 13.348 0 0 0 32 6.076z"/></svg>
          </a>
          <a href="https://www.youtube.com/@NITIAayogOfficial" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            {/* YouTube SVG */}
            <svg viewBox="0 0 32 32"><path d="M31.67 9.29c-.37-1.39-1.46-2.48-2.85-2.85C26.09 6 16 6 16 6s-10.09 0-12.82.44c-1.39.37-2.48 1.46-2.85 2.85C0 12.09 0 16 0 16s0 3.91.33 6.71c.37 1.39 1.46 2.48 2.85 2.85C5.91 26 16 26 16 26s10.09 0 12.82-.44c1.39-.37 2.48-1.46 2.85-2.85C32 19.91 32 16 32 16s0-3.91-.33-6.71zM12.8 20.62V11.38l8.53 4.62-8.53 4.62z"/></svg>
          </a>
          <a href="https://www.linkedin.com/company/nitiaayog/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            {/* LinkedIn SVG */}
            <svg viewBox="0 0 32 32"><path d="M29.63 0H2.37A2.37 2.37 0 0 0 0 2.37v27.26A2.37 2.37 0 0 0 2.37 32h27.26A2.37 2.37 0 0 0 32 29.63V2.37A2.37 2.37 0 0 0 29.63 0zM9.45 27.32H4.74V12h4.71v15.32zM7.1 9.9a2.73 2.73 0 1 1 0-5.46 2.73 2.73 0 0 1 0 5.46zm20.22 17.42h-4.71v-7.45c0-1.78-.03-4.07-2.48-4.07-2.48 0-2.86 1.94-2.86 3.94v7.58h-4.71V12h4.52v2.09h.06c.63-1.19 2.17-2.45 4.47-2.45 4.78 0 5.66 3.15 5.66 7.25v8.43z"/></svg>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
