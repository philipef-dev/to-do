import { useState } from 'react';
import { Area, Container, Header } from './App.styles';
import { Item } from './types/Item';

export const App = () => {

  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Limpar Quintal', done: false },
    { id: 2, name: 'Lavar Roupa', done: false },
    { id: 3, name: 'Fazer Comida', done: false }
  ]);

  return (
    <Container>
      <Area>
        <Header>
          <h1>Lista de Tarefas</h1>
        </Header>
        {list.map((item, index) => (
          <div key={index}>
            {item.name}
          </div>

        ))}
      </Area>
    </Container>
  )
}

