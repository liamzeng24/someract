
import React, {useState} from 'react';


const SearchBar = (props) => {
    const [text, changeText] = useState("building");
    const onInputChange = (event) => {
        changeText(event.target.value);
    };

    const Submitted = event => {
        event.preventDefault();
        props.onTermSubmit(text);
        // Todo: Call the callback from parent and return the value; 
    };

    return <div className="search-bar ui segment">
                <form className='ui form' onSubmit={Submitted}>
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type='text' 
                            placeholder="Please type in the video" 
                            value={text}
                            onChange={onInputChange}
                        />
                    </div>
                </form>
            </div>

}


export default SearchBar;