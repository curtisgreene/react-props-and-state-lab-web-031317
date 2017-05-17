const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {
  constructor() {
    super();
  }

  render() {
    let petsList = this.props.pets.map((pet) => (
      <Pet pet={pet} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(pet.id)} />
    ));

    return (
      <div className="ui cards">
        {petsList}
      </div>
    );
  }
}

module.exports = PetBrowser;
