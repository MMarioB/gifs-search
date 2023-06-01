import { useState } from 'React';
import { AddCategory, GifGrid} from './components'
import './styles.css';

export const GifSearchApp = () => {
    const [categories, setCategories] = useState(['Dragon Ball']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }
    return (
        <>
            <h1>Gif Search App</h1>
            <AddCategory
                onNewCategory={(value) => onAddCategory(value)}
            />
            {
                categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    )
}