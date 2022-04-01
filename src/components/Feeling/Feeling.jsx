import {useState} from 'react';
import {useDispatch} from 'react-redux';

function Feeling () {

    const dispatch = useDispatch();
    const [rating, setRating] = useState('');

    // Set the rating as the selected radio input value
    const handleChange = (event) => {
        const target = event.target;
        if (target.checked) {
          setRating(target.value);
          console.log(target.value);
        }
     };

    return (
        <form>
            <input 
                required
                type="radio" 
                name ="rating" 
                id="optionOne" 
                value="1" 
                checked={rating == '1'} 
                onChange={handleChange}
                />
                <label htmlFor="optionOne">1</label>
                
                <input 
                required
                type="radio" 
                name ="rating" 
                id="optionTwo" 
                value="2" 
                checked={rating == '2'} 
                onChange={handleChange}
                />
                <label htmlFor="optionTwo">2</label>
                
                <input 
                required
                type="radio" 
                name ="rating" 
                id="optionThree" 
                value="3" 
                checked={rating == '3'} 
                onChange={handleChange}
                />
                <label htmlFor="optionThree">3</label>
                
                <input 
                required
                type="radio" 
                name ="rating" 
                id="optionFour" 
                value="4" 
                checked={rating == '4'} 
                onChange={handleChange}
                />
                <label htmlFor="optionFour">4</label>
                
                <input 
                required
                type="radio" 
                name ="rating" 
                id="optionFive" 
                value="5" 
                checked={rating == '5'} 
                onChange={handleChange}
                />
                <label htmlFor="optionOne">5</label>
                <button>Next</button>
        </form>
    )
}

export default Feeling;