import ProductItem from '../ProductItem';

function Products({ items, setCols }) {
    return (
        <div className={`grid grid-cols-${setCols} gap-5`}>
            {items.map((item, index) => {
                return <ProductItem key={index} data={item} />;
            })}
        </div>
    );
}

export default Products;
