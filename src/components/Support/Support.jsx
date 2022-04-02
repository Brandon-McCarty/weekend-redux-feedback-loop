import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FeedbackInput from '../FeedbackInput/FeedbackInput';
import {useSelector} from 'react-redux';

function Support({ handleChange, rating, resetInputs, setRating }) {

    const feedback = useSelector(store => store.feedback)
    const history = useHistory();
    const dispatch = useDispatch();

    // Dispatch the rating to feedback reducer upon submission
    const submitSupport = (event) => {
        event.preventDefault();
        console.log('SUBMIT');
        dispatch({ type: 'ADD_SUPPORT_FEEDBACK', payload: rating });
        resetInputs();
        // Send to comments
        history.push('/comments')
        
    }

    const returnToUnderstanding = () => {
        // Set rating to show previous selection for user reference
        history.push('/understanding');
        setRating(feedback.understanding)
    }

    return (
        <>

            <h3>How supported do you feel today?</h3>

            <form onSubmit={submitSupport}>
                <FeedbackInput
                    handleChange={handleChange}
                    rating={rating}
                />
                <button type="submit">Next</button>
            </form>

            <button onClick={returnToUnderstanding} className="backBtn">Back</button>
        </>
    )
}

export default Support;