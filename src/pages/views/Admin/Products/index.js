import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductsManager = ({ products, onRemove}) => {
    console.log(products)
    const removeHandle = (id) => {
         onRemove(id)
    }
    return (
        <div>
            {/* Page Heading */}
            <h1 className="h3 mb-2 text-gray-800">List Products</h1>
            
            {/* DataTales Example */}

            <Link className="btn btn-primary" to="/admin/product/add">Add</Link>

            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((pr, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{pr.name}</td>
                                        <td><img src={pr.image} width={50} alt="" /></td>
                                        <td>{pr.price}</td>
                                        <td>
                                            <Link className="btn btn-primary" to={`/admin/product/${pr.id}`}>Edit</Link>
                                            <button type="submit"  onClick={() => removeHandle(pr.id)} className="btn btn-danger">Remove</button>
                                            <Link className="btn btn-primary" to={`/admin/view/${pr.id}`}>Detail</Link>

                                        </td>
                                    </tr>
                                ))}


                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

ProductsManager.propTypes = {

}

export default ProductsManager
