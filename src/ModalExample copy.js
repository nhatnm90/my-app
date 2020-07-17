import React, { Component } from 'react';
// import ConfirmModal from './components/todoList/Control/ConfirmModal'
// import mockItems from './mockData/tasks'
// import Modal from 'react-modal'
import { Modal, Button } from 'react-bootstrap'

class TodoList extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            showModal: false
        };

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }

    render() {
        return (
            <div>
                {/* <Modal
                    isOpen={this.state.showModal}
                    style={{
                        overlay: {
                            backgroundColor: 'grey'
                        },
                        content: {
                            position: 'absolute',
                            top: '40px',
                            left: '40px',
                            right: '40px',
                            bottom: '40px',
                            border: '1px solid #ccc',
                            background: '#fff',
                            overflow: 'auto',
                            WebkitOverflowScrolling: 'touch',
                            borderRadius: '4px',
                            outline: 'none',
                            padding: '20px'
                        }
                    }}
                >
                    <h2>Confirm</h2>
                    <p>MODAL</p>
                    <div>
                        <button onClick={this.close} type="button" className="btn btn-warning">Cancel</button>
                        <button onClick={this.close} type="button" className="btn btn-info">Confirm</button>
                    </div>
                </Modal> */}
                <Modal
                    show={true}
                >
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

                   {/* <button onClick={this.open} type="button" className="btn btn-info">Confirm</button> */}

            </div>
        );
    }
}

export default TodoList;
