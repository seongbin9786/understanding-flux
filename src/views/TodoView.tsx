import { TodoActionDispatchers } from "../data/TodoActionDispatchers";
import { TodoStoreState } from "../data/TodoStore";

interface CommonViewProps {
  todos: TodoStoreState;
  addTodo: typeof TodoActionDispatchers.addTodo;
  deleteTodo: typeof TodoActionDispatchers.deleteTodo;
  toggleTodo: typeof TodoActionDispatchers.toggleTodo;
}

export const TodoView = (props: CommonViewProps) => {
  return (
    <div>
      <Header />
      <Main {...props} />
      <Footer {...props} />
    </div>
  );
};

const Header = () => {
  return (
    <header id="header">
      <h1>todos</h1>
    </header>
  );
};

const Main = (props: CommonViewProps) => {
  if (props.todos.size === 0) {
    return null;
  }
  return (
    <section id="main">
      <ul id="todo-list">
        {[...props.todos.values()].reverse().map((todo) => (
          <li key={todo.id}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked={todo.complete}
                onChange={() => {
                  props.toggleTodo(todo.id);
                }}
              />
              <label>{todo.text}</label>
              <button
                className="destroy"
                onClick={() => {
                  props.deleteTodo(todo.id);
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

const Footer = (props: CommonViewProps) => {
  if (props.todos.size === 0) {
    return null;
  }
  return (
    <footer id="footer">
      <span id="todo-count">
        <strong>{props.todos.size}</strong>
        {" items left"}
      </span>
    </footer>
  );
};
