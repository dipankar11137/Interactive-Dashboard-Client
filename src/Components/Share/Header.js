import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BsFillCartDashFill, BsHeartFill } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa';
import { ImCross, ImSearch } from 'react-icons/im';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import '../CSS/search-bar.css';
import Product from '../Pages/Home/OurProducts/Product/Product';
const Header = () => {
  const [authUser] = useAuthState(auth);
  const [dbUser, setDbUser] = useState([]);
  const [heart, setHeart] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/user/${authUser?.email}`)
      .then(res => res.json())
      .then(data => setDbUser(data));
  }, [dbUser, authUser]);

  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    fetch('http://localhost:5000/allProduct')
      .then(res => res.json())
      .then(data => {
        setCards(data);
        setFilteredCards(data);
      });
  }, []);
  const handleSearch = e => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query === '') {
      setSearchOpen(false);
    }
    // Filter cards based on search query
    const filtered = cards.filter(card =>
      card.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCards(filtered);
  };
  const profilePic =
    'https://media.istockphoto.com/id/1393750072/vector/flat-white-icon-man-for-web-design-silhouette-flat-illustration-vector-illustration-stock.jpg?s=612x612&w=0&k=20&c=s9hO4SpyvrDIfELozPpiB_WtzQV9KhoMUP9R9gVohoU=';
  return (
    <div>
      <div className="flex ml-20">
        <div className="flex items-center">
          {' '}
          <Link to="/">
            {' '}
            <h1 className="text-3xl font-extrabold uppercase">
              Elec<span className="text-primary">tro</span> Li
              <span className="text-primary italic">gh</span>t
            </h1>
          </Link>
        </div>

        <div className="py-2  ml-20 flex">
          <input
            className="w-[500px] border-2 p-2 rounded-l-lg border-blue-200"
            placeholder="Search Hare"
            type="search"
            value={searchQuery}
            onChange={handleSearch}
          />
          {searchOpen ? (
            <button
              onClick={() => setSearchOpen(false)}
              className="px-3 bg-primary pt-[6px] pb-4 rounded-r-lg "
            >
              {' '}
              <ImCross className="text-3xl pt-1 -mb-2 text-red-50 hover:text-red-600" />
            </button>
          ) : (
            <button
              onClick={() => setSearchOpen(true)}
              className="px-3 bg-primary pt-[6px] pb-4 rounded-r-lg "
            >
              {' '}
              <ImSearch className="text-3xl pt-1 -mb-2 text-white hover:text-black" />
            </button>
          )}

          <div className="flex items-center ml-20 ">
            {heart ? (
              <BsHeartFill
                onClick={() => setHeart(false)}
                className="text-2xl cursor-pointer text-red-600 "
              />
            ) : (
              <FaRegHeart
                onClick={() => setHeart(true)}
                className="text-2xl cursor-pointer"
              />
            )}

            <div className="flex ml-10 ">
              <BsFillCartDashFill className="text-2xl mt-1" />
              <h1 className="text-2xl ml-1 font-bold">Cart</h1>
            </div>
            <div className="ml-5">
              {authUser && (
                <div className="avatar online">
                  <div className="w-10 rounded-full">
                    <img
                      className=" w-10 h-10 indicator-item indicator-center rounded-full"
                      src={dbUser[0]?.image || profilePic}
                      alt=""
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* search div */}
      {searchOpen ? (
        <div className="search-bar grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-3 px-20 pb-10">
          {' '}
          {filteredCards.map(product => (
            <Product
              key={product.id}
              title={product.name}
              product={product}
              setSearchOpen={setSearchOpen}
            />
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;
