import ShoppingCartProduct from '../components/ShoppingCartProduct';
import { useSelector} from 'react-redux';

function OrdersPage() {
  const orders = useSelector(state => state.orders.value);
  return (
    <div className="page-wrapper">
      <div className="container">
        <div>
          {
            orders.map((orderItem, orderIndex) => {
              return(
                <div key={orderIndex} className="my-20">
                  <h2 className="text-xl font-semibold mb-5 text-primary">
                    Sipariş ID: 
                    <span className=""> { orderIndex + 1 }</span>
                  </h2>
                  {
                    orderItem.map((productItem, productIndex) => {
                      return(
                        <ShoppingCartProduct key={productIndex} product={productItem} />
                      )
                    })
                  }
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default OrdersPage