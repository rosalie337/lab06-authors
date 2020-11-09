import React, { Component } from 'react'
import { fetchAuthors, createAuthor } from './Fetch.js'

const userFromLocalStorage = {
    userId: 1

};

export default class CreatePage extends Component {

    state = {
        authors: []
    }

    componentDidMount = async () => {
        const authors = await fetchAuthors();
        this.setState({ authors });

    }

    handleSubmit = async (e) => {
        e.preventDefault();
    

        await createAuthor({
            born: this.state.born,
            born_id: this.state.bornId, // this is something that user should not create
            author_name: this.state.authorName,
            published_books: this.state.publishedBooks,
            living: this.state.living,
            owner_id: userFromLocalStorage.userId // this is something that user should not create
        });

        // this redirects the user home to see new author
        this.props.history.push('/');
    }

    handleChange = (e) => {
        this.setState({ living: e.target.value });
    }

    render() {
        return (
            <div>
                <h2>Add an Author</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Author's Full Name:
                        <input value={this.state.authorName} onChange={e => this.setState({ authorName: e.target.value})} type="string"/>
                    </label> 
                    <label>
                        Where was author born?
                        <input value={this.state.bornId} onChange={e => this.setState({ bornId: e.target.value})} type="string"/>
                    </label>
                    <label>
                        How many published works?
                        <input value={this.state.publishedBooks} onChange={e => this.setState({ publishedBooks: e.target.value})} type="number"/>
                    </label> 
                    <label>
                        Is author living?
                        <select value={this.state.living} onChange={e => this.setState({ living: e.target.value })}>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </label> 
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}