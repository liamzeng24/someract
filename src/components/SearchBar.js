import React from 'react';

class SearchBar extends React.Component{
    state = { term: 'Hi there!' };
    AttheInputChange(event){
        console.log(event.target.value);
    }

    onFormSubmit(event){
        event.preventDefault();
        console.log(this.state.term);
    }


    render(){
        return(
            <div style={{marginTop: '10px'}} className="ui segment container">
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <label>image Search</label>
                        <input  type='text'
                                value={this.state.term} 
                                onChange={(e) => this.setState({term: e.target.value.toUpperCase()})}
                        />
                    </div>
                </form>
            </div>
        );
    }
}
// for today's update
export default SearchBar;