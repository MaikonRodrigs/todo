import styled from "styled-components";
import { CheckCircleFill } from "@styled-icons/bootstrap/CheckCircleFill";
import { DeleteDismiss } from "@styled-icons/fluentui-system-filled/DeleteDismiss";

export const Container = styled.div`
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
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 420px;
  margin-bottom: 80px;
`;

export const TodoForm = styled.form`
  position: fixed;
  bottom: 0;
  left: 22px;
  right: 0;
  width: 100%;
  /* height: 20px; */
`;

export const TodoInput = styled.input`
  background: #fff;
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
  border-bottom: 1px solid #ccc;

  padding: 10px 0 20px;

  width: 420px;
`;

export const TodoText = styled.span`
  font-size: 16px;
  color: #888888;
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
  width: 20px;
  margin-left: 4px;
  color: #efa47a;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

export const CheckIcon = styled(CheckCircleFill)`
  width: 15px;
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
  color: #ccc;
  text-align: left;
`;

export const TodoDate = styled.span`
  font-size: 9px;
  margin: 10px;
  color: #6c757d;
`;

export const CompletedTodoDate = styled(TodoDate)`
  color: #fff;
`;
