import React, { useState } from "react";

function App() {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["aaaa", "eeeee"]);
  const [completeTodos, setCompleteTodos] = useState(["iiiii"]);

  const onChangeTodoText = (e) => setTodoText(e.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const ocClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickReturn = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <section>
        <input type="text" value={todoText} onChange={onChangeTodoText} />
        <button onClick={() => onClickAdd()}>追加</button>
      </section>

      <section>
        <h2>タスク</h2>
        <div>
          <ul>
            {incompleteTodos.map((todo, index) => {
              return (
                <li key={todo}>
                  {todo}
                  <button onClick={() => onClickComplete(index)}>完了</button>
                  <button onClick={() => ocClickDelete(index)}>削除</button>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section>
        <h2>完了リスト</h2>
        <div>
          <ul>
            {completeTodos.map((todo, index) => {
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
    </>
  );
}

export default App;
