import React, {Component} from 'react';
import Form from "../../components/Form";
import TodoList from "../../components/TodoList";
import {observer} from "mobx-react";

class Index extends Component {
  render() {
    const { store } = this.props
    return (
      <div>
        TODO:
        <div>
          <h3 className="subtitle">Make a new To do</h3>
          <Form store={store}/>
        </div>
        <div className="card-container">
          {store.Todo.map((todo, i) => (
            <TodoList todo={todo} key={i}/>))}
        </div>
      </div>
    );
  }
}

export default observer(Index);