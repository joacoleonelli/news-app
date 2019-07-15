import React from 'react';
import Article from "./Article";
import NavigationBar from "./NavigationBar";

class Category extends React.Component {
    state = {
        articles: {}
    }

    componentDidMount() {
        var url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.getCategory()}&apiKey=9c08cbd8ac004bb08d92315c5bfb5fe6`;
        var req = new Request(url);
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

    renderArticles() {
        let rows = [];
        this.state.articles.forEach(a => {
            rows.push(<Article article={a}/>);
        })
        return <tbody className="category-content">{rows}</tbody>;
    }

    getCategory() {
        return this.props.location.pathname.replace("/", "");
    }

    capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    render() {
        return (
            <div>
                <NavigationBar clickHandler={this.handleClick}/>
                <h1 className="category-title">{this.capitalize(this.getCategory())}</h1>
                { this.state.articles.length > 0 && this.renderArticles() }
            </div>

        )
    }
}

export default Category;


