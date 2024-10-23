import PropTypes from 'prop-types';
import { MdDelete } from "react-icons/md";

const Carts = ({carts, handleRemoveCart}) => {
    const {id, name, price, img} = carts;
    return (
        <div className='flex justify-between gap-3 border-2 border-[rgb(233, 233, 233)] mb-4 rounded-lg p-2'>
            <div className='flex gap-5'>
                <img src={img} className='w-24 rounded-lg' alt="" />
                <div>
                <h2 className='text-[#111111] text-xl font-semibold mb-4'>{name}</h2>
                <p className='text-[#111111] text-lg opacity-60 font-medium'>Price: ${price}</p>
                </div>
            </div>
            <div className='flex items-center mr-5'>
                <div onClick={() => handleRemoveCart(id)} className='text-4xl cursor-pointer'><MdDelete /></div>
            </div>
        </div>
    );
};

Carts.propTypes = {
    carts: PropTypes.object,
    handleRemoveCart: PropTypes.func
}

export default Carts;