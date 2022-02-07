import React, { useState, useRef, useEffect } from "react";
import { TodoList } from "./TodoList";
import { connect } from "react-redux";
import {
  addTaskAction,
  completeTaskAction,
  deleteTaskAction,
} from "../redux/actions";

const mapStateToProps = (state) => ({ taskList: state.taskList });

const mapDispatchToProps = {
  addTaskAction,
  completeTaskAction,
  deleteTaskAction,
};

export const UnConnectedTodoApp = ({
  taskList,
  addTaskAction,
  completeTaskAction,
  deleteTaskAction,
}) => {
  const [task, setTask] = useState("");
  //   const [taskList, setTaskList] = useState([]);
  const taskInput = useRef(null);

  // using react hooks to focus on inpput after user enter new name
  useEffect(() => {
    taskInput.current.focus();
  }, [task]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (task !== "") {
      //   const taskdetails = {
      //     id: Math.floor(Math.random() * 1000),
      //     value: task,
      //     isCompleted: false,
      //   };
      //   setTaskList([...taskList, taskdetails]);
      addTaskAction(task);
      setTask("");
    }
  };

  const deleteTask = (task) => {
    // const newTasks = taskList.filter((item) => item.id !== task.id);
    // setTaskList(newTasks);
    deleteTaskAction(task);
  };

  const completeTask = (task) => {
    // let updatedTasks = taskList.map((item) => {
    //   if (item.id === task.id) {
    //     item.isCompleted = true;
    //   }
    //   return item;
    // });
    // setTaskList(updatedTasks);
    completeTaskAction(task);
  };

  return (
    <div>
      <h1> you have {taskList.length} tasks </h1>
      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="Add Task here ..."
          name="text"
          id="text"
          onChange={handleChange}
          value={task}
          ref={taskInput}
        ></input>
        <button type="submit" onClick={(e) => addTask(e)}>
          Add{" "}
        </button>
      </form>
      <TodoList
        taskList={taskList}
        deleteTask={deleteTask}
        completeTask={completeTask}
      />
    </div>
  );
};

export const TodoApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnConnectedTodoApp);