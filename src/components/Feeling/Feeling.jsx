import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import FeedbackInput from '../FeedbackInput/FeedbackInput';

function Feeling({ handleChange, rating, setRating }) {

    const feedback = useSelector(store => store.feedback)
    const history = useHistory();
    const dispatch = useDispatch();



    // Dispatch the rating to feedback reducer upon submission
    const submitFeeling = (event) => {
        event.preventDefault();
        console.log('SUBMIT');
        dispatch({ type: 'ADD_FEELING_FEEDBACK', payload: rating })
        // Select previous choice if editing selections
        setRating(feedback.understanding)
        // Send to understanding
        history.push('/understanding')
    }

    return (
        <>
            <h3>How are you feeling today?</h3>

            <form onSubmit={submitFeeling}>
                <FeedbackInput
                    handleChange={handleChange}
                    rating={rating}
                />

                <button type="submit">Next</button>
            </form>
        </>
    )
}

export default Feeling;