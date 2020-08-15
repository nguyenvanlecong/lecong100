import React from 'react'
import PropTypes from 'prop-types'

const Home = ({item}) => {
    return (
      <div>
         <section className="latest-products spad">
        <div className="container">
          <div className="product-filter">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="section-title">
                  <h2>Latest Products</h2>
                </div>
                <ul className="product-controls">
                  <li data-filter="*">All</li>
                  <li data-filter=".dresses">Dresses</li>
                  <li data-filter=".bags">Bags</li>
                  <li data-filter=".shoes">Shoes</li>
                  <li data-filter=".accesories">Accesories</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row" id="product-list">
            {item.map(({name,price,image}) => (
            <div className="col-lg-3 col-sm-6 mix all dresses bags">
              <div className="single-product-item">
                <figure>
                  <a href="#"><img src={image} alt="" /></a>
                  <div className="p-status">new</div>
                </figure>
                <div className="product-text">
            <h6>{name}</h6>
                  <p>${price}</p>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
      </div>
      
   
    )
}

Home.propTypes = {

}

export default Home
