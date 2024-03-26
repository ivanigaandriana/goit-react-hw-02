
import { useState, useEffect } from 'react';
import Deskription from './components/Description/Deskription';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';
import 'modern-normalize';
import './App.css';

function App() {
  const [feedbackTypes, setFeedbackTypes] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  
  useEffect(() => {
    const savedFeedback = localStorage.getItem('feedback');
    if (savedFeedback) {
      setFeedbackTypes(JSON.parse(savedFeedback));
      
    }
  }, []);

  const updateFeedback = feedbackType => {
    setFeedbackTypes(prevState => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1
    }));
    
  };

  const resetFeedback = () => {
    setFeedbackTypes({
      good: 0,
      neutral: 0,
      bad: 0
    });
  
  };

  const totalFeedback = feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;

  const positiveFeedback = totalFeedback === 0 ? 0 : Math.round((feedbackTypes.good / totalFeedback) * 100);

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedbackTypes));
  }, [feedbackTypes]);

  return (
    <>
      <Deskription />
      <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} visibleReset={totalFeedback > 0} />
      {( totalFeedback === 0) && <Notification />}
      {/* Умовний рендеринг для компонента Feedback */}
      {(totalFeedback > 0) && <Feedback feedback={feedbackTypes} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} />}
    </>
  );
}

export default App;