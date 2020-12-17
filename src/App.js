import React from "react";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "Pablo Emilio Escobar Gaviria",
        bio: `À l'âge de 20 ans, il se lance dans de nombreuses activités criminelles
         avec Oscar Benel Aguirre. Le duo se lance dans de petites arnaques, la vente 
         *de cigarettes de contrebande, de faux tickets de loterie et le vol de voitures. 
         Au début des années 1970, où il est connu pour travailler comme garde du corps et voleur,
        Escobar gagne rapidement 100 000 dollars en kidnappant et en demandant des rançons à des cadres
         vivant à Medellín, avant d'entrer dans le trafic de drogue.`,
        image: "/mafia6.jpg",
        imago: "/mafia9.jpg",
        profession: "Narcotraficante",
      },
      show: false,
      time: new Date().toLocaleString,
    };
  }

  hundleClick = () => {this.setState({ show: !this.state.show });};

  componentDidMount = () => {this.intervalID = setInterval(() => this.tick(), 1000);};

  componentWillUnmount = () => {clearInterval(this.intervalID);};

  tick = () => {this.setState({time: new Date().toLocaleString(),});};

  render() {
    return (
      <div className="App">
        {this.state.show === true ? (
          <div className="sho">
            
            <img className="image" src={this.state.Person.image} alt="logo" />
            <h1>{this.state.Person.fullName}</h1>
            <img className="imago" src={this.state.Person.imago} alt="logo" />
            <p className="App-clock">You will die: {this.state.time}.</p>
            <h1>{this.state.Person.profession}</h1>
            <div className="divbio">
              <p>{this.state.Person.bio}</p>
              
            </div>
          </div>
        ) : (
          <div><img className="imago" src={this.state.Person.imago} alt="logo" /></div>
        )}

        <button className="btn" onClick={this.hundleClick}>
          {" "}
          show{" "}
        </button>
      </div>
    );
  }
}

export default App;