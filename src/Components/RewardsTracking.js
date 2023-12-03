import React, { useState, useEffect } from 'react';
import './index.css';

const RewardsTracking = () => {
  const [rewards, setRewards] = useState([]);
  const [timeUntilNextReward, setTimeUntilNextReward] = useState(null);

  useEffect(() => {
    const fetchRewardsData = async () => {
      try {
        const response = await fetch('/api/rewards');
        const data = await response.json();
        setRewards(data.rewards);
        setTimeUntilNextReward(data.timeUntilNextReward);
      } catch (error) {
        console.error('Error fetching rewards data:', error);
      }
    };

    fetchRewardsData();
  }, []);

  return (
    <div id='rewards'>
      <h2 id='rewards-tracking'>Rewards Tracking</h2>
      <p id='my-rewards'>Your Rewards:</p>
      <ul>
        {rewards.map((reward, index) => (
          <li key={index}>{reward}</li>
        ))}
      </ul>
      <p id='tracking'>Next Reward in: {timeUntilNextReward} days</p>
    </div>
  );
};

export default RewardsTracking;
