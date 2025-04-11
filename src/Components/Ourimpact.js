import React from 'react';
import '../App.css';


const feedbackData = [

  {
    "quote": "And my goal is to become an entrepreneur after 5 years I know it is too long but I have to work upon it"
  },
  {
    "quote": "I just did walk on terrace fro 30 minute.It was a really relaxing time and refreshing after all the chaos full day of college."
  },
  {
    "quote": "A little better day as I started my day with affirmation So negativity was away"
  },
  {
    "quote": "One of the tasks I love and i do is ... Every night before bed, I write down three things I'm grateful for that happened during the day. "
  },
  {
    "quote": "Another task I enjoy is engaging in acts of kindness. Whether it's helping a neighbor or something else like this, these small acts of kindness make me feel good and create a positive impact on others. It's amazing how a little act of kindness can brighten someone's day!"
  },
  {
    "quote": "I also find mindfulness meditation to be more beneficial. Taking a few minutes each day to sit quietly, focus on my breath, and be present in the moment helps me reduce stress and find inner peace."
  },
  {
    "quote": "These happiness-perma tasks have become an essential part of my routine."
  },
  {
    "quote": "I felt veryy positive as my goal is to be an ai engineer and buy a car. I imagined sitting in my own car and making my parents proud.It was really motivating and I started my day on a positive note thankuu"
  },
  {
    "quote": "Yaa my goal is to be successful in my life(career and professional goals). Achieving goals is an exciting journey. It involves setting clear goals, developing the necessary skills, networking, and staying motivated. It may have challenges, but with growth mindset, we can reach new heights in our career. Let me share a personal experience with you."
  },
  {
    "quote": "I set a goal to take on more leadership responsibilities. It started by taking part in CSI club which is computer society of india club.I took additional courses, attended workshops. Attending conferences and events helped me connect with like-minded individuals and learn from their experiences. These connections opened up new opportunities and provided valuable insights."
  },
  {
    "quote": "It made me think more abt my goals i think if i can do this once a month"
  },
  {
    "quote": "Perma helped me to be calm and explore myself. Sometimes i was scared of sitting alone in the silence but perma helped me to do so and think about me and my relations ,fmds,fmly."
  },
  {
    "quote": "I have imagined my goals but I am that much specified that I am not thinking about efforts so I have reincarnated my dreams all with efforts then I found it useful"
  },
  {
    "quote": "This activity captured my future goals in a paper with beautiful colours..this gave me a clarity of my vision 🌟🌟 thanks for the activity 😊"
  },
  {
    "quote": "I felt very good and motivated after doing this activity and also I want to thank perma team for the efforts you made for us and for this amazing journey"
  },
  {
    "quote": "I did walk around campus with my friends during the short breaks I took after studying in library . it was indeed very refreshing"
  },
  {
    "quote": "when it comes to listening to music, it's one of my favorite things to do! Whether I'm chilling at home or out and about, music always adds a special touch to my day. I love discovering new artists and songs."
  },
  {
    "quote": "And when it comes to engage outdoor and any physical activity, my fav activity is chit-chatting with friends and play truth and dare with them, it's always a blast! I enjoy catching up with my buddies, and just having a good time."
  },
  {
    "quote": "Yes I did that...and it was so relaxing...it made my day worthy😊... because today I played badminton in my break....and in the evening I went to garden...."
  },
  {
    "quote": "These activities are helping me a lot. I listened to music in break...plus today i have played basketball which refreshed my mind."
  },
  {
    "quote": "in short break I listen to music usually, as most time is spend in clg only."
  },
  {
    "quote": "Yes, I did play cricket today and it was really nice , away from tension and was completely relaxing and I do listen to songs every day but they are very depressing so I was a mixed experience but I am improving songs day by day"
  },
  {
    "quote": "I done both activities yesterday It's feel good after doing I'm feeling very engertic to do next task after short breaks"
  },
  {
    "quote": "Done with this activity.. u know what my negative point is lack of self-confidence- I don't believe in myself and my abilities, this hinder's my personal growth and limit opportunities."
  },
  {
    "quote": "yess i did that..i wrote my negativity which i dumped into dustbin that gave me satisfaction at that moment and i promise myself not to overthink on any useless topic"
  },
  {
    "quote": "I wanted to share my experience on the Perma . I was really impressed with the level of assistance provided. The information was clear, accurate, and delivered in a friendly manner. The virtual assistant was knowledgeable and helped me with various topics. I appreciate the quick responses and the thorough explanations provided. Overall, I had a great experience using this Perma activity and would definitely recommend it to others for doing . Keep up the excellent work!"
  },
  {
    "quote": "yess i gave thoughtful time on this activity..i thought about ai and how it helps in our life..as ai is my field..i have discovered new idea on which i will start working on that in upcoming days"
  },
  {
    "quote": "this activity gave me a new idea to start and work upon it....thank you😊"
  },
  {
    "quote": "2 Critical thinking,problem-solving, creativity, analysis, logic 3Critical thinking: questioning assumptions, evaluating evidence, considering multiple perspectives identifying challenges, brainstorming solutions, implementing strategies Creativity: exploring new ideas, thinking outside the box, embracing innovation Analysis: breaking down complex issues, examining components"
  },
  {
    "quote": "Reflection would be interlinking of these it the key /hammer on the nail."
  },
  {
    "quote": "Individuals can navigate complex challenges with clarity and innovation, ultimately leading to greater intellectual growth and success."
  },
  {
    "quote": "And my goal is to become an entrepreneur after 5 years I know it is too long but I have to work upon it"
  },
  {
    "quote": "I just did walk on terrace fro 30 minute.It was a really relaxing time and refreshing after all the chaos full day of college."
  },
  {
    "quote": "A little better day as I started my day with affirmation So negativity was away"
  },
  {
    "quote": "One of the tasks I love and i do is ... Every night before bed, I write down three things I'm grateful for that happened during the day. It could be something as enjoying a delicious meal or having a great conversation with a friend. This practice helps to keep my mind in a positive aspect."
  },
  {
    "quote": "Another task I enjoy is engaging in acts of kindness. Whether it's helping a neighbor or something else like this, these small acts of kindness make me feel good and create a positive impact on others. It's amazing how a little act of kindness can brighten someone's day!"
  },
  {
    "quote": "I also find mindfulness meditation to be more beneficial. Taking a few minutes each day to sit quietly, focus on my breath, and be present in the moment helps me reduce stress and find inner peace."
  },
  {
    "quote": "These happiness-perma tasks have become an essential part of my routine."
  },
  {
    "quote": "I felt veryy positive as my goal is to be an ai engineer and buy a car. I imagined sitting in my own car and making my parents proud.It was really motivating and I started my day on a positive note thankuu"
  },
  {
    "quote": "Yaa my goal is to be successful in my life(career and professional goals). Achieving goals is an exciting journey. It involves setting clear goals, developing the necessary skills, networking, and staying motivated. It may have challenges, but with growth mindset, we can reach new heights in our career. Let me share a personal experience with you."
  },
  {
    "quote": "I set a goal to take on more leadership responsibilities. It started by taking part in CSI club which is computer society of india club.I took additional courses, attended workshops. Attending conferences and events helped me connect with like-minded individuals and learn from their experiences. These connections opened up new opportunities and provided valuable insights."
  },
  {
    "quote": "It made me think more abt my goals i think if i can do this once a month"
  },
  {
    "quote": "Perma helped me to be calm and explore myself. Sometimes i was scared of sitting alone in the silence but perma helped me to do so and think about me and my relations ,fmds,fmly."
  },
  {
    "quote": "I have imagined my goals but I am that much specified that I am not thinking about efforts so I have reincarnated my dreams all with efforts then I found it useful"
  },
  {
    "quote": "This activity captured my future goals in a paper with beautiful colours..this gave me a clarity of my vision 🌟🌟 thanks for the activity 😊"
  },
  {
    "quote": "I felt very good and motivated after doing this activity and also I want to thank perma team for the efforts you made for us and for this amazing journey"
  },
  {
    "quote": "I did walk around campus with my friends during the short breaks I took after studying in library . it was indeed very refreshing"
  },
  {
    "quote": "when it comes to listening to music, it's one of my favorite things to do! Whether I'm chilling at home or out and about, music always adds a special touch to my day. I love discovering new artists and songs."
  },
  {
    "quote": "And when it comes to engage outdoor and any physical activity, my fav activity is chit-chatting with friends and play truth and dare with them, it's always a blast! I enjoy catching up with my buddies, and just having a good time."
  },
  {
    "quote": "Yes I did that...and it was so relaxing...it made my day worthy😊... because today I played badminton in my break....and in the evening I went to garden...."
  },
  {
    "quote": "These activities are helping me a lot. I listened to music in break...plus today i have played basketball which refreshed my mind."
  },
  {
    "quote": "Yes, I did play cricket today and it was really nice , away from tension and was completely relaxing and I do listen to songs every day but they are very depressing so I was a mixed experience but I am improving songs day by day"
  },
  {
    "quote": "I done both activities yesterday It's feel good after doing I'm feeling very engertic to do next task after short breaks"
  },
  {
    "quote": "Done with this activity.. u know what my negative point is lack of self-confidence- I don't believe in myself and my abilities, this hinder's my personal growth and limit opportunities."
  },
  {
    "quote": "yess i did that..i wrote my negativity which i dumped into dustbin that gave me satisfaction at that moment and i promise myself not to overthink on any useless topic"
  },
  {
    "quote": "I wanted to share my experience on the Perma . I was really impressed with the level of assistance provided. The information was clear, accurate, and delivered in a friendly manner. The virtual assistant was knowledgeable and helped me with various topics. I appreciate the quick responses and the thorough explanations provided. Overall, I had a great experience using this Perma activity and would definitely recommend it to others for doing . Keep up the excellent work!"
  },
  {
    "quote": "yess i gave thoughtful time on this activity..i thought about ai and how it helps in our life..as ai is my field..i have discovered new idea on which i will start working on that in upcoming days"
  },
  {
    "quote": "Critical thinking,problem-solving, creativity, analysis, logic 3Critical thinking: questioning assumptions, evaluating evidence, considering multiple perspectives identifying challenges, brainstorming solutions, implementing strategies"
  },
  {
    "quote": "Reflection would be interlinking of these it the key /hammer on the nail."
  },
  {
    "quote": "Individuals can navigate complex challenges with clarity and innovation, ultimately leading to greater intellectual growth and success."
  },
  {
    quote:
      "The experience went very well. I got positive vibes towards my goals. I now believe nothing is impossible when we think positively and work hard.",
  },
  {
    quote:
      "Meditation made me feel very calm. Practicing self-control truly helps — you feel good once you start practicing it.",
  },
  {
    quote:
      "Listening to others on a topic gives you knowledge and widens your perspective. After engaging in a group activity and listening to peers, I identified a unique strength in communication skills. That inspired me, and I’m definitely going to learn from it.",
  },
  {
    quote:
      "I made a proper monthly money plan. To my surprise, I’m saving a lot! I also meditate and feel relieved after it — a really great practice.",
  },
  {
    quote:
      "I listened to YouTube videos of my interest, talked to my friend to identify her strength, and observed my classmates. I even began to understand my aunt’s situation better. I truly experienced a lot today.",
  },
  {
    quote:
      "The moment I imagined during this activity was unforgettable — I surely want to make it come true.",
  },
  {
    quote:
      "It was truly a mind-blowing activity. Today, I learned about skills I didn’t even know I had — and how to use them.",
  },
  {
    quote:
      "This was a really new and powerful experience. It made me feel proud of my strengths. I’m going to start working on my goals and weaknesses.",
  },
  {
    quote:
      "I never thought of myself this way. I’ve always seen my weaknesses, but this activity made me see the good in me.",
  },
  {
    quote:
      "We always chase results. But today, I learned the power of reflection. I never appreciated myself this way before.",
  },
  {
    quote:
      "I used to feel stuck. Now, I feel like I have tools to move ahead. Just identifying my strengths and goals felt like a big step.",
  },
  {
    quote:
      "It felt very emotional, but in a good way. Like... I was meeting myself after a long time.",
  },
  {
    quote:
      "I wrote down my goals and strengths — and I actually meant them. This wasn’t just a classroom activity. This was personal.",
  },
  {
    quote:
      "This was the first time I talked about my strengths out loud. It felt powerful. I want to keep doing that.",
  },
  {
    quote:
      "Today’s session gave me clarity. I feel lighter and more focused now. Thank you for this beautiful experience.",
  },
  {
    quote:
      "I discovered a part of myself I didn’t even know existed. This activity wasn’t just fun — it was meaningful.",
  },
  {
    quote:
      "I feel more confident about my direction in life now. My goals feel more real, more reachable.",
  },
 
  {
    quote:
      "Writing things down today gave me a roadmap. I now know where I want to go and what I want to improve.",
  },
  {
    quote:
      "This activity helped me paint a clearer picture of my inner self. It’s beautiful and imperfect, and I’m okay with that now.",
  },
  {
    quote:
      "This activity gives me clarity about my goals that I achieved and helped me find the purpose of my life.",
  },
  {
    quote:
      "Taking breaks between work helps me explore more creativity. Physical activities are helping me stay fit too!",
  },
  {
    quote:
      "My goal is to become a bug bounty hunter / grey hat hacker. This experience gave me the clarity to shape that journey with intention.",
  },
  {
    quote:
      "I completed Step 4 in my journey — and even used social engineering to get access to a premium course. It felt powerful to use my skills with confidence.",
  },
  {
    quote:
      "This was an amazing activity — it helped me recognize my mistakes and the areas where I need to improve. I also realized that even someone who struggles to express themselves can still grow and contribute.",
  },
];

const OurImpact = () => {
  return (
    <div className="impact-wrapper">
      <h1 className="impact-title">Our Impact</h1>
      <p className="impact-subtitle">Real voices. Real growth. Real transformation.</p>
      <div className="feedback-grid">
        {feedbackData.map((item, index) => (
          <div key={index} className="feedback-card">
            <p className="feedback-quote">“{item.quote}”</p>
            {item.author && <p className="feedback-author">— {item.author}</p>}
          </div>
        ))}
      </div>
    </div>
  );  
};

export default OurImpact;
