import React, { useState } from "react";
import { motion } from "framer-motion";
import "../App.css"; // Make sure this path matches your project

const questions = [
  {
    question: "What makes you feel most alive?",
    options: ["Helping others", "Achieving goals", "Feeling loved", "Having fun", "Being mindful"]
  },
  {
    question: "Which vibe matches you the most?",
    options: ["Warm & Connected", "Bold & Ambitious", "Loving & Loyal", "Playful & Curious", "Calm & Centered"]
  },
  {
    question: "Choose your power song:",
    options: ["Count On Me", "Stronger", "Perfect", "Happy", "Weightless"]
  },
  {
    question: "Pick your dream weekend:",
    options: ["Volunteering", "Crushing goals", "Quality time", "Adventure trip", "Silent retreat"]
  },
  {
    question: "Your energy in one word:",
    options: ["Supportive", "Driven", "Caring", "Bubbly", "Grounded"]
  }
];

const resultsMap = [
  {
    trait: "P - Positive Emotion",
    aesthetic: "You're *Sunshine Cozy* ☀️🧡 Warm, heartfelt, and full of gratitude."
  },
  {
    trait: "E - Engagement",
    aesthetic: "You're *Focus Flame* 🔥⚡ Fully immersed, passionate, and in the zone."
  },
  {
    trait: "R - Relationships",
    aesthetic: "You're *Heartcore Vibe* 💖🌈 Deep connections light your soul."
  },
  {
    trait: "M - Meaning",
    aesthetic: "You're *Soul Seeker* 🔮🌌 Driven by purpose and inner depth."
  },
  {
    trait: "A - Accomplishment",
    aesthetic: "You're *Glow Getter* 💼🌟 You chase dreams with sparkle."
  }
];

const AestheticQuiz = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const handleAnswer = (index) => {
    const newAnswers = [...answers, index];
    setAnswers(newAnswers);
    if (currentQ === questions.length - 1) {
      const counts = [0, 0, 0, 0, 0];
      newAnswers.forEach((ans) => (counts[ans] += 1));
      const top = counts.indexOf(Math.max(...counts));
      setResult(resultsMap[top]);
    } else {
      setCurrentQ(currentQ + 1);
    }
  };

  return (
    <div className="q-quiz-container">
      <motion.h1
        className="q-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🌈 Find Your Coolest Aesthetic
      </motion.h1>
      {result ? (
        <div className="q-result-box">
          <h2 className="q-trait">{result.trait}</h2>
          <p className="q-result">{result.aesthetic}</p>
        </div>
      ) : (
        <div className="q-question-box">
          <h2 className="q-question-text">{questions[currentQ].question}</h2>
          <div className="q-options">
            {questions[currentQ].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className="q-option-button"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AestheticQuiz;
