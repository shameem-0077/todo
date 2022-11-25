import Delete from "../assets/delete.svg";
import React, { useContext } from "react";
import { Item, SetItem, Completed, SetCompleted } from "../../App";
import styled from "styled-components";
import { LiItem, Content } from "./CompletedTask";

function UpcomingTask() {
  const item = useContext(Item);
  const setItem = useContext(SetItem);
  const completed = useContext(Completed);
  const setCompleted = useContext(SetCompleted);

  function DeleteItem(id) {
    let defult_array = item.items;

    let new_item = defult_array.filter((item) => item.id !== id);
    setItem({
      items: new_item,
    });
  }

  function TaskCompleted(id) {
    let defult_array = item.items;

    let add_to_completed = defult_array.filter((item) => item.id === id);

    let new_item = {
      id: add_to_completed[0].id,
      title: add_to_completed[0].title,
    };

    setCompleted({
      completed_task: [...completed.completed_task, new_item],
    });

    DeleteItem(id);
  }

  return item.items.map((item) => (
    <li key={item.id}>
      <LiItem>
        <Content>
          <div className="circle">
            <BlueBtn
              className="top-btn"
              onClick={() => TaskCompleted(item.id)}
            ></BlueBtn>
          </div>
          <p>
            {item.id},{item.title}
          </p>
        </Content>

        <Btn onClick={() => DeleteItem(item.id)}>
          <img alt="delete" src={Delete} />
        </Btn>
      </LiItem>
    </li>
  ));
}

const BlueBtn = styled.button `
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fff;
  border: 2px;
  border-style: solid;
  border-color: blue;
  margin-right: 10px;
`;

export const Btn = styled.button `
  border: none;
  background: none;
`;

export default UpcomingTask;
