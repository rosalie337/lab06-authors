import React, { Component } from 'react';
import {
    fetchOrigins,
    fetchAuthor,
    updateAuthor,
} from './Fetch.js';

const userFromLocalStorage = {
    userId: 1
};

export default class DetailPage extends Component {

    // Get feedback about this state
    state = {
        origins: [],
        author_name: [],
        published_books: 1,
        living: '',
        born_id: 1
        
    }

    // on mount, we fetch the authors
    componentDidMount =  async() => {
        const origins = await fetchOrigins();
        const author = await fetchAuthor(this.props.match.params.id);

        const originAsAString = author.born;
        
        const matchingOrigin = origins.find((born) => {
            return born.born === originAsAString
        });

        this.setState({
            origins: origins,
            born_id: matchingOrigin.id,
            author_name: author.author_name,
            published_books: author.published_books,
            living: author.living
            
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();


        await updateAuthor(
            this.props.match.params.id,
            {
                born_id: this.state.bornId,
                author_name: this.state.authorName,
                published_books: this.state.publishedBooks,
                living: this.state.living,
                owner_id: userFromLocalStorage.userId
                
            });

        this.props.history.push('/');
    }

    handleChange = (e) => {
        this.setState({bornId: e.target.value });
    }

    render() {
        return (
            <div>
                <h2>Update an Author</h2>
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
                        Delete Author
                    <button>Delete</button>
                </form>
            </div>
        )
    }
}
