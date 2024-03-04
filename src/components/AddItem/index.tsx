import { FaPlusCircle } from 'react-icons/fa'
import { Container } from "./styles"

export const AddItems = () => {
    return (
        <Container>
            <div>
                <FaPlusCircle />
            </div>
            <input
                type='text'
                placeholder='Digite o nome de uma tarefa'
            />

        </Container>

    )
}