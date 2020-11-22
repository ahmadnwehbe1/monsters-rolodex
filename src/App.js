import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "semantic-ui-css/semantic.min.css";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter(
      (m) =>
        m.name.toLowerCase().includes(searchField.toLowerCase()) ||
        m.email.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1
          style={{
            fontFamily: "Bigelow Rules",
            fontSize: "72px",
            color: "#0CCAC4",
            marginTop: "30px",
          }}
        >
          Monsters Beh
        </h1>
        <SearchBox
          placeholder="Search Monsters..."
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
