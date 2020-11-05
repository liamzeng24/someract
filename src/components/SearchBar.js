import React from 'react';

class SearchBar extends React.Component{
    AttheInputChange(event){
        console.log(event.target.value);
    }

    render(){
        return(
            <div style={{marginTop: '10px'}} className="ui segment container">
                <form className='ui form'>
                    <div className='field'>
                        <label>image Search</label>
                        <input type='text' onChange={(e) => console.log(e.target.value)}></input>
                    </div>
                </form>
            </div>
        );
    }
}
// for today's update
export default SearchBar;