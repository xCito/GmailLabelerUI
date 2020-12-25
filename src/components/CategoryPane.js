import React from 'react';
import CategoryItem from './CategoryItem';

let dummy = [
    { name: 'Shipping', count: 4 },
    { name: 'Finance', count: 3 },
    { name: 'School', count: 6 },
];
export default function CategoryPane() {
    const [categories, setCategories] = React.useState(dummy);
    const drop = () => {
        console.log('dropped in category pane');
        console.log(Date.now());
        setCategories([...categories, { name: 'New Item', count: 1}]);
    };

    return (
        <div className='pane-container'>
            <h2 className="pane-header">Category</h2>
            <div className="pane-body category-list" onDrop={drop} onDragOver={(e) => e.preventDefault()}>
                {categories.map( (cate,i) => <CategoryItem key={cate.name + cate.count + i} name={cate.name} count={cate.count}/>)}
            </div>
            <div className="pane-footer"></div>
        </div>
    );
}