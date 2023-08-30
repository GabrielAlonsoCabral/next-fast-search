import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/navbar';
import Products from './components/products';

const ECommerceApp = () => {
  const [products, setProducts] = useState([]);

  const onSearch = (searchTerm:string)=>{
    axios
      .get(`http://localhost:3000/v1/products?search=${searchTerm}&limit=5`)
      .then((response) => {
        const products = response.data.data.products;
        setProducts(products);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }

  useEffect(()=>{
    onSearch('')
  },[])

  return (
    <main>
      <Navbar onSearch={onSearch}/>
      <div className='justify-center items-center'>
        <Products
          products={products}
        />
        
      </div>
    </main>
    // <div className="bg-gray-100 min-h-screen p-4">
    //   <div className="max-w-screen mx-auto">
    //     <header className="bg-white p-4">
    //       {/* Header content */}
    //       <nav>
    //         {/* Navigation links */}
    //       </nav>
    //     </header>

    //     <main className="bg-white p-4 rounded shadow-lg">
    //       <input
    //         type="text"
    //         placeholder="Search for products"
    //         value={searchTerm}
    //         onChange={(e) => setSearchTerm(e.target.value)}
    //         className="w-full p-2 border rounded text-black bg-white"
    //       />

    //       <ul className="mt-4">
    //         {suggestions.map((suggestion, index) => (
    //           <li key={index} className="mb-4 p-2 bg-white rounded shadow-md">
    //             <div className="flex items-center space-x-4">
    //               <div className="flex-shrink-0">
    //                 {/* You can add an image here if needed */}
    //               </div>
    //               <div className="flex-1 min-w-0">
    //                 <p className="text-sm font-medium text-gray-700 truncate">
    //                   {suggestion.title}
    //                 </p>
    //                 <p className="text-sm text-gray-500 truncate">
    //                   {suggestion.description}
    //                 </p>
    //               </div>
    //               <div className="text-base font-semibold text-gray-900">
    //                 R$ {suggestion.price}
    //               </div>
    //             </div>
    //           </li>
    //         ))}
    //       </ul>
    //     </main>

    //     <footer className="bg-white p-4">
    //       {/* Footer content */}
    //     </footer>
    //   </div>
    // </div>
  );
};

export default ECommerceApp;
