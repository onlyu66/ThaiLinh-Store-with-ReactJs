import React, { useEffect } from "react";
import styles from "../styles/OnFocus.module.css";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

function OnFocus({
  searchInput,
  setSearchInput,
  searchedKey,
  setSearchedKey,
  products,
  dispatch,
  searchProducts,
  setDivVisible,
  handleSubmit,
}) {
  const handleDeleteKey = (indexToDelete) => {
    const updatedSearchedKey = [...searchedKey];
    updatedSearchedKey.splice(indexToDelete, 1);

    setSearchedKey(updatedSearchedKey);

    console.log(updatedSearchedKey.length);
  };

  const navigate = useNavigate();

  // const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchProducts(searchInput));
    const storedSearchedKey = localStorage.getItem("searchedKey");
    if (storedSearchedKey) {
      setSearchedKey(JSON.parse(storedSearchedKey));
    }
  }, [dispatch, searchInput]);

  const handleMouseEnter = () => {
    // Khi di chuột vào component, bạn có thể thay đổi trạng thái ở đây nếu cần
  };

  const handleMouseLeave = () => {
    setDivVisible(false);
  };

  const hotSearches = [
    "iPhone 15",
    "iPhone 14",
    "Galaxy S20 FE",
    "Galaxy Z Flip5",
    "Z Flip5",
    "xxx",
  ];

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {searchInput ? (
        <div style={{ overflow: "auto", maxHeight: "540px" }} className={clsx(styles.suggestedProducts)}>
          <h6>Sản phẩm gợi ý</h6>
          {products.map((product, index) =>
            index < 10 ? (
              <ul className="p-0">
                <li
                  key={index}
                  className="flex"
                  onClick={(e) => {
                    setSearchInput(product.model);
                    handleSubmit(e);
                    navigate("/searchResult");
                  }}
                >
                  <img src={product.image} alt="" className="w-16 mr-3" />
                  <div style={{ margin: "auto 0", lineHeight: "1.4" }}>
                    <p>{product.model}</p>
                    <p style={{ color: "red" }}>{product.price} ₫</p>
                  </div>
                </li>
              </ul>
            ) : (
              <></>
            )
          )}
        </div>
      ) : (
        <div style={{ overflow: "auto", maxHeight: "540px" }} >
          <img
            src="https://hoanghamobile.com/Uploads/2023/10/31/web-htc-wildfire-e3-lite-03.jpg"
            style={{ width: "98%", margin: "10px auto" }}
          />
          {searchedKey !== [] ? (
            <div>
              <span
                style={{
                  fontSize: "15px",
                  color: "red",
                  marginLeft: "360px",
                  cursor: "pointer",
                }}
                onClick={() => setSearchedKey([])}
              >
                <i
                  className="fa-solid fa-trash mr-1"
                  style={{ color: " #ff0000" }}
                ></i>
                <span>Xoá lịch sử tìm kiếm</span>
              </span>
              <div className={clsx("mt-1", styles.history)}>
                {searchedKey.map((key, index) => (
                  <ul>
                    <li
                      key={index}
                      style={{ fontSize: "15px", display: "flex" }}
                    >
                      <i
                        className="fa-solid fa-clock-rotate-left "
                        style={{
                          color: "#828282",
                          flex: "1",
                          margin: "auto 0",
                        }}
                      ></i>
                      <span
                        style={{
                          // marginRight: "380px",
                          marginTop: "20px",
                          cursor: "pointer",
                          flex: "3",
                          margin: "auto 0",
                        }}
                        onClick={() => setSearchInput(key)}
                      >
                        {key}
                      </span>
                      <button
                        style={{ flex: "1" }}
                        onClick={() => handleDeleteKey(index)}
                      >
                        X
                      </button>
                    </li>
                  </ul>
                ))}
              </div>

              <div>
                <div className="flex">
                  <h5
                    className="ml-2 mr-1 font-bold"
                    style={{ color: "#ffa200" }}
                  >
                    Xu hướng tìm kiếm
                  </h5>
                  <i
                    className="fa-solid fa-fire mt-1"
                    style={{ color: "#ffa200", margin: "auto 0" }}
                  ></i>
                </div>
                <ul
                  className={clsx(
                    "flex justify-around p-0 m-0 mb-3",
                    styles.hotSearch
                  )}
                >
                  <li>
                    {hotSearches.map((key, index) => {
                      if (index < 3) {
                        return (
                          <ul className="p-0 m-0">
                            <li onClick={() => setSearchInput(key)}>{key}</li>
                          </ul>
                        );
                      }
                    })}
                  </li>
                  <li>
                    {hotSearches.map((key, index) => {
                      if (index > 2) {
                        return (
                          <ul className="p-0 m-0">
                            <li onClick={() => setSearchInput(key)}>{key}</li>
                          </ul>
                        );
                      }
                    })}
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
}

export default OnFocus;
