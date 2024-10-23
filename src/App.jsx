import {  useState } from "react";
import Bottles from "./components/Bottles/Bottles";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Footer from "./components/Footer/Footer";
import { addToLs,  } from "./utilities/Localstroge";

const App = () => {


// add to cart 
const [cart, setCart] = useState([]);


// add to cart 
const handleCart = bottle => {
 // console.log(bottle)
  const newCart = [...cart, bottle];
  setCart(newCart);
  // add to local Storage
  addToLs(bottle.id);
}




// remove cart 
const MySwal = withReactContent(Swal);
const handleRemoveCart = (id) => {
  MySwal.fire({
    title: 'Are you sure?',
    text: "Do you want to remove this item from your cart?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, remove it!',
    cancelButtonText: 'Cancel',
  }).then((result) => {
    if (result.isConfirmed) {
      const remainingCart = cart.filter((bottle) => bottle.id !== id);
      setCart(remainingCart);

      // Success Alert
      MySwal.fire(
        'Removed!',
        'The item has been removed from your cart.',
        'success'
      );
    }
  });
};

  return (
    <div>
      {/* header navbar section */}
      <Header cart={cart}></Header>
      {/* water bottle section */}
      <div className="md:flex w-11/12 mx-auto gap-5 my-5">
      <Bottles handleCart={handleCart}></Bottles>
      <Cart cart={cart} handleRemoveCart={handleRemoveCart}></Cart>
      </div>
      {/* footer section  */}
      <Footer></Footer>
    </div>
  );
};

export default App;