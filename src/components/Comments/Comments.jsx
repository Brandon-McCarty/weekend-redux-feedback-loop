import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

function Comments() {

    const history = useHistory();
    const dispatch = useDispatch();
    const [comments, setComments] = useState('');


    // Dispatch the comments to feedback reducer upon submission
    const submitComments = (event) => {
        event.preventDefault();
        console.log('SUBMIT');
        dispatch({ type: 'ADD_COMMENT_FEEDBACK', payload: comments })
        // Clear input field after submission
        setComments('')
        history.push('/review')
    }

    return (
        <form onSubmit={submitComments}>
            <label htmlFor="comments">Enter comments below:</label>
            <br />
            <input
                type="text"
                placeholder="Enter comments"
                id="comments"
                value={comments}
                onChange={(event) => setComments(event.target.value)}
            />

            <button type="submit">Next</button>
        </form>
    )
}

export default Comments;