import React, { useState, useEffect } from 'react'
import '../components/pages.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Products({ url }) {

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');

  let params = useParams();

  useEffect(() => {
    axios.get(url + 'products/getproducts.php/' + params.categoryId)
      .then((response) => {
        const json = response.data;
        setCategory(json.category);
        setProducts(json.products);
      }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error);
      })
  }, [params]);


  return (
    <div>
      <h3>{category}</h3>
      {products.map(product => (
        <div key={product.tuotenro}>
          {product.tuotenimi}
        </div>
      ))}
    </div>
  )
};

//<button className='btn btn-primary' type="button" onClick={e => addToCart(product)}>Lisää ostoskoriin</button> (tuotteen jälkeen)
