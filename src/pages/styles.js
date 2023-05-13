import styled from "styled-components";
import { CheckCircleFill } from "@styled-icons/bootstrap/CheckCircleFill";
import { DeleteDismiss } from "@styled-icons/fluentui-system-filled/DeleteDismiss";

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
  max-width: 600px;
  width: 90%;
  margin: 0 auto;
  padding: 20px;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const TodoContainer = styled.div`
  margin-top: 40px;
  width: 100%;
  margin-bottom: 70px;
`;

export const TodoForm = styled.form`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
`;

export const TodoInput = styled.input`
  background: #6a6a6a;
  width: 420px;
  padding: 20px;
  font-size: 16px;
  border-radius: 999px;
  border: 1px solid #efa47a;
  margin-bottom: 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  outline: none;
  font-weight: 300;

  &:focus {
    border: 1px solid #efa47a;
  }
  &::placeholder {
    color: #efa47a;
    color: var(--secondary);
  }
  /* desabilitando a sugestão de texto */
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }
`;

export const TodoList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const TodoItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  margin-bottom: 10px;

  border-bottom: 1px solid #ccc;
`;

export const TodoText = styled.span`
  font-size: 20px;
  color: #fff;
  flex: 1;
`;

export const TodoHour = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin: -30px -20px;

  p {
    margin-left: 10px;
  }
`;

export const TodoCounterRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 20px;
  strong {
    bottom: 25px;
    margin: 0;
    font-size: 18px;
    color: #888888;
    font-weight: 300;
  }
  p {
    bottom: 25px;
    font-size: 18px;
    color: #efa47a;
    opacity: 0.4;
    margin: 0;
    font-weight: 900;
  }
`;

export const TodoCounter = styled.p`
  display: flex;
  align-items: center;
  font-size: 100px;
  text-align: left;
  margin: 0;
  color: #efa47a;
  margin-bottom: -30px;
`;

export const RemoveIcon = styled(DeleteDismiss)`
  width: 25px;
  margin-left: 8px;
  color: #efa47a;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

export const CheckIcon = styled(CheckCircleFill)`
  width: 20px;
  cursor: pointer;
  color: #2ed573;

  &:hover {
    opacity: 0.6;
  }
`;

export const CompletedTodoContainer = styled.div`
  margin-top: 40px;
  width: 100%;
`;

export const CompletedTodoTitle = styled.h2`
  text-align: left;
  font-size: 18px;
  color: #efa47a;
`;

export const CompletedTodoList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const CompletedTodoItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  margin-bottom: 10px;

  border-bottom: 1px solid #ccc;
`;

export const CompletedTodoText = styled.span`
  font-size: 16px;
  flex: 1;
  color: #fff;
  text-align: left;
  text-decoration: line-through;
`;

export const TodoDate = styled.span`
  font-size: 9px;
  margin: 10px;
  color: #6c757d;
`;

export const CompletedTodoDate = styled(TodoDate)`
  color: #fff;
`;
