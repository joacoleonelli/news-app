import React from 'react';
import Card from 'react-bootstrap/Card';

class Article extends React.Component {
    render() {
        const {author, content, description, title, url, publishedAt, urlToImage} = this.props.article;
        return (
                <Card className="article-content">
                    <Card.Img variant="top" src={urlToImage} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                        {content}
                        </Card.Text>
                        <blockquote className="blockquote mb-0">
                            <footer className="blockquote-footer">
                                Author: <cite title="Author">{author}</cite>
                            </footer>
                        </blockquote>
                        <Card.Link href={url}>Original source</Card.Link>
                    </Card.Body>
                </Card>
        )
    }
}

export default Article;