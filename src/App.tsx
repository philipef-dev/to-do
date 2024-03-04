import { useState } from 'react';
import { Area, Container, Header } from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddItems } from './components/AddItem';

export const App = () => {

  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Limpar Quintal', done: false },
    { id: 2, name: 'Lavar Roupa', done: true },
    { id: 3, name: 'Fazer Comida', done: false }
  ]);

  return (
    <Container>
      <Area>
        <Header>
          <h1>Lista de Tarefas</h1>
        </Header>
        <AddItems />
        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </Area>
    </Container>
  )
}

