import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <section>
      <h2>タスク</h2>
      <div>
        <ul>
          {todos.map((todo, index) => {
            return (
              <li key={todo}>
                {todo}
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
