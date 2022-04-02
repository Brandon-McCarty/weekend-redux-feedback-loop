import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import FeedbackInput from '../FeedbackInput/FeedbackInput';

function Understanding({ handleChange, rating, resetInputs }) {

    const history = useHistory();
    const dispatch = useDispatch();


    // Dispatch the rating to feedback reducer upon submission
    const submitUnderstanding = (event) => {
        event.preventDefault();
        console.log('SUBMIT');
        dispatch({ type: 'ADD_UNDERSTANDING_FEEDBACK', payload: rating });
        resetInputs();
        history.push('/support')
    }

    return (
        <>
            <h3>How well do you understand the material?</h3>

            <form onSubmit={submitUnderstanding}>
                <FeedbackInput
                    handleChange={handleChange}
                    rating={rating}
                />
                <button type="submit">Next</button>
            </form>
        </>
    )
}

export default Understanding;