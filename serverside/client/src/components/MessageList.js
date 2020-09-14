import React , {Component} from 'react';
import {Container , ListGroup , ListGroupItem ,Button } from 'reactstrap' 
import {CSSTransition , TransitionGroup} from 'react-transition-group'
import {connect} from 'react-redux'
import {getMessages  , deleteMessage} from '../actions/messageActions'
import PropTypes from 'prop-types'
class MessageList extends Component
{
    // state = {
    //     messages:[
    //         { id: uuid() , content:'First Message'},
    //         { id: uuid() , content:'Second Message'},
    //         { id: uuid() , content:'Third Message'},
    //         { id: uuid() , content:'Fourth Message'},

    //     ]
    // }
    componentDidMount(){
        this.props.getMessages();
    }

    onDeleteClick = (id) =>{
        this.props.deleteMessage(id)
    }

    render()
    {
        const {messages} = this.props.message ; 
        return(
            <Container>
               
                <ListGroup>
                    <TransitionGroup className='shopping-list'>
                        { messages.map(({id , content})=>(
                            <CSSTransition key={id} timeout={500} classNames='fade'>
                                <ListGroupItem>
                                    <Button
                                    className="remove-btn"
                                    color="danger"
                                    size='sm'
                                    onClick={this.onDeleteClick.bind(this , id)}
                                    >
                                        {/* &stimes; */} X
                                    </Button>
                                    {content}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

MessageList.propTypes = {
    getMessages:PropTypes.func.isRequired , 
    message : PropTypes.object.isRequired
 }

const mapStateToProps = (state) =>({
    message : state.message
})
export default connect (mapStateToProps , {getMessages})(MessageList) ; 