import { useState } from 'react'
import Deskription from './components/Description/Deskription'
import Feedback from './components/Feedback/Feedback';
import Options  from './components/Options/Options';
import Notification from './components/Notification/Notification';
import 'modern-normalize';
import './App.css'

function App() {
  const [feedbackTypes, setFeedbackTypes] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const [feedbackCollected, setFeedbackCollected] = useState(false); // Відстежує, чи були натискані кнопки збереження відгуків (Good, Neutral, Bad)
  const [feedbackProvided, setFeedbackProvided] = useState(false); // Відстежує, чи було надано якийсь відгук

  const updateFeedback = feedbackType => {
    setFeedbackCollected(true); // Відзначаємо, що були натискані кнопки збереження відгуків
    setFeedbackTypes(prevState => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1
    }));
    setFeedbackProvided(true); // Відзначаємо, що було надано якийсь відгук
  };

  const resetFeedback = () => {
    setFeedbackTypes({
      good: 0,
      neutral: 0,
      bad: 0
    });
    setFeedbackCollected(false);
    setFeedbackProvided(false); // Збираємо назад в стан, щоб показати, що відгуків більше немає
  };

  return (
    <>
      <Deskription />
      <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} visibleReset={feedbackCollected} />
      {!feedbackProvided && !feedbackCollected && <Notification />} {/* Показуємо Notification, якщо жодного відгуку ще не надавали */}
      {feedbackProvided && <Feedback feedback={feedbackTypes} />} {/* Показуємо Feedback, якщо був наданий хоча б один відгук */}
    </>
  );
}

export default App;