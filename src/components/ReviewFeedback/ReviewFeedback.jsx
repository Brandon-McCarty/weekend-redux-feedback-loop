import {useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom';

function ReviewFeedback() {

    const history = useHistory();
    const dispatch = useDispatch();
    const feedback = useSelector(store => store.feedback)

    const submitReview = (event) => {
        event.preventDefault();
        dispatch({type: 'SUBMIT_FEEDBACK'})
        history.push('/feeling')
    }

    return (
        <>
            <h1>Review Your Feedback</h1>

            <h3>Feelings: {feedback[0]}</h3>
            <br />
            <h3>Understanding: {feedback[1]}</h3>
            <br />
            <h3>Support: {feedback[2]}</h3>
            <br />
            <h3>Comments: {feedback[3]}</h3>
            <form onSubmit={submitReview}>
            <button type="submit">SUBMIT</button>
            </form>
        </>
    )
}

export default ReviewFeedback;