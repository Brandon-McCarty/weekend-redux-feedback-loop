import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Material UI
import Button from '@material-ui/core/Button';

function Comments({ setRating }) {

    const feedback = useSelector(store => store.feedback);
    const history = useHistory();
    const dispatch = useDispatch();
    const [comments, setComments] = useState('');


    // Dispatch the comments to feedback reducer upon submission
    const submitComments = (event) => {
        event.preventDefault();
        console.log('SUBMIT');
        dispatch({ type: 'ADD_COMMENT_FEEDBACK', payload: comments });
        // Clear input field after submission
        setComments('');
        history.push('/review');
    }

    const returnToSupport = () => {
        // Set rating to show previous selection for user reference
        setRating(feedback.support);
        history.push('/support');
    }

    return (
        <>
            <form onSubmit={submitComments}>
                <label htmlFor="comments">Enter any other comments or feedback below:</label>
                <br />
                <input
                    className="comments"
                    type="text"
                    placeholder="Enter comments"
                    id="comments"
                    value={comments}
                    onChange={(event) => setComments(event.target.value)}
                />

                <Button variant="contained" color="primary" type="submit">Next</Button>
            </form>
            <Button variant="contained" onClick={returnToSupport} className="backBtn">Back</Button>

        </>
    )
}

export default Comments;