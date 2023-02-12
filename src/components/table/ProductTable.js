import { useCart } from "../../providers/CartProvider/CartProvider";
import { ProductTableRowtr } from "./productTableRow";


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
      return <ProductTableRowtr key={`product - ${productId}`} product={item} productId={+productId} //numberად აკეთებს პლიუსი სტრინგს
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