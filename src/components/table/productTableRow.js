
import { Button } from '../../atoms/Buttons/button';
import PropTypes from 'prop-types';

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

  ProductTableRowtr.propTypes = {
    onCartAdd: PropTypes.func,
    onCartRemove: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired
  }