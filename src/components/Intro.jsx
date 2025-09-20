import React from "react";
import "./Intro.css";

const features = [
  {
    
    icon: <img 
            src="https://img.icons8.com/?size=100&id=BbOrULnLJvkY&format=png&color=000000" 
            alt="Dataset Explorer" 
            className="feature-icon" 
          />,
    title: "Dataset Explorer",
    desc: "Search and access thousands of curated government datasets across diverse sectors with powerful filters and tools.",
  },
  {
    icon: <img 
            src="https://img.icons8.com/?size=100&id=ZanCPmBvVqx2&format=png&color=000000" 
            alt="Dataset Explorer" 
            className="feature-icon" 
          />,
  title: "Merge Datasets",
  desc: "Combine multiple datasets into one unified view, making it easier to analyze and discover connections across sectors.",
},
  {
    icon: <img 
            src="https://img.icons8.com/?size=100&id=60004&format=png&color=000000" 
            alt="Dataset Explorer" 
            className="feature-icon" 
          />,
  title: "Data Visualizations",
  desc: "Explore datasets through interactive heatmaps, bar charts, and other visualization tools that make insights easy to understand and compare.",
},
  
  {
    icon: <img 
            src="https://img.icons8.com/?size=100&id=dmZwIe9ziSTf&format=png&color=000000" 
            alt="Dataset Explorer" 
            className="feature-icon" 
          />,
    title: "AI Chatbot",
    desc: "Leverage AI-assisted tools to discover and navigate thousands of government datasets with personalized recommendations.",
  },
  {
    icon: <img 
            src="https://img.icons8.com/?size=100&id=nvaD4Mdq6G3l&format=png&color=000000" 
            alt="Dataset Explorer" 
            className="feature-icon" 
          />,
    title: "Personalised Dashboard",
  desc: "Save your favorite datasets, track recent searches, and organize information in one place with your own custom dashboard.",
},
];

const Intro = ({ onStart }) => (
  <div className="intro-bg">
    {/* Hero Section */}
    <header className="intro-hero">
      <h1 className="intro-title">NDAP</h1>
      <p className="intro-subtitle">
        The National Data and Analytics Platform (NDAP) facilitates and improves access to Indian government data.
Discover India’s public data like never before. Explore datasets, gain insights, and drive smarter decisions with our platform and tools.
      </p>
      <button className="intro-btn" onClick={onStart}>Let's Start</button>
    </header>

    {/* Features Section */}
    <h2 className="features-title">Our Features</h2>
    <div className="features-grid">
      {features.map((feat, idx) => (
        <div className="feature-card" key={idx}>
          <div className="feature-icon">{feat.icon}</div>
          <h3>{feat.title}</h3>
          <p>{feat.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Intro;
