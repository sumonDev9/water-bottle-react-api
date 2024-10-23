import PropTypes from 'prop-types';

const Header = ({cart}) => {
    // console.log(cart)
    return (
        <header className="bg-blue-200  py-2 sticky top-0 z-10">
            <nav className="w-11/12 mx-auto">
                <div className="navbar">
                    <div className="flex-1">
                        <a className="text-2xl font-bold">Bottle Shop</a>
                    </div>
                    <div className="flex-none">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <span className="badge badge-sm indicator-item text-base">{cart.length}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};
Header.propTypes = {
    cart: PropTypes.array,
 
}

export default Header;