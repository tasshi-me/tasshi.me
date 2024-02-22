import React from "react";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>tasshi.me</h1>
        <p>Masaharu TASHIRO | Software Engineer</p>
        <div className="App-links">
          <a
            className="App-link"
            href="https://linktr.ee/tasshi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linktree
          </a>
          <a
            className="App-link"
            href="https://github.com/tasshi-me"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="App-link"
            href="https://twitter.com/tasshi_me"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            className="App-link"
            href="https://lapras.com/public/tasshi"
            target="_blank"
            rel="noopener noreferrer"
          >
            LAPRAS
          </a>
        </div>
        <div>
          <p>© 2019-{(new Date()).getFullYear()} tasshi All Rights Reserved.</p>
        </div>
      </header>
    </div>
  );
};

export default App;
