import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap'

class TodoList extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            showModal: false
        };

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.onHide = this.onHide.bind(this);
    }

    close() {
        this.setState({ showModal: false });
    }

    onHide() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }

    render() {
        return (
            <div>
                <Modal show={true} animation={false} onHide={this.close} >
                    <Modal.Header>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        I will not close if you click outside me. Don't even try to press
                        escape key.
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.close}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                    </Modal.Footer>
                </Modal>
                <Button variant="primary" onClick={this.open}>
                    Launch demo modal
                </Button>
            </div>
        );
    }
}

export default TodoList;
