import React , {Component} from 'react' ; 
import {
 Button , Modal ,ModalHeader , ModalBody ,Form , FormGroup , Label , Input 
}
from 'reactstrap' ; 

import { connect} from 'react-redux' ; 
import {addMessage} from '../actions/messageActions'
import {v1 as uuid}  from 'uuid'

class  MessageModel extends Component {
    state = {
        modal: false ,
        content  : ''
    }
    toggle = () =>{
        this.setState({
            modal:!this.state.modal
        })
    }

    onChange = (e)=>{
        this.setState({[e.target.content]:e.target.value})
    }

    onSubmit = e =>{
        e.preventDefault() ; 
        const newMessage = {
            id:uuid(),
            content: this.state.content
        } 
        this.props.addMessage(newMessage) ;
        this.toggle() ; 
    }
    render()
    {
        return(
            <div>
                <Button color="dark"
                style={{marginBottom:'2rem'}}
                onClick={this.toggle}
                >
                    Add Item 
                </Button>

                <Modal isOpen ={this.state.modal}
                toggle = {this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>
                        Add to messageList
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="Item">
                                    Item
                                </Label>
                                <Input type='text' content='content' id='message' placeholder onChange={this.onChange} />
                                <Button color="dark" style={{marginTop :"2rem"}} block>Add Message</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state =>  ({
    item:state.item
})  

export default connect(mapStateToProps , {addMessage })(MessageModel) ; 