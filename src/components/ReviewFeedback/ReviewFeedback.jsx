import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom';
import axios from 'axios';

function ReviewFeedback() {

    const history = useHistory();
    const feedback = useSelector(store => store.feedback)

    const submitReview = () => {
        // Post feedback to database table "feedback"
        axios.post('/feedback', feedback)
        .then(response => {
            console.log('Submitting Feedback');
        }).catch(err => {
            console.log('Error in posting feedback', err);
        })
        history.push('/success')
    }

    const returnToComments = () => {
        history.push('/comments');
    }

    return (
        <>
            <h1>Review Your Feedback</h1>

            <h3>Feelings: {feedback.feeling}</h3>
            <br />
            <h3>Understanding: {feedback.understanding}</h3>
            <br />
            <h3>Support: {feedback.support}</h3>
            <br />
            <h3>Comments: {feedback.comments}</h3>
            <button onClick={returnToComments} className="backBtn">Back</button>
            <button onClick={submitReview}>SUBMIT</button>
        </>
    )
}

export default ReviewFeedback;