import React, { useState, useEffect } from "react";
import "../Perma.css";
import Navbar from "./Navbar";

const Perma = () => {
  // Changing words data
  const words = [
    "Mindfulness",
    "Abundance",
    "Wellness",
    "Resilience",
    "Inspiring",
    "Happiness",
    "Networking",
    "Gratitude",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="p-body">
      {/* Positive Emotions Section */}
      <div className="section">
        <h2 className="section-title">POSITIVE EMOTIONS</h2>
        <div className="section-content">
          <img
            src="/pic/p1.jpg"
            alt="Positive Emotions"
            className="section-image"
          />
          <div className="section-text">
            <h3>How to Unleash?</h3>
            <ol>
              <li>
                Cultivating Gratitude: Encourage individuals to keep a gratitude
                journal and regularly write down things they are grateful for.
              </li>
              <li>
                Engaging in Acts of Kindness: Encourage individuals to perform
                random acts of kindness.
              </li>
              <li>
                Practicing Mindfulness and Meditation: Teach individuals
                mindfulness and meditation techniques.
              </li>
              <li>
                Pursuing Pleasurable Activities: Encourage individuals to engage
                in activities that bring them joy.
              </li>
              <li>
                Nurturing Social Connections: Emphasize the importance of
                building and maintaining positive relationships.
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* SAVERS Concept Section */}
      <div className="section">
        <h2 className="section-title">Concept of S A V E R S</h2>
        <div className="card-container">
          {[
            {
              title: "Silence",
              content:
                "This practice involves setting aside a few moments of silence or meditation in the morning.",
            },
            {
              title: "Affirmations",
              content:
                "Affirmations are positive statements that help rewire your mindset and beliefs.",
            },
            {
              title: "Visualization",
              content:
                "Visualization involves creating vivid mental images of your desired outcomes and goals.",
            },
            {
              title: "Exercise",
              content:
                "Engaging in physical exercise in the morning provides numerous benefits for your overall well-being.",
            },
            {
              title: "Reading",
              content:
                "Reading is a valuable practice to expand your knowledge, gain inspiration, and stimulate personal growth.",
            },
            {
              title: "Scribing",
              content:
                "Scribing refers to the practice of journaling or writing down your thoughts, gratitude, goals, or any other relevant information.",
            },
          ].map((item, index) => (
            <div className="card" key={index}>
              <div className="card-content">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-text">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Engagement Section */}
      <div className="section">
        <h2 className="section-title">ENGAGEMENT</h2>
        <div className="section-content">
          <img src="/pic/p2.jpg" alt="Engagement" className="section-image" />
          <div className="section-text">
            <h3>How to Unleash?</h3>
            <ol>
              <li>
                Discover Your Passions: Identify activities that truly engage
                and excite you.
              </li>
              <li>
                Set Meaningful Goals: Define clear and meaningful goals that
                align with your values.
              </li>
              <li>
                Cultivate Flow Experiences: Engage in activities that challenge
                your skills but are not too overwhelming.
              </li>
              <li>
                Embrace Positive Relationships: Surround yourself with
                supportive and encouraging individuals.
              </li>
              <li>
                Practice Mindfulness: Be present in the moment and fully engaged
                in your activities.
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Relationships Section */}
      <div className="section">
        <h2 className="section-title">RELATIONSHIPS</h2>
        <div className="section-content">
          <img
            src="/pic/p3.jpg"
            alt="Relationships"
            className="section-image"
          />
          <div className="section-text">
            <h3>How to Unleash?</h3>
            <ol>
              <li>
                Active Listening: Practice active listening when interacting
                with others.
              </li>
              <li>
                Quality Time Together: Make an effort to spend quality time with
                the important people in your life.
              </li>
              <li>
                Express Appreciation and Gratitude: Show appreciation and
                gratitude for the people in your life.
              </li>
              <li>
                Resolve Conflicts Positively: Learn to address conflicts in a
                positive and constructive manner.
              </li>
              <li>
                Support and Celebrate Each Other's Success: Be supportive of the
                achievements and milestones of your loved ones.
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Meaning Section */}
      <div className="section">
        <h2 className="section-title">MEANING</h2>
        <div className="section-content">
          <img src="/pic/p4.jpg" alt="Meaning" className="section-image" />
          <div className="section-text">
            <h3>How to Unleash?</h3>
            <ol>
              <li>
                Reflect on Values and Passions: Reflect on what truly matters to
                you and what brings you fulfillment.
              </li>
              <li>
                Quality Time Together: Make an effort to spend meaningful time
                with those who share your values.
              </li>
              <li>
                Express Appreciation and Gratitude: Acknowledge the meaningful
                aspects of your life and the people in it.
              </li>
              <li>
                Resolve Conflicts Positively: Approach challenges as
                opportunities for growth and deeper understanding.
              </li>
              <li>
                Support and Celebrate Collective Success: Work together with
                others toward shared goals and purposes.
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Accomplishments Section */}
      <div className="section">
        <h2 className="section-title">ACCOMPLISHMENTS</h2>
        <div className="section-content">
          <img
            src="/pic/p5.jpg"
            alt="Accomplishments"
            className="section-image"
          />
          <div className="section-text">
            <h3>How to Unleash?</h3>
            <ol>
              <li>
                Set Clear and Attainable Goals: Define realistic goals that
                align with your values and aspirations.
              </li>
              <li>
                Embrace a Growth Mindset: View challenges as opportunities for
                growth and learning.
              </li>
              <li>
                Take Inspired Action: Take deliberate steps towards your goals,
                driven by passion and purpose.
              </li>
              <li>
                Cultivate Perseverance: Stay committed to your goals, even when
                faced with setbacks or challenges.
              </li>
              <li>
                Harness the Power of Positive Visualization: Visualize yourself
                successfully achieving your goals with vivid detail.
              </li>
            </ol>
          </div>
        </div>
      </div>
      </div>
     {/* detailed */}

<div className="permaz-container">
  <h1 className="permaz-title">Real Vibes. Real Voices.</h1>

  <div className="permaz-intro">
    <h3>Why This Matters?</h3>
    <ul>
      <li>Gen-Z doesn’t vibe with long boring sessions 💀</li>
      <li>People crave real change, not checkboxes ✅</li>
      <li>This isn’t just a program — it’s a shift ✨</li>
    </ul>
  </div>

  <div className="permaz-feedback">
    <h2>Moments That Moved Us</h2>

    {/* Week 1 */}
    <div className="permaz-feedback-section">
      <h3>Week 1 - “They Felt It.”</h3>
      <ul>
        <li>
          Participants expressed a deep sense of calm through meditation. Practicing self-control brought genuine satisfaction.
        </li>
        <li>
          During visualization, some saw a version of themselves they had never encountered before.
        </li>
        <li>
          For many, it was the first time they appreciated their effort — not just the outcome.
        </li>
      </ul>
    </div>

    <div className="image-container">
  <img src="/pic/1.png" className="responsive-img" alt="serene visual" />
</div>

    {/* Week 2 */}
    <div className="permaz-feedback-section">
      <h3>Week 2 - “They Did That.”</h3>
      <ul>
        <li>
          Attendees created personal money plans and began saving significantly — proving that small changes lead to big wins.
        </li>
        <li>
          Group activities uncovered hidden strengths like communication, igniting a sense of pride.
        </li>
        <li>
          The week became a reset button — it felt fun, focused, and freeing.
        </li>
      </ul>
    </div>
    <div className="image-container">
  <img src="/pic/2.png" className="responsive-img" alt="serene visual" />
</div>
    {/* Week 3 */}
    <div className="permaz-feedback-section">
      <h3>Week 3 - “They Saw the Good.”</h3>
      <ul>
        <li>
          Many started noticing the good in others — and eventually, in themselves. That shift was powerful.
        </li>
        <li>
          Writing gratitude notes brought unexpected tears — the kind that comes from something deeply real.
        </li>
        <li>
          Some even reconnected emotionally with family members they hadn’t understood before.
        </li>
      </ul>
    </div>
    <div className="image-container">
  <img src="/pic/3.png" className="responsive-img" alt="serene visual" />
</div>

    {/* Week 4 */}
    <div className="permaz-feedback-section">
      <h3>Week 4 - “They’re Becoming...”</h3>
      <ul>
        <li>
          Hidden talents surfaced — and participants learned how to put them to use.
        </li>
        <li>
          The vision boards created during sessions became personal wallpapers — daily reminders of possibility.
        </li>
        <li>
          Many left believing in their own strengths for the very first time.
        </li>
      </ul>
    </div>
  </div>
  <div className="image-container">
  <img src="/pic/4.png" className="responsive-img" alt="serene visual" />
</div>

  <div className="permaz-outro">
    <h2>The Shift?</h2>
    <p>
      From autopilot ➤ to awareness. From chaos ➤ to clarity. From doubt ➤
      to doing. <br/>That’s the vibe they’re carrying forward.
    </p>
  </div>
</div>

    </>
  );
};

export default Perma;
