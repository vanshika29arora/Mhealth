import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import PermaTimeline from "./PermaTimeline";

const strengths = [
  "Empathy",
  "Courage",
  "Resilience",
  "Creativity",
  "Patience",
  "Compassion",
  "Determination",
  "Adaptability",
  "Optimism",
  "Self-Awareness",
];
const moods = [
  { label: "Happy", emoji: "😊" },
  { label: "Neutral", emoji: "😐" },
  { label: "Sad", emoji: "😔" },
  { label: "Angry", emoji: "😠" },
  { label: "Anxious", emoji: "😨" },
];

const Home = () => {
  const [seconds, setSeconds] = useState(60);
  const [isActive, setIsActive] = useState(false);
  const [completedSessions, setCompletedSessions] = useState(
    parseInt(localStorage.getItem("mindfulSessions")) || 0
  );

  useEffect(() => {
    let timer;
    if (isActive && seconds > 0) {
      timer = setInterval(() => setSeconds((prev) => prev - 1), 1000);
    } else if (seconds === 0 && isActive) {
      setIsActive(false);
      const updated = completedSessions + 1;
      setCompletedSessions(updated);
      localStorage.setItem("mindfulSessions", updated);
    }
    return () => clearInterval(timer);
  }, [isActive, seconds]);

  const startTimer = () => {
    setSeconds(60);
    setIsActive(true);
  };

  const resetCounter = () => {
    localStorage.setItem("mindfulSessions", 0);
    setCompletedSessions(0);
  };

  const [picked, setPicked] = useState(null);

  const handleClick = () => {
    const randomStrength =
      strengths[Math.floor(Math.random() * strengths.length)];
    setPicked(randomStrength);
  };

  return (
    <>
      <div className="home-container">
        {/* Left Section */}
        <div className="left-section">
          <h1 className="main-heading">Your mental health sanctuary</h1>
          <p className="subheading">
            A peaceful space to nurture your mind, body, and soul
          </p>
          <p className="description">
            Discover a harmonious environment designed to support your mental
            well-being journey. Our platform offers meditation sessions, PERMA
            tracking, and our support to help you find balance in your daily
            life.
          </p>
          <div className="cta-buttons">
            <button className="primary-button">
              <Link className="nav-link" to="/journey">
                Start Your Journey
              </Link>
            </button>
          </div>
        </div>
        {/* m1 m3 m2 m6   // m4 m5 m3 m6//m1 m2 m5 m4 */}
        {/* Right Section */}
        <div className="right-section">
          <div className="adaptive-grid">
            <div className="grid-item">
<img src="https://vanshika29arora.github.io/Mhealth/pic/m1.jpg" alt="m1" />
 </div>
            <div className="grid-item">
              <img src="/pic/m2.jpg" alt="t" />
            </div>
            <div className="grid-item">
              <img src="/pic/m3.jpg" alt="t" />
            </div>
            <div className="grid-item">
              <img src="/pic/m4.jpg" alt="t" />
            </div>
            <div className="grid-item">
              <img src="/pic/m5.jpg" alt="t" />
            </div>
            <div className="grid-item">
              <img src="/pic/m6.jpg" alt="t" />
            </div>
            <div className="grid-item">
              <img src="/pic/m1.jpg" alt="t" />
            </div>
            <div className="grid-item">
              <img src="/pic/m2.jpg" alt="t" />
            </div>
            <div className="grid-item">
              <img src="/pic/m3.jpg" alt="t" />
            </div>
            <div className="grid-item">
              <img src="/pic/m4.jpg" alt="t" />
            </div>
            <div className="grid-item">
              <img src="/pic/m5.jpg" alt="t" />
            </div>
            <div className="grid-item">
              <img src="/pic/m6.jpg" alt="t" />
            </div>
          </div>
        </div>
      </div>
      {/* perma */} <PermaTimeline />
      <div className="mindful-container">
        <h2>🕊️ Mindful Minutes</h2>
        <p>Take 60 seconds to breathe and relax.</p>

        <div className={`circle-timer ${isActive ? "animate" : ""}`}>
          <span>{seconds}s</span>
        </div>

        <div className="button-group">
          <button onClick={startTimer} disabled={isActive}>
            Start
          </button>
          <button onClick={resetCounter}>Reset Count</button>
        </div>

        <p className="counter">Sessions completed today: {completedSessions}</p>
      </div>
      {/* 55 */}
      <div>
        <section className="five-interactive-container">
          <div className="five-card five-logo-card">
            <img src="/pic/f1.jpg" alt="t" />
          </div>

          <div className="five-card five-intro-card">
            <h2>Pause. Breathe. Smile.</h2>
            <p>
              <br />
              Your breath is your superpower. <br /> In the middle of chaos, a
              smile grounds you. <br /> The world isn’t ending — your mind just
              needs a hug.
              <br />
              You got this!!
            </p>
          </div>

          <div className="five-card five-logo-card">
            <img src="/pic/f2.jpg" alt="t" />
          </div>

          <div className="five-card five-intro-card">
            <h2>Tiny Wins = Big Mood</h2>
            <p>
              Drank water? Hydration!! <br />
              Texted a friend? Heart full.
              <br />
              Showed up today? Legend.
              <br />
              Brushed your hair? You slayin’.
              <br />
              Tiny wins aren’t tiny when your vibe is this strong. <br />
              Stack the small, and the joy multiplies.
              <br />
            </p>
          </div>

          <div className="five-card five-logo-card">
            <img src="/pic/f3.jpg" alt="t" />
          </div>

          <div className="five-card five-project-card">
            <h4 className="five-tag">Latest Work</h4>
            <img src="/pic/f4.jpg" alt="t" />
            <p>PERMA Pulse</p>
          </div>

          <div className="five-card five-note-card">
            <h3>PERMA Power Notes 💥</h3>
            <ul>
              <li>
                <span style={{ color: "#90EE90" }}>🟢</span> People with
                meaning-driven lives live more happier.
              </li>
              <li>
                <span style={{ color: "#7EC8E3" }}>🔵</span> Achieving small
                goals gives your brain a dopamine hit.
              </li>
              <li>
                <span style={{ color: "#BA55D3" }}>🟣</span> Gratitude
                journaling boosts positivity by 25%.
              </li>
              <li>
                <span style={{ color: "#FF69B4" }}>💗</span> You can literally
                train your brain for happiness.
              </li>
            </ul>
          </div>

          <div className="five-card five-tag-card five-notify">
            From the Creator <span className="five-dot">1</span>
            
            <p className="five-p-cardd">
             <br/>PERMA isn’t just a theory. It’s a reminder.
              To smile. To notice the tiny things. Water. A deep breath. A kind note. That one laugh that
              made your cheeks hurt. I hope it
              makes you feel seen, held, and a lil more whole. You deserve that.
              Always.<br/> – Vanshika 🌻
            </p>
          </div>

          <div className="five-card five-map-card">
            <img src="/pic/f5.jpg" alt="t" />
            <p>
              <center>
                Make It Fun, Make It You
                <br /> Because joy isn't random — it's built.{" "}
              </center>
            </p>
          </div>

          <div className="five-card five-commandments-card">
            <h3>About Us</h3>
            <ul>
              <li>✅ Soft code, big heart</li>
              <li>✅ Built with giggles</li>
              <li>✅ People over process</li>
              <li>✅ We ship kindness</li>
              <li>✅ Tiny wins = magic</li>
              <li>✅ High-five your mind</li>
              <li>✅ Soulful scrolls only</li>
              <li>✅ Chill is default mode.</li>
            </ul>
          </div>
        </section>
      </div>
      {/* end - 55 */}
      {/* 3 */}
      <div className="strength-container">
        <h1 className="strength-title">🌟 Find Your Inner Strength</h1>
        <p className="strength-sub">
          Click the button to discover a strength that lives within you 💪
        </p>
        <button onClick={handleClick} className="strength-button">
          Reveal My Strength
        </button>
        {picked && (
          <div className="strength-result">
            <p>Your strength is:</p>
            <h2>{picked}</h2>
          </div>
        )}
      </div>{" "}
    </>
  );
};

export default Home;
