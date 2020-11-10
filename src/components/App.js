import { render } from "@testing-library/react";
import React from "react";
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    onSearchSubmit(term){
        axios.get("https://api.unsplash.com/search/photos",{

        });
    }
    render(){
        return (
        <div>
            <SearchBar onSubmit={this.onSearchSubmit} />
        </div>
        );
    };
};

export default App;