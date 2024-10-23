import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import PropTypes from 'prop-types';
// import { getStoredCart } from "../../utilities/Localstroge";

const Bottles = ({handleCart}) => {
    const [bottles, setBottles] = useState([]);
    
    useEffect(() => {
        fetch('bottle.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])


    // load cart form local storage
    // useEffect(() => {
    //     if(bottles.length){
    //         const storedCart = getStoredCart();
    //         console.log(storedCart, bottles);
      
    //         const saveCart = [];
    //         for(const id of storedCart){
    //             console.log(id)
    //             const bottle = bottles.find(bottle => bottle.id === id);
    //             if(bottle){
    //                 saveCart.push(bottle)
    //             }
    //         }
    //         console.log('saved cart',saveCart);
    //         setBottles(saveCart);
    //     }
    //   },[bottles])
      
    return (
        <div className="md:w-2/3">
            {/* <h1>Bottol: {bottles.length}</h1> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    bottles.map(bottle => <Bottle key={bottle.id} handleCart={handleCart} bottle={bottle}></Bottle>)
                }
            </div>
        </div>
    );
};


Bottles.propTypes = {
  handleCart: PropTypes.func

}

export default Bottles;