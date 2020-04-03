import React, { Component } from 'react';
import Post from '../CreatePost/post';
import Nav from '../NavBar/nav';
import { Container, Card } from 'react-bootstrap';
import './styles.scss'


export default class PostList extends Component {

    render() {
        return (
            <Container >
                <Nav />
                <Card className="box">
                <Card.Body>
                {this.props.ghostpost.map(messages =>
                    <Post
                    id={messages.id}
                    message={messages.message}
                    time={messages.time}
                    total_count={messages.total_count}
                    />
                )}
                </Card.Body>
                </Card>
            
            </Container>
        )
    }
}