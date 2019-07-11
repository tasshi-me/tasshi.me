import React from "react";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>tasshi.me</h1>
        <p>Masaharu TASHIRO | Web Developer</p>
        <div className="App-links">
          <a
            className="App-link"
            href="https://www.resume.id/tasshi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <a
            className="App-link"
            href="https://github.com/mshrtsr"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="App-link"
            href="https://tasshi.hatenablog.jp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
          <a
            className="App-link"
            href="https://twitter.com/tasshi820"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            className="App-link"
            href="https://qiita.com/tasshi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Qiita
          </a>
        </div>
        <div>
          <p>© 2019 tasshi All Rights Reserved.</p>
        </div>
      </header>
    </div>
  );
};

export default App;
