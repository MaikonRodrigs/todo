import React, { useState, useEffect } from "react";
import {
  Container,
  TodoHour,
  TodoCounterRow,
  TodoContainer,
  TodoForm,
  TodoInput,
  TodoList,
  TodoItem,
  TodoText,
  TodoCounter,
  RemoveIcon,
  CheckIcon,
  CompletedTodoContainer,
  CompletedTodoTitle,
  CompletedTodoList,
  CompletedTodoItem,
  CompletedTodoText,
} from "./styles";


function Home() {
  const [time, setTime] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [completedTodos, setCompletedTodos] = useState(
    JSON.parse(localStorage.getItem("completedTodos")) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("completedTodos", JSON.stringify(completedTodos));
  }, [completedTodos]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 60000);
    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1).toString().padStart(2, "0")}`;


  function handleAddTodo(event) {
    event.preventDefault();
    const inputValue = event.target.elements.todoInput.value;
    if (inputValue.trim()) {
      setTodos((prevTodos) => [...prevTodos, { text: inputValue, date: new Date() }]);
      event.target.elements.todoInput.value = "";
    }
  }

  function handleRemoveTodo(index) {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  }

  function handleCompleteTodo(index) {
    const todo = todos[index];
    setCompletedTodos((prevCompletedTodos) => [...prevCompletedTodos, { text: todo.text, date: todo.date, completedDate: new Date() },]);
    handleRemoveTodo(index);
  }


  return (
    <Container>
      <TodoHour>
        <p>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
        {/* <p>{formattedDate}</p> */}
      </TodoHour>
      <TodoCounter>{todos.length}
        <TodoCounterRow>
          <strong>tasks for today </strong>
          <p>{formattedDate}</p>
        </TodoCounterRow>
      </TodoCounter>
      <TodoContainer>
        {/* <form onSubmit={handleAddTodo}>
          <TodoInput type="text" id="todoInput" placeholder="Conte-me mais..." autoComplete="off" />
        </form> */}
        <TodoList>
          {todos.map((todo, index) => (
            <TodoItem key={index}>
              <TodoText>{todo.text}</TodoText>
              {/* <TodoDate>{todo.date.toLocaleString()}</TodoDate> */}
              <div>
                <CheckIcon onClick={() => handleCompleteTodo(index)}>
                  ✓
                </CheckIcon>
                <RemoveIcon onClick={() => handleRemoveTodo(index)}>
                  X
                </RemoveIcon>
              </div>
            </TodoItem>
          ))}
        </TodoList>

        {completedTodos.length > 0 && (
          <CompletedTodoContainer>
            <CompletedTodoTitle>Completed</CompletedTodoTitle>
            <CompletedTodoList>
              {completedTodos.map((todo, index) => (
                <CompletedTodoItem key={index}>
                  <CompletedTodoText>{todo.text}</CompletedTodoText>
                  {/* <CompletedTodoDate>
                    Completed on: {todo.completedDate.toLocaleString()}
                  </CompletedTodoDate> */}
                  <RemoveIcon
                    onClick={() =>
                      setCompletedTodos((prevCompletedTodos) =>
                        prevCompletedTodos.filter((_, i) => i !== index)
                      )
                    }
                  >
                    X
                  </RemoveIcon>
                </CompletedTodoItem>
              ))}
            </CompletedTodoList>
          </CompletedTodoContainer>
        )}
        <TodoForm onSubmit={handleAddTodo}>
          <TodoInput type="text" id="todoInput" placeholder="Conte-me mais..." autoComplete="off" />
        </TodoForm>
      </TodoContainer>
    </Container>
  );
}

export default Home;
