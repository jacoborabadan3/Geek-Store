import Item from "../Item/Item"

const ItemList = ({ producto }) => {
    return (
        <>
            {producto.map(product => (
                <Item product={product} key={product.id}/>
            ))}
        </>
    )
}

export default ItemList