import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'Software developer with a passion for creating amazing applications.',
        imgSrc: 'https://via.placeholder.com/150',
        profession: 'Software Developer'
      },
      shows: false,
      lastMounted: new Date(),
      timeSinceMounted: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        timeSinceMounted: Math.floor((new Date() - this.state.lastMounted) / 1000)
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  }

  render() {
    const { person, shows, timeSinceMounted } = this.state;

    return (
      <div className="App">
        <h1>Person Profile</h1>
        <button onClick={this.toggleShow}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>
        {shows && (
          <div className="profile">
            <img src={person.imgSrc} alt={person.fullName} />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <h3>{person.profession}</h3>
          </div>
        )}
        <p>Time since last mount: {timeSinceMounted} seconds</p>
      </div>
    );
  }
}

export default App;
