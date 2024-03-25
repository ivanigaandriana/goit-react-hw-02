
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

  const [resetClicked, setResetClicked] = useState(false); 

  useEffect(() => {
    const savedFeedback = localStorage.getItem('feedback');
    if (savedFeedback) {
      setFeedbackTypes(JSON.parse(savedFeedback));
      if (JSON.parse(savedFeedback).good + JSON.parse(savedFeedback).neutral + JSON.parse(savedFeedback).bad === 0) {
        setResetClicked(true);
      }
    }
  }, []);

  const updateFeedback = feedbackType => {
    setFeedbackTypes(prevState => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1
    }));
    setResetClicked(false); // Змінюємо стан resetClicked на false при оновленні відгуку
  };

  const resetFeedback = () => {
    setFeedbackTypes({
      good: 0,
      neutral: 0,
      bad: 0
    });
    setResetClicked(true); 
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
      {(resetClicked && totalFeedback === 0) && <Notification />}
      {/* Умовний рендеринг для компонента Feedback */}
      {(!resetClicked || totalFeedback > 0) && <Feedback feedback={feedbackTypes} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} />}
    </>
  );
}

export default App;