
import css from './Options.module.css';

function Options({ updateFeedback, resetFeedback, visibleReset }) {
  return (
    <div className={css.optionsContainer}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {visibleReset && (
        <button onClick={resetFeedback}>Reset</button>
      )}
    </div>
  );
}

export default Options;