import React from 'react';

class Dog extends React.Component {
  state = {
    isLoading: true,
    books: [],
    error: null
  };

  fetchUsers() {
    fetch(`https://www.anapioficeandfire.com/api/books`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          books: data,
          isLoading: false,
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchUsers();
  }
  render() {
    const { isLoading, books, error } = this.state;
    return (
      
      <React.Fragment>
        {/* <h1>Random User</h1> */}
        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          books.map(user => {
            const { isbn, name, authors} = user;
            return (
              <div key={isbn}>
                <p>Name: {name}</p>
                <p>isbn: {isbn}</p>
                <p>Authors: {authors}</p>
                <hr />
              </div>
            );
          })
        ) : (
          <h3>Loading...</h3>
        )}
      </React.Fragment>
    );
  }
}

export default Dog;