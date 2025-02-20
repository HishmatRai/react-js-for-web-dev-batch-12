import React, { Suspense, useState } from "react";
import Navbar from "./components/navbar";
const About = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [updateFormVisiable, setUpdateFormVisiable] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [updateTodo,setUpdateTodo] = useState("")
  const addHandler = () => {
    // let newTodo = [];
    // newTodo.push(input);
    setTodos([...todos, input]);
    // console.log("newTodo", newTodo);

    // setTodos(input);
    setInput("");
  };
  // edit
  const editHandler = (index) => {
    // console.log("edit", index);
    // let editTodo = prompt("Edit todo", todos[index]);
    // todos[index] = editTodo; // []
    // setTodos([...todos]);
    todos[index] = updateTodo
    setUpdateFormVisiable(false);
      setSelectedIndex(null);
      setTodos([...todos]);
  };
  // delete
  const deleteHandler = (index) => {
    console.log("delete", index);
    todos.splice(index, 1);
    setTodos([...todos]);
  };
  console.log("todos", todos);
  return (
    <div>
      <h1 style={{ backgroundColor: "green", color: "white" }}>About Page</h1>
    <Navbar />
      <h1>Todo App</h1>
      <input
        type="text"
        placeholder="Type...."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addHandler}>Add</button>
      <hr />
      {todos.length !== 0 && <p>Total Todos : {todos.length}</p>}

      {todos.length === 0 ? (
        <p>Todo not found!</p>
      ) : (
        todos.map((val, index) => {
          return (
            <div
              key={index}
              style={{
                border: "1px solid red",
                borderRadius: "5px",
                marginBottom: "5px",
                padding: "5px",
              }}
            >
              {index !== selectedIndex && (
                <div>
                  <span>{val}</span>
                  {/* <button onClick={() => editHandler(index)}>Edit</button> */}
                  <button
                    onClick={() => {
                      setUpdateFormVisiable(true);
                      setSelectedIndex(index);
                      setUpdateTodo(val)
                    }}
                  >
                    Edit
                  </button>
                  <button onClick={() => deleteHandler(index)}>Delete</button>
                </div>
              )}
              {updateFormVisiable && (
                <div>
                  {index === selectedIndex && (
                    <div>
                      <input value={updateTodo} onChange={(e)=> setUpdateTodo(e.target.value)}/>
                      <button
                        // onClick={() => {
                        //   setUpdateFormVisiable(false);
                        //   setSelectedIndex(null);
                        // }}
                        onClick={()=>editHandler(index)}
                      >
                        Update
                      </button>
                    </div>
                  )}
                </div>
              )}
              {/* {!updateFormVisiable ? (
                <div>
                  <span>{val}</span> */}
              {/* <button onClick={() => editHandler(index)}>Edit</button> */}
              {/* <button
                    onClick={() => {
                      setUpdateFormVisiable(true);
                      setSelectedIndex(index);
                    }}
                  >
                    Edit
                  </button>
                  <button onClick={() => deleteHandler(index)}>Delete</button>
                </div>
              ) : (
                <div>
                  {index === selectedIndex ? (
                    <div>
                      <input />
                      <button onClick={() => setUpdateFormVisiable(false)}>
                        Update
                      </button>
                    </div>
                  ) : null}
                </div>
              )} */}
            </div>
          );
        })
      )}
    </div>
  );
};
export default About;
