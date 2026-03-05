import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div>
      <header>
        <nav>
          <h1>Placement AI</h1>
          <ul>
            <li>Home</li>
            <li>Features</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      
      <section id="hero">
        <h2>Welcome to Placement AI</h2>
        <p>Your gateway to a smarter job application process.</p>
      </section>
      
      <section id="features">
        <h3>Features</h3>
        <ul>
          <li>AI-driven job matching</li>
          <li>Resume optimization</li>
          <li>Interview preparation tools</li>
        </ul>
      </section>
      
      <footer>
        <p>&copy; 2026 Placement AI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;