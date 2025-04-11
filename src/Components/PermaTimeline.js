import React from "react";
import "../App.css";

const timelineData = [
  {
    date: "July 2023",
    description:
      "Got the spark from a research paper on PERMA — Positive Emotion, Engagement, Relationships, Meaning, and Accomplishment. That was the moment it clicked: 'This is what our campus needs.'",
  },
  {
    date: "August 2023",
    description:
      "Found the first 25 interested students. The start was small but powerful — people who believed in the vision of mental well-being and positive psychology.",
  },
  {
    date: "December 2023",
    description:
      "Reached 100 students, with excellent reviews from every single participant. That’s when you knew: this isn’t just a project — it’s a movement.",
  },
  {
    date: "March 2024",
    description:
      "Final milestone: 150 certified students, all under your project. Each certification = one life impacted.",
  },
];

const PermaTimeline = () => {
  return (
    <div className="timeline-container">
      <h1 className="timeline-heading">
        "We can't live forever, but we can create something that actually will."
      </h1>
      <div className="timeline">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <p className="timeline-date">{item.date}</p>
              <p className="timeline-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PermaTimeline;
