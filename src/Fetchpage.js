import React, { Component } from 'react'
import fetch from 'superagent'

export default class Fetchpage extends Component {

    state = {
        author: [],
        birth-location: 'seattle, WA'

    }

    componentDidMount = async () => {
        await this.fetchBirthLocation();
    }

    handleSubmit = aysnc (e) => {
        e.preventDefault();

        await this.fetchQuotes();
    }
    
    handleChange = (e) => {
        this.setState({ character: e.target.value });

    }

    fetchBirthLocation = async () => {
        const response = await fetch.get(``)
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
