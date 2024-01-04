import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  productAction,
  deleteProducts,
} from "../../../../redux/productSlice";
import Spin from "../../../others/Spin";
import styles from "../../../styles/ProductsManagement.module.css";
import clsx from "clsx";
import { Link } from "react-router-dom";
import Pagination from "react-bootstrap/Pagination";
import Button from "react-bootstrap/Button";
// import { Switch } from "antd";
// import { Select } from "antd";
import ProductForm from "./ProductForm";
import ViewProduct from "./ViewProduct";
import { Popover, ConfigProvider } from "antd";

// function AddProduct({ selectProduct }) {
//   const [modalShow, setModalShow] = useState(false);

//   return (
//     <>
//       <Button
//         variant="primary"
//         onClick={() => setModalShow(true)}
//         className={styles.button}
//       >
//         {selectProduct ? "Update Product" : "Add Product"}
//       </Button>

//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//         selectProduct={selectProduct}
//       />
//     </>
//   );
// }

function ProductsManagement({ selectItem }) {
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  // console.log(products);
  const [selectProduct, setSelectProduct] = useState("");
  // console.log(selectProduct);
  const [modalShow, setModalShow] = useState(false);
  const [viewProduct, setViewProduct] = useState(false);
  // console.log(modalShow, "aaa");

  // console.log(modalShow);
  const productsPerPage = useSelector(
    (state) => state.products.productsPerPage
  );
  const currentPage = useSelector((state) => state.products.currentPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "Loading") {
    return (
      <div style={{ fontSize: "30px", textAlign: "center", marginTop: "50px" }}>
        <Spin />
      </div>
    );
  }

  const handleEditForm = (product) => {
    setModalShow(!modalShow);
    setSelectProduct(product);
  };

  //   let quantity = 0;
  //   const countRes = result.headers["x-total-count"];
  // console.log(countRes);
  const totalPages = Math.ceil(products.length / productsPerPage);
  const pages = [...Array(totalPages + 1).keys()].slice(1);
  const indexOfLastPage = currentPage * productsPerPage;
  const indexOfFirstPage = indexOfLastPage - productsPerPage;

  const visibleProducts = products.slice(indexOfFirstPage, indexOfLastPage);
  const handlePrev = () => {
    if (currentPage !== 1) {
      dispatch(productAction.onNavigatePrev());
    }
  };
  const handleNext = () => {
    if (currentPage !== totalPages) {
      dispatch(productAction.onNavigateNext());
    }
  };
  const handleCurrentPage = (_p) => {
    dispatch(productAction.onClickCurentPage(_p));
  };
  // console.log(selectItem);
  // const options = ["Name"]
  return selectItem === "products" ? (
    <div>
      <div className={clsx(styles.sortAdd, "flex justify-between")}>
        <div className={styles.sort}>
          <select>
            <option value="">Sort</option>
            <option value="Name">Name</option>
            <option value="Price">Price</option>
            <option value="Quantity">Quantity</option>
          </select>
        </div>
        <div>
          <Button
            variant="primary"
            onClick={() => setModalShow(!modalShow)}
            className={clsx(styles.button, "!bg-neutral-900 !text-white")}
          >
            {selectProduct ? "Update Product" : "Add Product"}
          </Button>

          <ProductForm
            show={modalShow}
            onHide={() => setModalShow(!modalShow)}
            selectProduct={selectProduct}
            setSelectProduct={setSelectProduct}
            modalShow={modalShow}
            setModalShow={setModalShow}
          />
        </div>
      </div>
      <table
        className={clsx(
          styles.table,
          "table table-striped table-hover text-center"
        )}
        style={{ width: "80%", margin: "20px auto" }}
      >
        <thead className="table-dark">
          <tr>
            <th className="bg-neutral-900 text-white">STT</th>
            <th className="bg-neutral-900 text-white">Image</th>
            <th className="bg-neutral-900 text-white">Name</th>
            <th className="bg-neutral-900 text-white">Price</th>
            <th className="bg-neutral-900 text-white">Quantity</th>
            <th className="bg-neutral-900 text-white" colSpan={3}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {visibleProducts.map((element, index) => (
            <tr>
              <td>{element.id}</td>
              <td>
                <img src={element.image} className="w-5 h-5" alt="" />
              </td>
              {/* URL.revokeObjectURL(URL.createObjectURL(element.image[0])) */}
              <td>{element.model}</td>
              <td>{element.price}</td>
              <td>{element.quantity}</td>
              <td>
                <ConfigProvider>
                  <Popover
                    placement="right"
                    // title={element.model}
                    content={<ViewProduct selectProduct={selectProduct} />}
                    trigger="click"
                  >
                    <button
                      type="button"
                      className="btn btn-outline-info"
                      onClick={() => setSelectProduct(element)}
                    >
                      View
                    </button>
                  </Popover>
                </ConfigProvider>
              </td>
              <td>
                <Link>
                  <button
                    type="button"
                    className="btn btn-outline-warning"
                    onClick={() => handleEditForm(element)}
                  >
                    Edit
                  </button>
                </Link>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => dispatch(deleteProducts(element.id))}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={8}>
              <Pagination style={{ display: "flex", justifyContent: "center" }}>
                <Pagination.Prev onClick={handlePrev} />
                {pages.map((_p) => (
                  <Pagination.Item
                    key={_p}
                    active={_p === currentPage}
                    onClick={() => handleCurrentPage(_p)}
                  >
                    {_p}
                  </Pagination.Item>
                ))}

                <Pagination.Next onClick={handleNext} />
              </Pagination>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  ) : (
    <></>
  );
}

export default ProductsManagement;
