import { useState } from 'react';
import { Area, Container, Header } from './App.styles';
import { ListItem } from './components/ListItem';
import { AddItems } from './components/AddItem';
import { Item } from './types/Item';

export const App = () => {

  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Limpar Quintal', done: false },
    { id: 2, name: 'Lavar Roupa', done: true },
    { id: 3, name: 'Fazer Comida', done: false }
  ]);

  const handleAddTask = (taskName: string) => {
    const newList = [...list]
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList)
  }

  return (
    <Container>
      <Area>
        <Header>
          <h1>Lista de Tarefas</h1>
        </Header>
        <AddItems onEnter={handleAddTask} />
        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </Area>
    </Container>
  )
}

