import { useCart } from "../../providers/CartProvider/CartProvider";
import { Button } from '../../atoms/Buttons/button';


export const ProductTableRowtr = ({ product, productId, onCartAdd, onCartRemove }) => {
  return (
    <tr>
      <th scope="row">{productId}</th>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>რაოდენობა - {product.qty}, სულ {Math.round(product.price * product.qty)}</td>
      <td>
        <div className="btn-group">
          <Button className='btn btn-outline-success' text='➕' onClick={onCartAdd} />
          <Button className='btn btn-outline-warning' text='➖' onClick={onCartRemove} />
        </div>
      </td>
    </tr>
  )
}



export const ProductTable = () => {

  const { addNewItem, removeItem, cart } = useCart();
  // console.log('ee',cart);
  // console.log('ssee', Object.entries(cart.items));
  const renderProducts = () => {
    const cartiItems = Object.entries(cart.items);

    if (cartiItems.length === 0) {
      return (
        <tr>
          <td colSpan="5">
            <h3 className="text-center">Cart is Empty</h3>
          </td>
        </tr>
      )
    }
    return cartiItems.map(([productId, item]) => {
      const currentItem = {
        ...item,
        id: productId
      }
      return <ProductTableRowtr key={`product - ${productId}`} product={item} productId={productId}
        onCartAdd={() => addNewItem(currentItem)}
        onCartRemove={() => removeItem(currentItem)} />
    })
  }


  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">დასახელება</th>
          <th scope="col">ფასი</th>
          <th scope="col">რაოდენობა</th>
          <th scope="col">მოქმედება</th>
        </tr>
      </thead>
      <tbody className="table-group-divider">
        {renderProducts()}
      </tbody>
    </table>
  )
}