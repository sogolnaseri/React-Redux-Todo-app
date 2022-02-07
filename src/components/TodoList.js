import React from "react"
import styled from "styled-components";

const CompletedStyled = styled.li`
text-decoration: line-through;
color: red;
list-style: none;
margin-bottom: 4px;
border: 2px solid black;
border-radius: 10px;
background-color: rgb(236, 236, 236, 0.6);
margin: 20px 400px 20px 400px;
`;

const DeleteButton = styled.button`
float: right;
padding: 4px 10px 1px 10px;
border-radius: 20px;
border: none;
cursor: pointer;
background-color: red;
color: white;
`;

const CompletedButton = styled.button`
float: right;
padding: 4px 10px 1px 10px;
border-radius: 20px;
border: none;
cursor: pointer;
background-color: green;
margin-left: 10px;
color: white;
`;

const StyledLi = styled.li`
list-style: none;
margin-bottom: 4px;
border: 2px solid black;
border-radius: 10px;
background-color: rgb(236, 236, 236, 0.6);
color: black;
margin: 20px 400px 20px 400px;
`;

export const TodoList = ({ taskList, deleteTask, completeTask }) => {

    return (
        <>
            {
                taskList.length > 0 && (
                    <ul>
                        {taskList.map(t => (
                            <>
                                {t.isCompleted ? (<CompletedStyled>
                                    {t.value}
                                    <DeleteButton onClick={() => deleteTask(t)}>Delete</DeleteButton>
                                    <CompletedButton onClick={() => completeTask(t)}>Complete</CompletedButton>
                                </CompletedStyled>) : (<StyledLi>
                                    {t.value}
                                    <DeleteButton onClick={() => deleteTask(t)}>Delete</DeleteButton>
                                    <CompletedButton onClick={() => completeTask(t)}>Complete</CompletedButton>
                                </StyledLi>)}
                            </>
                        ))}
                    </ul>
                )
            }
        </>
    );
}