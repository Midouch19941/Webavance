import React from 'react';
import './page.css'; // Import the CSS file containing the styles

export default function ufc() {
  return (
    <div className="ufc">
      <div>
        <h1 className="title">Welcome to UFC</h1>
        <p>Ultimate Fighting Championship (UFC) is the world's premier mixed martial arts organization, featuring the best fighters from around the globe competing in various weight classes and disciplines.</p>
        <p>Established in 1993, UFC has revolutionized the world of combat sports, popularizing MMA and bringing it into the mainstream. With thrilling events and fierce rivalries, UFC delivers non-stop action and excitement to millions of fans worldwide.</p>
        <p>Explore the latest news, fights, and updates from the world of UFC right here!</p>
      </div>
      <div>
        <h2 className="text">Upcoming Events</h2>
        <p className="text">Stay tuned for upcoming UFC events featuring top-ranked fighters battling it out in the Octagon.</p>
        <p className="text">Whether it's a championship bout or a highly anticipated rematch, you won't want to miss the action!</p>
      </div>
      <div>
        <img src="ufc-placeholder.jpg" alt="ufc" className="image" />
        
      </div>
    </div>
  );
}
