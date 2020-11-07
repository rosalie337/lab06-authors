import React, { Component } from 'react';
import fetch from 'superagent';
import { Link } from 'react-router-dom';

export default class FetchPage extends Component {

    state = {
        author: [],
        born: []

    }

    componentDidMount = async () => {
        await this.fetchLocation();
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        await this.fetchLocation();
    }
    
    handleChange = (e) => {
        this.setState({ author: e.target.value });

    }

    fetchLocation = async () => {
        const response = await fetch.get(`https://serene-falls-22234.herokuapp.com/authors`)

        await this.setState({ born: response.body })
    }
    render() {
        console.log(this.state.born);
        return (
            <div class="fetch">
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} />
                <button>Search Authors</button>
            </form>
                {
                this.state.born.length === 0
                ? 'LOADING!!'
                : this.state.born.map( born => <div key={born.id}>
                    <Link to={`/detail/${born.id}`}>
                        <p>{born.author_name}</p>
                        <p>{born.published_books}</p>
                        <p>{born.living}</p>
                        <p>{born.born}</p>
                    </Link>
                    </div>)
                    
                }
            </div>
        )
    }
}
