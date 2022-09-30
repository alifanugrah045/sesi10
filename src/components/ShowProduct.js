import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts, productSelectors, deleteProducts } from "../features/productSlice";
import { Link } from "react-router-dom";

const ShowProduct = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const products = useSelector(productSelectors.selectAll);

  return (
    <div className="card mt-5 p-2">
      <div class="adddata">
        <Link to="add" className="btn btn-primary btn-sm">
          Tambah Products
        </Link>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product?.id}>
              <td>{index + 1}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>
                <Link to={`edit/${product.id}`} className="btn btn-info btn-sm mr-2">edit</Link>
                <button onClick={() => dispatch(deleteProducts(product.id))} className="btn btn-danger btn-sm">hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowProduct;
