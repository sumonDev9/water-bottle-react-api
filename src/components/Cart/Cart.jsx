import PropTypes from 'prop-types';
import Carts from '../Carts/Carts';

const Cart = ({cart, handleRemoveCart}) => {
    
    return (
        <div className="md:w-1/3">
            <div className='border-2 border-[rgb(233, 233, 233)] p-3 rounded-lg mb-3 shadow'>
                <h1 className='text-center text-[#111111] font-bold text-xl '>Products Saved in Cart</h1>
            </div>
            {
                cart.map(carts => <Carts key={cart.id} handleRemoveCart={handleRemoveCart} carts={carts}></Carts>)
            }
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.object,
    handleRemoveCart: PropTypes.func
}
export default Cart;