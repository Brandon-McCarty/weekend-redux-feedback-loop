import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {useSelector} from 'react-redux';

import FeedbackInput from '../FeedbackInput/FeedbackInput';

// Material UI
import Button from '@material-ui/core/Button';

function Understanding({ handleChange, rating, setRating }) {

    const feedback = useSelector(store => store.feedback);
    const history = useHistory();
    const dispatch = useDispatch();


    // Dispatch the rating to feedback reducer upon submission
    const submitUnderstanding = (event) => {
        event.preventDefault();
        console.log('SUBMIT');
        dispatch({ type: 'ADD_UNDERSTANDING_FEEDBACK', payload: rating });
        // Select previous choice if editing selections
        setRating(feedback.support);
        // Send to support
        history.push('/support');
    }

    const returnToFeelings = () => {
        // Set rating to show previous selection for user reference
        setRating(feedback.feeling);
        history.push('/');
    }

    return (
        <>
            <h3>How well do you understand the material?</h3>

            <form onSubmit={submitUnderstanding}>
                <FeedbackInput
                    handleChange={handleChange}
                    rating={rating}
                />
                <Button variant="contained" color="primary" type="submit">Next</Button>
            </form>

            <Button  variant="contained" onClick={returnToFeelings} className="backBtn">Back</Button>
        </>
    )
}

export default Understanding;