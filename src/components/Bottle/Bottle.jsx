import PropTypes from 'prop-types';

const Bottle = ({bottle, handleCart}) => {
    const {name, price, img} = bottle;
    return (
        <div className="card card-compact rounded-lg border-2 border-[rgb(233, 233, 233)]">
        <figure className='px-4 pt-3 rounded-md'>
          <img
            className='rounded-md'
            src={img}
            alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-[#111111 font-semibold text-lg">{name}</h2>
          <p className='text-lg text-[#737373 font-medium'>${price}</p>
          <div className="card-actions w-full">
            <button onClick={() => handleCart(bottle)} className="btn w-full btn-accent text-white text-xl font-bold">Add to cart</button>
          </div>
        </div>
      </div>
    );
};

Bottle.propTypes = {
    bottle: PropTypes.array,
    handleCart: PropTypes.func
}

export default Bottle;