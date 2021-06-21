import './App.css';
import Header from "./myComponents/Header"
import Todos from "./myComponents/Todos"
import Footer from "./myComponents/Footer"
import AddTodo from "./myComponents/addTodo"

import React, { useEffect, useState } from "react";

function App() {
  let intTodo;
  if (localStorage.getItem("todos") === null) {
    intTodo = [];
  }
  else{
    intTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("i an on delete", todo);
    setTodos(todos.filter((efw) => {
      return efw !== todo;
    }))
    localStorage.getItem("todos");
  }
  let [todos, setTodos] = useState(intTodo);
  const addTodo = (title, desc) => {
    console.log(title, desc);
    let sno;
    if (todos.length == 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
   
    // if (localStorage.getItem("todos")) {
     
    // }

  }
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    
  }, [todos])
  return (
    <>
      <Header title="Subham Todos list" searchBar={true} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
