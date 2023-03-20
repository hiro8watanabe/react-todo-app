import React from "react";
import styled from "styled-components";

type Props = {
  todoText: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  disabled: boolean;
};

export const AddTodo: React.FC<Props> = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <Section disabled={disabled}>
      <Input
        type="text"
        value={todoText}
        onChange={onChange}
        placeholder="ToDoを入力"
        disabled={disabled}
      />
      <Button onClick={onClick} disabled={disabled}>
        追加
      </Button>
    </Section>
  );
};

const Section = styled.section<{ disabled: boolean }>`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  pointer-events: ${(props: any) => (props.disabled ? "none" : "auto")};
  margin-bottom: 16px;
  padding: 20px;
  background-color: #e7e7e7;
  border-radius: 8px;
`;

const Input = styled.input<{ disabled: boolean }>`
  padding: 8px;
  font-size: 16px;
  line-height: 2.4rem;
  border-radius: 8px;
  border: none;
  background-color: ${(props) => (props.disabled ? "#999" : "#fff")};
  margin-right: 8px;
  flex-grow: 1;
`;

const Button = styled.button<{ disabled: boolean }>`
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  background-color: ${(props) => (props.disabled ? "#999" : "#007aff")};
  color: #fff;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${(props: any) => (props.disabled ? "#999" : "#0069d9")};
  }
`;
