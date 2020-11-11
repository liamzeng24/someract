import { render } from "@testing-library/react";
import React from "react";
import SearchBar from './SearchBar';
import Unsplash from '../API/Unsplash';
import ImageList from './ImageList';

class App extends React.Component {
    state = {image: []};
    onSearchSubmit = async (term) => {
        const response = await Unsplash.get("https://api.unsplash.com/search/photos",{
            params: {query: term},
        });
        this.setState({image: response.data.results});
    }
    render(){
        return (
        <div>
            <SearchBar onSubmit={this.onSearchSubmit} anotherpro="Ok just testing"/>
            <ImageList image={this.state.image}/>
        </div>
        );
    };
};

export default App;