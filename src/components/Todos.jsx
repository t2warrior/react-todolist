import React from "react";

import Todo from "./Todo";

const Todos = () => {
  const todos = [
    {
      text: "Belajar 1React!"
    },
    {
      text: "Belajar Banyak React!"
    },
    {
      text: "Belajar 3React!"
    },
    {
      text: "Belajar 4React!"
    }
  ];

  return (
    <section className="todos">
      {todos.map(todo => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
