import Delete from "../assets/delete.svg";
import Revert from "../assets/revert.svg";
import GreenTick from "../assets/tick-green.svg"
import React, { useContext } from "react";
import styled from "styled-components";
import { Btn } from "./upcomingTask";

import { Item, SetItem, Completed, SetCompleted } from "../../App";

function CompletedTask() {
  const item = useContext(Item);
  const setItem = useContext(SetItem);
  const completed = useContext(Completed);
  const setCompleted = useContext(SetCompleted);

  function DeleteItem(id) {
    let defult_array = completed.completed_task;

    let delete_item = defult_array.filter((item) => item.id !== id);

    setCompleted({
      completed_task: delete_item,
    });
  }

  function RevertItem(id) {
    let defult_array = completed.completed_task;

    let revert_item = defult_array.filter((item) => item.id === id);
    let new_item = {
      id: revert_item[0].id,
      title: revert_item[0].title,
    };

    setItem({
      items: [...item.items, new_item],
    });

    DeleteItem(id);
  }

  return completed.completed_task.map((task) => (
    <li key={task.id}>
      <LiItem>
        <Content>
          <CircleBtn bgimage={GreenTick}></CircleBtn>
          <p>
            {task.id}, {task.title}
          </p>
        </Content>
        <div>
          <Btn onClick={() => RevertItem(task.id)}>
            <img alt="delete" src={Revert} />
          </Btn>
          <Btn onClick={() => DeleteItem(task.id)}>
            <img alt="delete" src={Delete} />
          </Btn>
        </div>
      </LiItem>
    </li>
  ));
}

const CircleBtn = styled.div `
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fff;
  border: 2px;
  border-style: solid;

  background-image: url(${({bgimage}) => bgimage});
  background-repeat: no-repeat;
  background-size: 10px;
  background-position: center;
  border-color: lightgreen;
  margin-right: 10px;
`;

export const Content = styled.div `
display: flex;
width: 40%;
align-items: center;
`

export const LiItem = styled.div `
display: flex;
justify-content: space-between;
`

export default CompletedTask;
