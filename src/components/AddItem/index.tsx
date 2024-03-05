import { useState, KeyboardEvent } from 'react';

import { FaPlusCircle } from 'react-icons/fa';
import { Container } from "./styles";

type Props = {
    onEnter: (taskName: string) => void;
}

export const AddItems = ({ onEnter }: Props) => {
    const [inputText, setInputText] = useState('');

    const handleKeyUp = (e: KeyboardEvent) => {
        if (e.code === 'Enter' && inputText !== '') {
            onEnter(inputText);
            setInputText('');
        }
    }

    return (
        <Container>
            <div>
                <FaPlusCircle />
            </div>
            <input
                type='text'
                placeholder='Digite o nome de uma tarefa'
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />
        </Container>
    )
}