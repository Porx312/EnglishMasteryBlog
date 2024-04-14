import React from "react";
import birrete from "../assets/birrete.png"
import "./sectionMain.css";
const SectionMain = () => {
  return (
    <section className="content-card">
      <header className="menu">
        <div className="birrete">
        <img src={birrete} alt="birretelogo" />
        </div>
        <nav>
       
              <a href="#">Dashboard</a>
               <a href="#">phrases</a>
                <a href="#">Words</a>
               <a href="#">Favorite</a>
                <a href="#">Input <i class="bi bi-file-code"></i></a>
                <a href="#">recursos</a>
            
        </nav>
      </header>
      <article className="content-page"></article>
      <article className="profile-data">
        <div className="data-profile">
          <h2>
            Hello, <span>Porx</span>
          </h2>
          <div className="img-profile">
            <img
              src="https://i.pinimg.com/564x/a9/96/cc/a996cc06ec0dadc4f99e0b0c01c88bd7.jpg"
              alt="toji"
            />
          </div>
        </div>
        <div className="stats-profile">
          <div className="stats-item">
            <h3>Totals Words</h3>
            <div className="total-words">13565</div>
          </div>
          <div className="stats-item">
            <h3>Totals Words</h3>
            <div className="total-words">13565</div>
          </div>
        </div>
      </article>
      <article className="top-page"></article>
    </section>
  );
};

export default SectionMain;
