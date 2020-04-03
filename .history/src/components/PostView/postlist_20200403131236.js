import React, { Component } from 'react';
import Post from '../CreatePost/post';
import Navi from '../NavBar/nav';
import { Container, Card } from 'react-bootstrap';
import './styles.scss'


export default class PostList extends Component {

    render() {
        return (
            <Container>
                <Navi />
                <Card className="box">
                <Card.Body>
                {this.props.ghostpost.map((messages, index) =>
                    <Post
                    id={messages.id}
                    message={messages.message}
                    time={messages.time}
                    total_count={messages.total_count}
                    key={index}
                    deletePost={this.props.deletePost}
                    secret_id={this.props.secret_id}
                    />
                )}
                </Card.Body>
                </Card>
            
            </Container>
        )
    }
}