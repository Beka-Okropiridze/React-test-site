
import productsData from '../../products.json'


export const ProductItem = ({product}) => {
return (
   <div>
        <h4> {product.name}, ღირებულება - {product.price} 
        </h4>
        <h6>
            {product.stock ? 'მარაგშია' : 'არ არის მარაგში'}, კატეგორია - {product.category}
        </h6>
   </div>
)
}

export const renderProducts = () => {
//     const rows = [];
//     let lastCategory = null;

//     productsData.forEach( product => {
//         if (product.category !== lastCategory) {

//         }
//     })
// }


    return (
        <div className="row shadow my-3 p-3">
            <h3>Productss</h3>
            <hr />
            {productsData.map((item, index) => {
                return <ProductItem productsi={item} key={index} />
            })}
        </div>
    )
}