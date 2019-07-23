import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import Article from "./Article";
import ReactLoading from 'react-loading';

class Category extends Component {
state = {
    articles: []
}

componentDidMount() {
    const categoryFilter = this.getCategory() !== "" ? `&category=${this.getCategory()}`: "";
    const url = `https://newsapi.org/v2/top-headlines?country=us${categoryFilter}&apiKey=9c08cbd8ac004bb08d92315c5bfb5fe6`;
        const req = new Request(url);
        fetch(req).then(response => {
          response.json().then(resp => {
              this.setState({
                articles: resp.articles
              });
         });
      });
}

handleClick(e) {
    e.preventDefault();
    window.location.href = `/${e.target.name}`;
}

getCategory() {
  return this.props.location.pathname.replace("/", "");
}

capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

render() {
    const categoryTitle = this.getCategory() !== "" ? this.capitalize(this.getCategory()) : "Headlines";
    return (
        <React.Fragment>
            <NavigationBar clickHandler={this.handleClick}/>
            <h1 className="category-title">{categoryTitle}</h1>
            { this.state.articles.length > 0 ?
                <div className="category-content">
                { 
                  this.state.articles.map(a => (
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

export default Category;
