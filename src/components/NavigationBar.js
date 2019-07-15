import React from 'react';
import MenuButton from "./MenuButton";

class NavigationBar extends React.Component {
    render() {
        console.log(this.props.articles);
        return (
        <div className="header-menu">
            <MenuButton history={this.props.history} path={""} title={'Home'} />
            <MenuButton history={this.props.history} path={"business"} title={'Business'} />
            <MenuButton history={this.props.history} path={"entertainment"} title={'Entertainment'} />
            <MenuButton history={this.props.history} path={"general"} title={'General'} />
            <MenuButton history={this.props.history} path={"health"} title={'Health'} />
            <MenuButton history={this.props.history} path={"science"} title={'Science'} />
            <MenuButton history={this.props.history} path={"sports"} title={'Sports'} />
            <MenuButton history={this.props.history} path={"technology"} title={'Technology'} />
        </div>
        )
    }
}

export default NavigationBar;