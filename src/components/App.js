import { render } from "@testing-library/react";
import React, { useState } from "react";
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import Youtube from '../API/YoutubeAPI';
import VideoDetail from './VideoDetail';

const App = () => {
    const [terms, updateTerms] = useState([]);
    const [selectedVideo, updateVideo] = useState(null);

    const onSubmitSearch = async (term) =>{
        const response = await Youtube.get('/search', {
            params: {q: term}
        })
        updateTerms(response.data.items);
        updateVideo(response.data.items[0]);
    }

    const onVideoSelect = (term) => {
        ;
    }

    return (
            <div className="ui container">
                <SearchBar onTermSubmit={onSubmitSearch}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList theList={terms} onVideoSelect={(term) => {updateVideo(term)}} />
                        </div>
                    </div>
                </div>
            </div>
            );
};




export default App;