import React, { Component } from 'react';
import axios from 'axios';
import CategoryList from './CategoryList';
import createRequest from '../../request';
import Navigation from '../Navigation';

const SERVER_URL = 'http://localhost:3000/categories.json';

class Category extends Component {
    constructor() {
        super();
        this.state = {
            categories: []
        };
    }

    componentDidMount() {
        
        const fetchCategories = () => {
            createRequest("/categories.json").then((response) => {

 
                this.setState({categories: response});

                // setTimeout(fetchCategories, 5000);
                console.log(response)
            });
        };
        fetchCategories();
    }

    render() {
        return (
            <div>
                <Navigation />
                <CategoryList categories={ this.state.categories }/>
                hey
            </div>
        );
    }


}

export default Category;