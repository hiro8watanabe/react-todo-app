import React from "react";
import styled from "styled-components";

type Props = {
  todos: string[];
  onClickReturn: (index: number) => void;
  onClickDelete: (index: number) => void;
};

export const CompleteTodos: React.FC<Props> = (props) => {
  const { todos, onClickReturn, onClickDelete } = props;
  return (
    <Section>
      <Title>完了リスト</Title>
      <List>
        {todos.map((todo, index) => {
          return (
            <Item key={todo}>
              <Text>{todo}</Text>
              <ButtonWrapper>
                <Button onClick={() => onClickReturn(index)}>戻す</Button>
                <Button onClick={() => onClickDelete(index)}>削除</Button>
              </ButtonWrapper>
            </Item>
          );
        })}
      </List>
    </Section>
  );
};

const Section = styled.section`
  margin-bottom: 16px;
  padding: 20px;
  background-color: #e7e7e7;
  border-radius: 8px;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 8px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 8px;
  background-color: #fff;
`;

const Text = styled.span`
  font-size: 1.1rem;
  flex-grow: 1;
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

const Button = styled.button`
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  background-color: #007aff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 8px;

  &:first-child {
    background-color: #00b34e;
  }

  &:hover {
    background-color: #0069d9;
  }
`;
