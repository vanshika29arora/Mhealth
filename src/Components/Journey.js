import React, { useState, useEffect } from 'react';
import '../Perma.css';

const ActivityJourney = () => {
  const [user, setUser] = useState(null);
  const [currentPhase, setCurrentPhase] = useState('day1');
  const [activities, setActivities] = useState([]);
  const [showRegistration, setShowRegistration] = useState(true);
  const [showActivityInfo, setShowActivityInfo] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [activityFeedback, setActivityFeedback] = useState({});

  // Sample activities organized by phases
  const initialActivities = [
    // Day 1 (Registration)
    { id: 1, title: "Registration", phase: 'day1', completed: false, info: "Complete your registration to begin your journey." },
    { id: 2, title: "Online Meeting 1", phase: 'day1', completed: false, info: "Join our introductory online meeting to learn about the program." },
    { id: 3, title: "Explaining elements and Benefits", phase: 'day1', completed: false, info: "Understand the key elements and benefits of the PERMA model." },
    { id: 4, title: "PERMA survey Form filling", phase: 'day1', completed: false, info: "Complete the survey to assess your current well-being." },
    { id: 5, title: "Queries sort", phase: 'day1', completed: false, info: "Address any questions you have about the program." },
    { id: 6, title: "End of Registration Process", phase: 'day1', completed: false, info: "Finalize your registration and prepare for your journey." },
    
    // Week 1
    { id: 7, title: "Silence", phase: 'week1', completed: false, info: "Practice 15 minutes of silence to connect with your inner self." },
    { id: 8, title: "Affirmation", phase: 'week1', completed: false, info: "Create positive affirmations to boost your confidence and mindset." },
    { id: 9, title: "Visualization", phase: 'week1', completed: false, info: "Visualize your goals and desired outcomes for motivation." },
    { id: 10, title: "Exercise", phase: 'week1', completed: false, info: "Engage in 30 minutes of physical activity to boost your mood." },
    { id: 11, title: "Reading and Writing", phase: 'week1', completed: false, info: "Read inspiring content and write about your reflections." },
    { id: 12, title: "Week 1 Review", phase: 'week1', completed: false, info: "Reflect on your experiences and progress this week." },
    
    // Week 2
    { id: 13, title: "Nature Connection", phase: 'week2', completed: false, info: "Spend time in nature to rejuvenate your spirit." },
    { id: 14, title: "Gratitude Practice", phase: 'week2', completed: false, info: "Write down three things you're grateful for each day." },
    { id: 15, title: "Creative Expression", phase: 'week2', completed: false, info: "Engage in a creative activity that brings you joy." },
    { id: 16, title: "Mindful Eating", phase: 'week2', completed: false, info: "Practice mindful eating during one meal today." },
    { id: 17, title: "Week 2 Review", phase: 'week2', completed: false, info: "Reflect on your experiences and progress this week." },
    
    // Week 3
    { id: 18, title: "Social Connection", phase: 'week3', completed: false, info: "Reach out to a friend or family member for meaningful conversation." },
    { id: 19, title: "Goal Setting", phase: 'week3', completed: false, info: "Set specific, achievable goals for your well-being." },
    { id: 20, title: "Self-Compassion", phase: 'week3', completed: false, info: "Practice self-compassion and kindness towards yourself." },
    { id: 21, title: "Week 3 Review", phase: 'week3', completed: false, info: "Reflect on your experiences and progress this week." },
    
    // Week 4
    { id: 22, title: "Future Self Vision", phase: 'week4', completed: false, info: "Visualize your future self and the person you want to become." },
    { id: 23, title: "Celebration", phase: 'week4', completed: false, info: "Celebrate your achievements and progress so far." },
    { id: 24, title: "Reflection", phase: 'week4', completed: false, info: "Reflect on your entire journey and lessons learned." },
    { id: 25, title: "Completion Day", phase: 'week4', completed: false, info: "Congratulations on completing your journey!" }
  ];

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    const savedActivities = localStorage.getItem('activities');
    const savedPhase = localStorage.getItem('currentPhase');
    const savedFeedback = localStorage.getItem('activityFeedback');
    
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setShowRegistration(false);
    }
    
    if (savedActivities) {
      setActivities(JSON.parse(savedActivities));
    } else {
      setActivities(initialActivities);
    }
    
    if (savedPhase) {
      setCurrentPhase(savedPhase);
    }
    
    if (savedFeedback) {
      setActivityFeedback(JSON.parse(savedFeedback));
    }
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    
    setUser({ name, email, startDate: new Date() });
    setShowRegistration(false);
    
    localStorage.setItem('user', JSON.stringify({ name, email, startDate: new Date() }));
    localStorage.setItem('currentPhase', 'day1');
  };

  const calculateProgress = () => {
    const totalActivities = activities.length;
    const completedActivities = activities.filter(activity => activity.completed).length;
    return Math.round((completedActivities / totalActivities) * 100);
  };

  const getCurrentPhaseActivities = () => {
    return activities.filter(activity => activity.phase === currentPhase);
  };

  const handleFeedbackChange = (activityId, feedback) => {
    setActivityFeedback({
      ...activityFeedback,
      [activityId]: feedback
    });
  };

  const submitFeedbackAndComplete = (activityId) => {
    localStorage.setItem('activityFeedback', JSON.stringify({
      ...activityFeedback,
      [activityId]: activityFeedback[activityId]
    }));
    
    setActivities(activities.map(activity => 
      activity.id === activityId ? { ...activity, completed: true } : activity
    ));
    
    localStorage.setItem('activities', JSON.stringify(
      activities.map(activity => 
        activity.id === activityId ? { ...activity, completed: true } : activity
      )
    ));
    
    // Check if all activities for current phase are completed
    const currentPhaseActivities = activities.filter(a => a.phase === currentPhase);
    const allCompleted = currentPhaseActivities.every(a => a.completed);
    
    if (allCompleted) {
      const phases = ['day1', 'week1', 'week2', 'week3', 'week4'];
      const currentPhaseIndex = phases.indexOf(currentPhase);
      if (currentPhaseIndex < phases.length - 1) {
        const nextPhase = phases[currentPhaseIndex + 1];
        setCurrentPhase(nextPhase);
        localStorage.setItem('currentPhase', nextPhase);
      }
    }
  };

  return (
    <div className="activity-container">
      {showRegistration ? (
        <div className="registration-form">
          <h2>Join PERMA 21-Day Journey</h2>
          <form onSubmit={handleRegister}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <button type="submit" className="register-button">Start Journey</button>
          </form>
        </div>
      ) : (
        <div className="journey-container">
          <h2>Welcome, {user.name}!</h2>
          
          <div className="progress-container">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${calculateProgress()}%` }}
              ></div>
            </div>
            <span className="progress-text">{`${calculateProgress()}% Complete`}</span>
          </div>
          
          <div className="phase-header">
            <h3>{getPhaseTitle(currentPhase)}</h3>
          </div>
          
          <div className="activities-grid">
            {getCurrentPhaseActivities().map(activity => (
              <div 
                key={activity.id} 
                className={`activity-card ${activity.completed ? 'completed' : ''}`}
              >
                <h3>{activity.title}</h3>
                <button 
                  onClick={() => setSelectedActivity(activity)}
                  className="info-button"
                >
                  ⓘ
                </button>
                {!activity.completed && (
                  <div className="feedback-form">
                    <textarea
                      placeholder="Share your thoughts about this activity (required)"
                      value={activityFeedback[activity.id] || ''}
                      onChange={(e) => handleFeedbackChange(activity.id, e.target.value)}
                    ></textarea>
                    <button 
                      disabled={!activityFeedback[activity.id]}
                      onClick={() => submitFeedbackAndComplete(activity.id)}
                      className="submit-feedback"
                    >
                      Complete Activity
                    </button>
                  </div>
                )}
                {activity.completed && (
                  <div>
                    <div className="checkmark">✓</div>
                    {activityFeedback[activity.id] && (
                      <div className="feedback-display">
                        <p><strong>Your Feedback:</strong> {activityFeedback[activity.id]}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {selectedActivity && (
            <div className="activity-info-modal">
              <div className="modal-content">
                <span className="close-button" onClick={() => setSelectedActivity(null)}>×</span>
                <h3>{selectedActivity.title}</h3>
                <p>{selectedActivity.info}</p>
                {!selectedActivity.completed && (
                  <div className="feedback-form">
                    <textarea
                      placeholder="Share your thoughts about this activity (required)"
                      value={activityFeedback[selectedActivity.id] || ''}
                      onChange={(e) => handleFeedbackChange(selectedActivity.id, e.target.value)}
                    ></textarea>
                    <button 
                      disabled={!activityFeedback[selectedActivity.id]}
                      onClick={() => submitFeedbackAndComplete(selectedActivity.id)}
                      className="submit-feedback"
                    >
                      Complete Activity
                    </button>
                  </div>
                )}
                {selectedActivity.completed && (
                  <div>
                    <div className="checkmark">✓</div>
                    {activityFeedback[selectedActivity.id] && (
                      <div className="feedback-display">
                        <p><strong>Your Feedback:</strong> {activityFeedback[selectedActivity.id]}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// Helper function to get phase title
function getPhaseTitle(phase) {
  switch(phase) {
    case 'day1': return "Day 1: Registration";
    case 'week1': return "Week 1: ZAVERR (Silence, Affirmation, Visualization, Exercise, Reading)";
    case 'week2': return "Week 2: Optimization (Nature, Gratitude, Creativity, Mindfulness)";
    case 'week3': return "Week 3: Leverage (Social Connection, Goal Setting, Self-Compassion)";
    case 'week4': return "Week 4: Illumination (Future Vision, Celebration, Reflection)";
    default: return "Completion";
  }
}

export default ActivityJourney;