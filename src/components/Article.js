import React from "react";
import Card from "react-bootstrap/Card";
import { MDBBtn } from "mdbreact";
import ProgressiveImage from "./ProgressiveImage";
import previewImage from "../assets/preview.jpeg";

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering
    };
  }

  render() {
    const {
      author,
      content,
      description,
      title,
      url,
      publishedAt,
      urlToImage
    } = this.props.article;
    return (
        <Card className="article-content">
          <ProgressiveImage preview={previewImage} image={urlToImage} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{content}</Card.Text>
            <blockquote className="blockquote mb-0">
              <footer className="blockquote-footer">
                Author: <cite title="Author">{author}</cite>
              </footer>
            </blockquote>
          </Card.Body>
          <div className="read-button">
            <MDBBtn href={url} size="md" className="nav-bar">
                Read
            </MDBBtn>
         </div>
        </Card>
    );
  }
}

export default Article;
