import React from 'react';

class NavigationBar extends React.Component {
    render() {
        return (
        <div className="header-menu">
            <button className="btn btn-info" name="" onClick={this.props.clickHandler}>HOME</button>
            <button className="btn btn-info" name="business" onClick={this.props.clickHandler}>Business</button>
            <button className="btn btn-info" name="entertainment" onClick={this.props.clickHandler}>Entertainment</button>
            <button className="btn btn-info" name="general" onClick={this.props.clickHandler}>General</button>
            <button className="btn btn-info" name="health" onClick={this.props.clickHandler}>Health</button>
            <button className="btn btn-info" name="science" onClick={this.props.clickHandler}>Science</button>
            <button className="btn btn-info" name="sports" onClick={this.props.clickHandler}>Sports</button>
            <button className="btn btn-info" name="technology" onClick={this.props.clickHandler}>Technology</button>
        </div>
        )
    }
}

export default NavigationBar;