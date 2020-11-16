
import React from 'react';

class SearchBar extends React.Component{
    state={text: ""}

    onInputChange = book => {
        this.setState({text: book.target.value});
    };

    Submitted = event => {
        event.preventDefault();
        this.props.onTermSubmit(this.state.text);
        // Todo: Call the callback from parent and return the value; 
    };

    render(){
        return <div className="search-bar ui segment">
                    <form className='ui form' onSubmit={this.Submitted}>
                        <div className="field">
                            <label>Video Search</label>
                            <input 
                                type='text' 
                                placeholder="Please type in the video" 
                                value={this.state.text}
                                onChange={this.onInputChange}
                            />
                        </div>
                    </form>
               </div>
    }
};

export default SearchBar;