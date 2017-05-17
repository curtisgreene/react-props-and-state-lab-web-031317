const React = require('react');

class Filters extends React.Component {
  constructor(props) {
    super();
    this.state = props.filters
  }

  handleChange(e){
    const filterVal = e.target.value
    this.props.onChangeType(filterVal)
    this.setState({
      type: filterVal
    })
  }

  handleClick(e){
    this.props.onFindPetsClick()
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select onChange={this.handleChange.bind(this)} value={this.state.type} name="type" id="type">
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.handleClick.bind(this)}>Find pets</button>
        </div>
      </div>
    );
  }
}

module.exports = Filters;
