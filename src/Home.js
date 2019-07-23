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
    var url = 'https://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        'apiKey=9c08cbd8ac004bb08d92315c5bfb5fe6';
        var req = new Request(url);
        fetch(req).then(response => {
          response.json().then(resp => {
              this.setState({
                  headlines: resp.articles
              });
         });
      });
}

handleClick(e) {
    e.preventDefault();
    window.location.href = `/${e.target.name}`;
}

render() {
    return (
        <React.Fragment>
            <NavigationBar clickHandler={this.handleClick}/>
            <h1 className="headlines-title">Headlines</h1>
            { this.state.headlines.length > 0 ?
                <div className="category-content">
                { 
                  this.state.headlines.map(a => (
                    <Article key={a.title} article={a}/>
                  ))
                }
              </div>
              : 
                <div className="centered-loading">
                    <ReactLoading type="spin" color={'#282c34'} height={75} width={75} />
                </div>
            }


        </React.Fragment>
    );
  }
}

export default Home;
