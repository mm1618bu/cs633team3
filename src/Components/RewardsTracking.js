import React, { useState, useEffect } from 'react';
import './index.css';

const RewardsTracking = () => {
  const [rewards, setRewards] = useState([]);
  const [timeUntilNextReward, setTimeUntilNextReward] = useState(null);

  // Simulate fetching rewards data from an API
  useEffect(() => {
    // Replace this with actual API fetch logic
    const fetchRewardsData = async () => {
      try {
        // Fetch the customer's rewards data
        const response = await fetch('/api/rewards'); // Replace with your actual API endpoint
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
