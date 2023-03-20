import React from "react";

export const AddTodo = (props) => {
  console.log(props);
  const { todoText, onChange, onClick } = props;
  return (
    <section>
      <input type="text" value={todoText} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </section>
  );
};
