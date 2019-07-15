import React from "react";
import NavigationBar from "./NavigationBar";

class Menu extends React.Component {
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

    renderHeadlines() {
        let rows = [];
        this.state.headlines.forEach(e => {
            console.log(e);
            rows.push(<a href={e.url} className="headlines-news">{e.title}</a>);
        })
        return <tbody>{rows}</tbody>;
    }

    render() {
        return (
            <React.Fragment>
                <NavigationBar history={this.props.history}/>
                <h1 className="headlines-title">Headlines</h1>
                {this.state.headlines.length > 0 && this.renderHeadlines()}
            </React.Fragment>
        );
    }
}

export default Menu;