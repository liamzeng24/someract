import { render } from "@testing-library/react";
import React from "react";
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import Youtube from '../API/YoutubeAPI';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    state = {terms: [], selectedVideo: null};
    onSubmitSearch = async (term) =>{
        const response = await Youtube.get('/search', {
            params: {q: term}
        })
        console.log(term);
        this.setState({terms: response.data.items, selectedVideo: response.data.items[0]}); 
    }

    onVideoSelect = (term) => {
        this.setState({selectedVideo: term});
        console.log(term);
    }

    render(){
        return (
        <div className="ui container">
            <SearchBar onTermSubmit={(this.onSubmitSearch)}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={this.state.selectedVideo}/>
                    </div>
                    <div className="five wide column">
                        <VideoList theList={this.state.terms} onVideoSelect={this.onVideoSelect}/>
                    </div>
                </div>
            </div>
        </div>
        );
    };
};

export default App;