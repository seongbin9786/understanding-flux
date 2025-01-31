import { ChangeEvent, KeyboardEvent } from "react";
import { TodoActionDispatchers } from "../data/TodoActionDispatchers";
import { TodoStoreState } from "../data/TodoStore";

interface CommonViewProps {
  todos: TodoStoreState;
  draftText: string;
  addTodo: typeof TodoActionDispatchers.addTodo;
  deleteTodo: typeof TodoActionDispatchers.deleteTodo;
  toggleTodo: typeof TodoActionDispatchers.toggleTodo;
  updateDraft: typeof TodoActionDispatchers.updateDraft;
}

export const TodoView = (props: CommonViewProps) => {
  return (
    <div>
      <Header {...props} />
      <Main {...props} />
      <Footer {...props} />
    </div>
  );
};

const Header = (props: CommonViewProps) => {
  return (
    <header id="header">
      <h1>todos</h1>
      <NewTodo {...props} />
    </header>
  );
};

const NewTodo = (props: CommonViewProps) => {
  const ENTER_KEY_CODE = 13;

  const addTodo = () => props.addTodo(props.draftText);
  const onBlur = () => addTodo();
  const onChange = (event: ChangeEvent<HTMLInputElement>) =>
    props.updateDraft(event.target.value);
  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === ENTER_KEY_CODE) {
      addTodo();
    }
  };

  return (
    <input
      autoFocus={true}
      id="new-todo"
      placeholder="What needs to be done?"
      value={props.draftText}
      onBlur={onBlur}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
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
