import React from 'react';
import AppNavbar from './components/AppNavbar'
import MessageList from './components/MessageList'
import {Provider} from 'react-redux'
// import store from './store'
import middleware from './middleware'
import reducer from './reducers'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MessageModel from './components/MessageModel'
import { createStore } from 'redux';
import { Container } from 'reactstrap';


const store = createStore(reducer, middleware)

function App() {
  return (
    <Provider store={store}>
    <div className="App">'
      <AppNavbar></AppNavbar>
      <Container>
      <MessageModel></MessageModel>
      <MessageList></MessageList>
      </Container>
    </div>
    </Provider>
  );
}

export default App;
