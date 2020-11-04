import React, { Component } from 'react'
import fetch from 'superagent'

export default class Fetchpage extends Component {

    state = {
        author: [],
        born: 'seattle, WA'

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

    fetchBirthLocation = async () => {
        const response = await fetch.get(``)

        this.setState({ born: response.body })
    }
    render() {
        return (
            <div class="fetch">
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} />
                <button>Search Authors</button>
            </form>
                {
                this.state.born.length === 0
                ? 'LOADING!!'
                : this.state.born.map( born => <div key={born.born}>
                    <p>{born.author}</p>
                    <p>{born.born}</p>
                    </div>)
                }
                
            </div>
        )
    }
}
