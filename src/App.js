import "./App.css";
import CompletedTask from "./components/screens/CompletedTask";
import UpcomingTask from "./components/screens/upcomingTask";
import React, { useState } from "react";
import styled from "styled-components";
import Plus from "./components/assets/plus.svg"

export const Item = React.createContext();
export const SetItem = React.createContext();
export const Input = React.createContext();
export const Completed = React.createContext();
export const SetCompleted = React.createContext();

function App() {
  let [input, setInput] = useState("");
  const [item, setItem] = useState({
    items: [
      {
        id: 1,
        title: "Buy 1kg Tomato",
      },
      {
        id: 2,
        title: "Buy 2kg Onian",
      },
      {
        id: 3,
        title: "Visit a friend",
      },
      {
        id: 4,
        title: "Clean the House",
      },
    ],
  });

  const [completed, setCompleted] = useState({
    completed_task: [
      {
        id: 5,
        title: "Washing Clothes",
      },
      {
        id: 6,
        title: "Play Cricket",
      },
      {
        id: 7,
        title: "1 km walking",
      },
      {
        id: 8,
        title: "Do Homework",
      },
    ],
  });

  let [id, setId] = useState(
    item.items.length + completed.completed_task.length + 1
  );
  function UpdateItem() {
    let new_item = {
      id: id,
      title: input,
    };
    setItem({
      items: [...item.items, new_item],
    });
    setInput((input = ""));

    setId((prevId) => prevId + 1);
  }

  return (
    <>
      <div className="head-div">
        <Wrapper textalign="center">
          <h1>Todo List</h1>
        </Wrapper>
      </div>
      <div className="task-div">
        <Wrapper>
          <h2>Things to be done</h2>
          <Ul color="black">
            <Item.Provider value={item}>
              <SetItem.Provider value={setItem}>
                <Input.Provider value={input}>
                  <Completed.Provider value={completed}>
                    <SetCompleted.Provider value={setCompleted}>
                      <UpcomingTask />
                    </SetCompleted.Provider>
                  </Completed.Provider>
                </Input.Provider>
              </SetItem.Provider>
            </Item.Provider>
          </Ul>
        </Wrapper>
      </div>
      <div className="input-sec">
        <Wrapper>
          <InputSec
            placeholder="Type new task"
            value={input}
            onChange={(e) => {
              setInput((input = e.target.value));
            }}
          />
          <InputBtn onClick={UpdateItem}>Add New</InputBtn>
        </Wrapper>
      </div>
      <div className="completed-sec">
        <Wrapper>
          <h1>Completed</h1>
          <Ul color="lightgreen">
            <Item.Provider value={item}>
              <SetItem.Provider value={setItem}>
                <Input.Provider value={input}>
                  <Completed.Provider value={completed}>
                    <SetCompleted.Provider value={setCompleted}>
                      <CompletedTask />
                    </SetCompleted.Provider>
                  </Completed.Provider>
                </Input.Provider>
              </SetItem.Provider>
            </Item.Provider>
          </Ul>
        </Wrapper>
      </div>
    </>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
  width: 60%;
  text-align: ${({ textalign }) => textalign};
  border-left: 1px solid grey;
  padding: 10px 200px;
  border-right: 1px solid grey;
`;

const InputSec = styled.input`
  width: 80%;
  border: none none none 1px;
  border-style: none none none solid;
  border-color: none none none black;

  background-image: url(${Plus});
  background-repeat: no-repeat;
  padding-left: 20px;
  background-position: 2px center;
  color: grey;
`;

const InputBtn = styled.button`
  width: 20%;
  padding: 10px;
  color: white;
  background-color: black;
`;

const Ul = styled.ul`
  list-style: none;
  color: ${({ color }) => color};
`;

export default App;
