import React from 'react';

class Dog extends React.Component {
  state = {
    isLoading: true,
    marcas: [],
    error: null
  };

  fetchUsers() {
    fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          marcas: data,
          isLoading: false,
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchUsers();
  }
  render() {
    const { isLoading, marcas, error } = this.state;
    return (
      
      <React.Fragment>
        <h1>Random User</h1>
        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          marcas.map(user => {
            const { codigo, nome } = user;
            return (
              <div key={codigo}>
                <p>Name: {nome}</p>
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