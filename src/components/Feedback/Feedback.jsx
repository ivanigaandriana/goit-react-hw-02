
import css from './Feedback.module.css';

const Feedback = ({feedback })=>{
    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    const positiveFeedback = Math.round((feedback.good / totalFeedback)* 100);
    return(
        < div  className={css.feedbackContainer} >
        <ul className={css.feedbackList}>
            <li>Good:{feedback.good}</li>
            <li>Neutral:{feedback.neutral}</li>
            <li>Bad:{feedback.bad}</li>
            <li>Total:{totalFeedback}</li>
            <li>Positive:{positiveFeedback}%</li></ul></div>
    )
   
    
}
export default Feedback;