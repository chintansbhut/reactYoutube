import React from "react";
//AIzaSyCYq7uZfrOnH5aItlaBGZnAFz3bhHqG5_M;
class SearchBar extends React.Component {
  state = { term: "" };
  onInputChange = event => {
    this.setState({ term: event.target.value });
  };
  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <div className="searchbar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <dv className="field">
            <label>Vido Search </label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </dv>
        </form>
      </div>
    );
  }
}
export default SearchBar;
