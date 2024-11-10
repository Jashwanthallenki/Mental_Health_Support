import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const EmotionBarChart = () => {
  const [emotionData, setEmotionData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Emotion Scores',
        data: [],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    const fetchEmotionData = async () => {
      try {
        // Make sure this URL matches your running API's actual endpoint
        const response = await axios.get('http://127.0.0.1:5000/http://localhost:3000/analyzeEmotion');
        response=JSON.parse(response)
        const emotions = response.data.emotions;
        setEmotionData({
          labels: emotions.map((emotion) => emotion.label),
          datasets: [
            {
              label: 'Emotion Scores',
              data: emotions.map((emotion) => emotion.score),
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching emotion data:', error);
      }
    };

    fetchEmotionData();
  }, []);

  return (
    <div>
      <h2>Emotion Analysis</h2>
      <Bar
        data={emotionData}
        options={{
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Score',
              },
            },
            x: {
              title: {
                display: true,
                text: 'Emotions',
              },
            },
          },
        }}
      />
    </div>
  );
};

export default EmotionBarChart;
