import React, { Component } from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Article from "./components/Article";

class Home extends Component {
  state = {
    headlines: []
}

componentDidMount() {
    var url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=9c08cbd8ac004bb08d92315c5bfb5fe6';
    var req = new Request(url);
    fetch(req).then(response => {
      response.json().then(resp => {
          const a = resp
          this.setState({
              headlines: a.articles
          });
     });
  });
}

handleClick(e) {
    e.preventDefault();
    window.location.href = `/${e.target.name}`;
}

renderHeadlines() {
    let rows = [];
    this.state.headlines.forEach(a => {
        rows.push(<Article article={a}/>);
    })
    return <tbody className="category-content">{rows}</tbody>;
}

render() {
    return (
        <React.Fragment>
            <NavigationBar clickHandler={this.handleClick}/>
            <h1 className="headlines-title">Headlines</h1>
            { this.state.headlines.length > 0 &&
               this.renderHeadlines() }
        </React.Fragment>
    );
  }
}

export default Home;
