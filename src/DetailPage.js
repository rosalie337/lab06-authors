import React, { Component } from 'react';
import {
    fetchOrigins,
    fetchAuthor,
    updateAuthor,
} from 'Fetch.js';

const userFromLocalStorage = {
    userId: 1
};

export default class DetailPage extends Component {

    // Get feedback about this state
    state = {
        origins: [],
        author_name: [],
        published_books: 1,
        living: true,
        born_id: 1
        
    }

    // on mount, we fetch the authors
    componentDidMount =  async() => {
        const origins = await fetchOrigins();
        const author = await fetchAuthor(this.props.match.params.id);

        const originAsAString = author.born;
        
        // Double check this 
        const matchingOrigin = origins.find((born) => {
            return born.location === originAsAString
        });

        // Double check this
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
                        Author
                        <input value={this.state.authorName} onChange={e => this.setState({ authorName: e.target.value})} type="string"/>
                    </label> 
                <button>Submit</button>
                </form>
            </div>
        )
    }
}
