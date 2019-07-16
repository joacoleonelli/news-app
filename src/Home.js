import React, { Component } from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Article from "./components/Article";
import ReactLoading from 'react-loading';

class Home extends Component {
  state = {
    headlines: []
}

componentDidMount() {
    const localStorageRef = localStorage.getItem("headlines");
    if (localStorageRef) {
        setTimeout(() => {
            this.setState({
                headlines: JSON.parse(localStorageRef)
            });
        }, 1000);
    } else {
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
}

componentDidUpdate() {
    localStorage.setItem(
        "headlines", 
        JSON.stringify(this.state.headlines)
    );
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
            { this.state.headlines.length > 0 ?
                this.renderHeadlines() : 
                <div className="centered-loading">
                    <ReactLoading type="spin" color={'#282c34'} height={75} width={75} />
                </div>
            }


        </React.Fragment>
    );
  }
}

export default Home;
