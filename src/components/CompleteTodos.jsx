import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickReturn, onClickDelete } = props;
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
                <button onClick={() => onClickDelete(index)}>削除</button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
