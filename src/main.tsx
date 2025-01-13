import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./App.css";
import { TodoActionDispatchers } from "./data/TodoActionDispatchers.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

TodoActionDispatchers.addTodo("Hello, world 1");
TodoActionDispatchers.addTodo("Hello, world 2");
TodoActionDispatchers.addTodo("Hello, world 3");
