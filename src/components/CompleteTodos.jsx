import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickReturn } = props;
  return (
    <section>
      <h2>完了リスト</h2>
      <div>
        <ul>
          {todos.map((todo, index) => {
            return (
              <li key={todo}>
                {todo}
                <button onClick={() => onClickReturn(index)}>戻す</button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
