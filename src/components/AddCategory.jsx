import { useState } from 'React';
import '../styles.css';

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length<=1) return;
        //setCategories(categories => [inputValue, ...categories]);
        setInputValue('');
        onNewCategory(inputValue.trim());
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                id="txtCategory"
                name="txtCategory"
                placeholder="Introduce la categoria"
                value={inputValue}
                onChange={onInputChange} 
            />
        </form>
    )
}
