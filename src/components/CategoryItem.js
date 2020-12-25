export default function CategoryItem(props) {

    const drop = (e) => {
        e.stopPropagation();
        console.log('dropped in category ' + props.name);
        console.log(Date.now());
    }

    return (
        <div className="category-item-container" onDrop={drop} onDragOver={(e) => e.preventDefault()}>
            <span className="category-item-name">{props.name}</span>
            <div className="category-item-count">{props.count}</div>
        </div>
    );
}