import React from 'react';

class SearchBar extends React.Component{
    onInputChange(event){
        console.log(event.target.value);
    }

    onInputClick(){
        console.log('Input was clicked');
    }

    render(){
        return(
            <div style={{marginTop: '10px'}} className="ui segment container">
                <form className='ui form'>
                    <div className='field'>
                        <label>image Search</label>
                        <input type='text' onClick ={this.onInputClick} onChange={this.onInputChange}></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;