import React, {useState,useEffect} from 'react';
import uuid from 'react-uuid';
import { createRef } from 'react/cjs/react.production.min';


export default function Order({cart,removeFromCart,updateAmount}) {
  const [inputs,_] = useState([]);
  const [inputIndex, setInputIndex] = useState(-1);

  useEffect(() => {
    for (let i = 0;i < cart.length;i++) {
      inputs[i] = React.createRef();
    }
  }, [cart.length])
  
  useEffect(()=> {
    if (inputs.length > 0 && inputIndex > -1 && inputs[inputIndex].current !== null) {
      inputs[inputIndex].current.focus();
    }
  },[cart])

  function changeAmount(e,product,index) {
    updateAmount(e.target.value,product);
    setInputIndex(index);
  }

  let sum = 0;

  return (
    <div>
      <h3 className="header">Items in cart</h3>
      <table className="table">
        <tbody>
          {cart.map((product,index) => {
            sum+=parseFloat(product.price);
            return (
              <tr key={uuid()}>
                <td>{product.name}</td>
                <td>{product.price} €</td>
                <td>
                  <input ref={inputs[index]} style={{width: '60px'}} value={product.amount} onChange={e => changeAmount(e,product,index)} />
                </td>
                <td><a href="#" onClick={() => removeFromCart(product)}>Delete</a></td>
              </tr>
            )
            })}
          <tr key={uuid()}>
            <td></td>
            <td>{sum.toFixed(2)} €</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}





/*
export default function Order({cart, removeFromCart, updateAmount}) {

  const [inputs,_] = useState([]);
  const [inputIndex, setInputIndex] = useState(-1);

  useEffect(() => {
    for (let i = 0;i < cart.length;i++) {
      inputs[i] = React.createRef();
    }
  }, [cart.length])
  
  useEffect(()=> {
    if (inputs.length > 0 && inputIndex > -1 && inputs[inputIndex].current !== null) {
      inputs[inputIndex].current.focus();
    }
  },[cart])

  function changeAmount(e,product,index) {
    updateAmount(e.target.value,product);
    setInputIndex(index);
  }

  let sum = 0;

  return (
    <section className="h-100">
  <div className="container h-100 py-5">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-10">

        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-normal mb-0 text-black">Ostoskori</h3>
        </div>

        <div className="card rounded-3 mb-4">
          <div className="card-body p-4">
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-md-2 col-lg-2 col-xl-2">
                <img src={product.kuva} className="img-fluid rounded-3" alt="tuotekuva"/>
              </div>
              <div className="col-md-3 col-lg-3 col-xl-3">
                <p className="lead fw-normal mb-2">{product.tuotenimi}</p>
              </div>
              <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                <button className="btn btn-link px-2"
                  onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                  <i className="fas fa-minus"></i>
                </button>

                <input id="form1" min="0" name="quantity" value="2" type="number"
                  className="form-control form-control-sm" />

                <button className="btn btn-link px-2"
                  onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h5 className="mb-0">{product.hinta}</h5>
              </div>
              <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                <a href="#!" className="text-danger"><i className="fas fa-trash fa-lg"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <button type="button" className="btn btn-outline-dark btn-block btn-lg">Jatka kassalle</button>
          </div>
        </div>
        <div className="card">
          <div className="card-body">

          </div>
        </div>

      </div>
    </div>
  </div>
</section>
  )
} */
