import { render } from "@testing-library/react";
import React from "react";
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    state = {image: []};
    onSearchSubmit = async (term) => {
        const response = await axios.get("https://api.unsplash.com/search/photos",{
            params: {query: term},
            headers: {
                Authorization: "Client-ID ASFDDvYN2u95A9dHUG1lwWzKPPducbLoU5ktVHrq_MM"
            }
        });
        console.log(this);
        this.setState({image: response.data.results});
    }
    render(){
        return (
        <div>
            <SearchBar onSubmit={this.onSearchSubmit} anotherpro="Ok just testing"/>
            Found: {this.state.image.length} images
        </div>
        );
    };
};

export default App;