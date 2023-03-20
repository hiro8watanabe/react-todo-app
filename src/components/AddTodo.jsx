import React from "react";

export const AddTodo = (props) => {
  console.log(props);
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <section>
      <input
        type="text"
        value={todoText}
        onChange={onChange}
        placeholder="ToDoを入力"
        disabled={disabled}
      />
      <button onClick={onClick} disabled={disabled}>
        追加
      </button>
    </section>
  );
};
