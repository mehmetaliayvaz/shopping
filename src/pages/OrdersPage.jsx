import ShoppingCartProduct from '../components/ShoppingCartProduct';
import { useSelector} from 'react-redux';

function OrdersPage() {
  const orders = useSelector(state => state.orders.value);
  return (
    <div className="page-wrapper">
      <div className="container">
        {
          orders.length > 0 ? (
          <div>
            {
              orders.map((item, idx) => orders[orders.length-1-idx]).map((orderItem, orderIndex) => {
                return(
                  <div key={orderIndex} className="my-20">
                    <h2 className="mb-5 text-xl font-semibold text-primary">
                      Sipariş ID: 
                      <span className=""> { orders.length - orderIndex }</span>
                    </h2>
                    {
                      orderItem.map((productItem, productIndex) => {
                        return(
                          <ShoppingCartProduct key={productIndex} product={productItem} isShoppingCart={false} />
                        )
                      })
                    }
                    <p className='p-5 font-semibold'>Toplam Tutar: { 
                      orderItem.reduce((total, product) => total + product.price * product.quantity, 0)
                    } ₺</p>
                  </div>
                )
              })
            }
          </div> ) : (
            <h1 className="py-20 text-3xl font-semibold text-center">Geçmiş siparişiniz bulunmamaktadır...</h1>
          )
        }
      </div>
    </div>
  )
}

export default OrdersPage