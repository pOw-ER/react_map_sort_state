import React, { Component } from 'react'
import TodoItem from './TodoItem'
import { v4 as uuidv4 } from 'uuid';

let todos = [
  {
    todo: 'Read a book',
    isComplete: true,
    importance: 20
  },
  {
    todo: 'Learn React',
    isComplete: true,
    importance: 100
  },
  {
    todo: 'Learn Node.js',
    isComplete: false,
    importance: 2
  }
]
class TodoList extends Component {
  state = {
    myTodos: todos.slice()
  }
  sortWithImportance = () => {
    console.log('clicked');
    this.setState({ myTodos: this.state.myTodos.sort((a, b) => a.importance - b.importance) });
  }
  render() {
    return (
      <section>
        {this.state.myTodos.map(elt =>
          <TodoItem
            key={uuidv4()}
            todo={elt.todo}
            isComplete={elt.isComplete}
            importance={elt.importance}
          />
        )}
        <button onClick={this.sortWithImportance}>sort With importance</button>
      </section>
    );
  }
}

export default TodoList;

// Stateless Function Component
// const TodoList = () => {
//   return (
//     <form action="">
//       {todos.map(elt =>
//         <TodoItem
//           key={uuidv4()}
//           todo={elt.todo}
//           isComplete={elt.isComplete}
//         />
//       )}
//     </form>
//   );
// }

// export default TodoList;
