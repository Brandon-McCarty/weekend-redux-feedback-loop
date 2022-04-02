import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FeedbackInput from '../FeedbackInput/FeedbackInput';

function Support({ handleChange, rating, resetInputs }) {

    const history = useHistory();
    const dispatch = useDispatch();

    // Dispatch the rating to feedback reducer upon submission
    const submitSupport = (event) => {
        event.preventDefault();
        console.log('SUBMIT');
        dispatch({ type: 'ADD_SUPPORT_FEEDBACK', payload: rating });
        resetInputs();
        history.push('/comments')
        
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
        </>
    )
}

export default Support;