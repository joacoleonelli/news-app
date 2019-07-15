import React from "react";

class MenuButton extends React.Component {
    handleClick = () => {
        const pagePath = this.props.path;
        this.props.history.push(`/${pagePath}`);
    }
    render() {
        const { title } = this.props;
        return (
            <button className="btn btn-info" onClick={this.handleClick}>{title}</button>
        );
    }
}

export default MenuButton;