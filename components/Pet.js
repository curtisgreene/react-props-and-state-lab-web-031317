const React = require('react');

class Pet extends React.Component {
  constructor() {
    super();
    this.state = {}
    this.handleAdopt = this.handleAdopt.bind(this)
  }

  handleAdopt(e){
    const petId = this.props.pet.id
    this.props.onAdoptPet(petId)
  }


  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet name: {this.props.pet.name} gender: {this.props.pet.gender === "male" ? "♂" :"♀"}</a>
          <div className="meta">
            <span className="date">Pet type: {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        { this.props.isAdopted === false ? <button className="ui primary button" onClick={this.handleAdopt.bind(this)} >Adopt pet</button> : <button className="ui disabled button" >Already adopted</button> }
      </div>
    );

  }
}

module.exports = Pet;
