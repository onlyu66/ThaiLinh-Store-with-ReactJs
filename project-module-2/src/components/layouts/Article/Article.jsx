import React, { useEffect, useState } from "react";
import styles from "../../styles/Article.module.css";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/productSlice";
import Banner from "../../others/Carousel";
import Spin from "../../others/Spin";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../../assets/images/Ads/galaxy-s20-fe-1.png";
import img2 from "../../../assets/images/Ads/huawei-watch-gt4-1.png";
import img3 from "../../../assets/images/Ads/macbook-air.png";
import img4 from "../../../assets/images/Ads/nk125w_638338458734948608.png";
import img5 from "../../../assets/images/Ads/flip4-s22-ultra.png";
import img6 from "../../../assets/images/Ads/a05-m34-git.gif";
import img7 from "../../../assets/images/Ads/tecno-spark-10.png";
import img8 from "../../../assets/images/Ads/htc.png";
import storage from "../../../assets/images/icons/storage.png";
import headphone from "../../../assets/images/icons/headphone.png";
import powerBank from "../../../assets/images/icons/power-bank.png";
import fan from "../../../assets/images/icons/fan.png";
import speaker from "../../../assets/images/icons/speaker.png";
import chargerCable from "../../../assets/images/icons/charger.png";
import apple from "../../../assets/images/icons/apple-logo.png";
import phoneCase from "../../../assets/images/icons/back-camera.png";
import phoneScreenProtector from "../../../assets/images/icons/smartphone.png";
import gimbal from "../../../assets/images/icons/gimbal.png";
import AddToCartBtn from "../../others/AddToCartBtn";
import Slider from "react-slick";
import { cartAction, fetchCart, postCart } from "../../../redux/cartSlice";
import { useNavigate } from "react-router-dom";
// import nhh from "../../assets/images/customer/vdv-nguyen-huy-hoang.jpg";

function Article() {
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  const cart = useSelector((state) => state.cart.cart);

  // console.log(products);

  const dispatch = useDispatch();

  const [addToCart, setAddoCart] = useState(false);

  const [id, setId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  useEffect(() => {
    // dispatch(fetchCart());
  }, []);

  if (status === "Loading") {
    return (
      <div style={{ fontSize: "30px", textAlign: "center", marginTop: "50px" }}>
        <Spin />
      </div>
    );
  }
  const mayBeLikeProduct = [];
  products.map((element) => {
    if (element.mayBeLike) {
      mayBeLikeProduct.push(element);
    }
  });
  const prominentSpeakersHeadphones = [];
  products.map((element) => {
    if (
      element.prominent &&
      (element.type === "headphone" || element.type === "speaker")
    ) {
      prominentSpeakersHeadphones.push(element);
    }
  });
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    // slidesToShow: 3,
    // slidesToScroll: 1,
    // autoplay: true,
    // speed: 2000,
    // autoplaySpeed: 2000,
    // cssEase: "linear",
  };

  return (
    <div style={{ backgroundColor: "#fafafa" }}>
      <Banner />
      <div className={clsx(styles.ads, "flex")}>
        <img src={img1} />
        <img src={img2} />
        <img src={img3} />
        <img src={img4} />
      </div>
      <div className="mt-4">
        <img src={img5} />
      </div>
      <div
        className={clsx(styles.prominentSpeakersHeadphones, "rounded mt-3.5")}
      >
        <div
          className={clsx(
            styles.divSpeakerHeadphone,
            "inline-block rounded-tl-lg"
          )}
        >
          CÓ THỂ BẠN SẼ THÍCH
        </div>
        <ul className="p-0 pt-2 m-0 ">
          <Slider {...settings} className={styles.slider}>
            {mayBeLikeProduct.map((element) => (
              <li
                className={clsx(
                  styles.item,
                  "list-none p-2 m-px mx-4 my-2 border rounded shadow-md relative"
                )}
                key={element.id}
                onMouseEnter={() => {
                  setAddoCart(true);
                  setId(element.id);
                }}
                onMouseLeave={() => {
                  setAddoCart(false);
                  setId("");
                }}
              >
                <div>
                  <img src={element.image} alt="This is a image" />
                  <p>{element.model}</p>
                </div>
                <p>{element.price} ₫</p>
                {addToCart === true && id === element.id ? (
                  <div
                    className={clsx(styles.addToCartBtn, "absolute opacity-75")}
                  >
                    <button
                      onClick={() => {
                        dispatch(cartAction.addToCart(element));
                      }}
                    >
                      Thêm vào giỏ hàng
                    </button>
                  </div>
                ) : (
                  <></>
                )}
              </li>
            ))}
          </Slider>
        </ul>
      </div>
      <div
        className={clsx(styles.phone, styles.appleReseller, "rounded mt-3.5")}
      >
        <div className="inline-block rounded-tl-lg">
          APPLE AUTHORISED RESELLER
        </div>
        <ul className="p-0 pt-2 m-0 flex flex-wrap justify-evenly">
          {products.map((element) => {
            if (element.brand === "Apple" && element.reseller) {
              return (
                <li
                  className={clsx(
                    styles.item,
                    "list-none p-2 m-px my-1.5 border rounded shadow-md relative"
                  )}
                  key={element.id}
                  onMouseEnter={() => {
                    setAddoCart(true);
                    setId(element.id);
                  }}
                  onMouseLeave={() => {
                    setAddoCart(false);
                    setId("");
                  }}
                >
                  <img src={element.image} alt="This is a image" />
                  <p>{element.model}</p>
                  <p>{element.price} ₫</p>
                  {addToCart === true && id === element.id ? (
                    <div
                      className={clsx(
                        styles.addToCartBtn,
                        "absolute opacity-75"
                      )}
                    >
                      <button
                        onClick={() => {
                          dispatch(cartAction.addToCart(element));
                        }}
                      >
                        Thêm vào giỏ hàng
                      </button>
                    </div>
                  ) : (
                    <></>
                  )}
                </li>
              );
            }
          })}
        </ul>
      </div>
      <div className="mt-3">
        <img src={img6} />
      </div>
      <div
        className={clsx(styles.phone, styles.prominentPhone, "rounded mt-3.5")}
      >
        <div className="flex justify-between">
          <div className="inline-block rounded-tl-lg">ĐIỆN THOẠI NỔI BẬT</div>
          <ul className="flex justify-evenly p-0 m-0">
            <li>Iphone 15</li>
            <li>TECNO POVA 5</li>
            <li>Redmi Note 12</li>
            <li>Samsung Galaxy S23</li>
            <li onClick={() => navigate("/phones")}>Xem tất cả</li>
          </ul>
        </div>
        <ul className="p-0 pt-2 m-0 flex flex-wrap justify-evenly">
          {products.map((element) => {
            if (element.type === "phone" && element.prominent === true) {
              return (
                <li
                  className={clsx(
                    styles.item,
                    "list-none p-2 m-px my-1.5 border rounded shadow-md relative"
                  )}
                  key={element.id}
                  onMouseEnter={() => {
                    setAddoCart(true);
                    setId(element.id);
                  }}
                  onMouseLeave={() => {
                    setAddoCart(false);
                    setId("");
                  }}
                >
                  <img src={element.image} alt="This is a image" />
                  <p>{element.model}</p>
                  <p>{element.price} ₫</p>
                  {addToCart === true && id === element.id ? (
                    <div
                      className={clsx(
                        styles.addToCartBtn,
                        "absolute opacity-75"
                      )}
                    >
                      <button
                        onClick={() => {
                          dispatch(cartAction.addToCart(element));
                        }}
                      >
                        Thêm vào giỏ hàng
                      </button>
                    </div>
                  ) : (
                    <></>
                  )}
                </li>
              );
            }
          })}
        </ul>
      </div>

      <div>
        <img src={img7} className="mt-3" />
      </div>
      <div
        className={clsx(styles.prominentSpeakersHeadphones, "rounded mt-3.5")}
      >
        <div
          className={clsx(
            styles.divSpeakerHeadphone,
            "inline-block rounded-tl-lg"
          )}
        >
          LOA - TAI NGHE NỔI BẬT
        </div>
        <ul className="p-0 pt-2 m-0 ">
          <Slider {...settings} className={styles.slider}>
            {prominentSpeakersHeadphones.map((element) => (
              <li
                className={clsx(
                  styles.item,
                  "list-none p-2 m-px mx-4 my-2 border rounded shadow-md relative"
                )}
                key={element.id}
                onMouseEnter={() => {
                  setAddoCart(true);
                  setId(element.id);
                }}
                onMouseLeave={() => {
                  setAddoCart(false);
                  setId("");
                }}
              >
                <div>
                  <img src={element.image} alt="This is a image" />
                  <p>{element.model}</p>
                </div>
                <p>{element.price} ₫</p>
                {addToCart === true && id === element.id ? (
                  <div
                    className={clsx(styles.addToCartBtn, "absolute opacity-75")}
                  >
                    <button
                      onClick={() => {
                        dispatch(cartAction.addToCart(element));
                      }}
                    >
                      Thêm vào giỏ hàng
                    </button>
                  </div>
                ) : (
                  <></>
                )}
              </li>
            ))}
          </Slider>
        </ul>
      </div>
      <div
        className={clsx(
          styles.phone,
          styles.appleReseller,
          styles.iPhoneBatteryReplacementAndRepair,
          "rounded mt-3.5"
        )}
      >
        <div className="inline-block rounded-tl-lg">
          THAY PIN IPHONE CHÍNH HÃNG VÀ SỬA CHỮA
        </div>
        <ul className="p-0 pt-2 m-0 flex flex-wrap justify-evenly">
          {products.map((element) => {
            if (
              (element.type === "pin" || element.type === "screen") &&
              element.brand === "Apple"
            ) {
              return (
                <li
                  className={clsx(
                    styles.item,
                    "list-none p-2 m-px my-1.5 border rounded shadow-md relative"
                  )}
                  key={element.id}
                  onMouseEnter={() => {
                    setAddoCart(true);
                    setId(element.id);
                  }}
                  onMouseLeave={() => {
                    setAddoCart(false);
                    setId("");
                  }}
                >
                  <img src={element.image} alt="This is a image" />
                  <p>{element.model}</p>
                  <p>{element.price} ₫</p>
                  {addToCart === true && id === element.id ? (
                    <div
                      className={clsx(
                        styles.addToCartBtn,
                        "absolute opacity-75"
                      )}
                    >
                      <button
                        onClick={() => {
                          dispatch(cartAction.addToCart(element));
                        }}
                      >
                        Thêm vào giỏ hàng
                      </button>
                    </div>
                  ) : (
                    <></>
                  )}
                </li>
              );
            }
          })}
        </ul>
      </div>
      <div>
        <img src={img8} className="mt-3" />
      </div>
      <div className={clsx(styles.accessory, "rounded mt-3.5")}>
        <div
          className={clsx(styles.divAccessory, "inline-block rounded-tl-lg")}
        >
          PHỤ KIỆN
        </div>
        <div
          className={clsx(
            styles.itemAccessory,
            "flex flex-wrap justify-evenly"
          )}
        >
          <div>
            <img src={storage} />
            <p>Thẻ nhớ - USB</p>
          </div>
          <div>
            <img src={headphone} />
            <p>Tai nghe</p>
          </div>
          <div>
            <img src={powerBank} />
            <p>Sạc dự phòng</p>
          </div>
          <div>
            <img src={fan} />
            <p>Quạt Mini</p>
          </div>
          <div>
            <img src={speaker} />
            <p>Loa</p>
          </div>
          <div>
            <img src={chargerCable} />
            <p>Củ sạc - Dây cáp</p>
          </div>
          <div onClick={() => navigate("/phones/apple")}>
            <img src={apple} />
            <p>Apple</p>
          </div>
          <div>
            <img src={phoneCase} />
            <p>Bao da - Ốp lưng</p>
          </div>
          <div>
            <img src={phoneScreenProtector} />
            <p>Dán màn hình</p>
          </div>
          <div>
            <img src={gimbal} />
            <p>Tay cầm chống rung</p>
          </div>
        </div>
      </div>
      <div className={clsx(styles.technologyNews, "rounded mt-3.5")}>
        <div className={clsx("inline-block rounded-tl-lg")}>TIN CÔNG NGHỆ</div>
      </div>
      <div className={clsx(styles.customerOfThaiLinh, "rounded mt-5")}>
        <div
          className={clsx(styles.divCustomers, "inline-block rounded-tl-lg")}
        >
          KHÁCH HÀNG CỦA THÁI LINH
        </div>
        <Carousel data-bs-theme="dark" className="carousel">
          <Carousel.Item>
            <div className={clsx(styles.itemCustomer, "flex")}>
              <div className={clsx(styles.divCustomer, "flex")}>
                <img src="https://cdn.hoanghamobile.com/i/idol/Uploads/2022/03/01/vdv-nguyen-huy-hoang.jpg" />
                <div>
                  <h5>Nguyễn Huy Hoàng</h5>
                  <h6>Vận động viên bơi lội</h6>
                  <p>
                    Với một vận động viên thể thao, Hoàng luôn ưu tiên việc chăm
                    sóc sức khoẻ bản thân. Lịch thi đấu dày đặc, nay Hoàng mới
                    có dịp quay trở lại cửa hàng công nghệ yêu thích - Hoàng Hà
                    Mobile chi nhánh quận 1, Tp.HCM để rinh về chiếc đồng hồ
                  </p>
                </div>
              </div>
              <div className={clsx(styles.divCustomer, "flex")}>
                <img src="https://cdn.hoanghamobile.com/i/idol/Uploads/2021/12/16/anh-cua-linh.jpg" />
                <div>
                  <h5>VĐV Châu Tuyết Vân</h5>
                  <h6>VĐV Đội tuyển Teakwondo Việt Nam</h6>
                  <p>
                    Vân thấy giá bán ở Hoàng Hà Mobile tốt hơn các bên khác khá
                    nhiều, các sản phẩm cũng phong phú và đa dạng. Vân thường
                    qua shop để mua đồng hồ thông minh luyện tập thể thao hoặc
                    tablet.
                  </p>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={clsx(styles.itemCustomer, "flex")}>
              <div className={clsx(styles.divCustomer, "flex")}>
                <img src="https://cdn.hoanghamobile.com/i/idol/Uploads/2022/01/18/hhm00784ii.png" />
                <div>
                  <h5>DV Huyền Lizzie</h5>
                  <h6>Diễn viên truyền hình</h6>
                  <p>
                    Huyền rất hay ghé Hoàng Hà Mobile mua các sản phẩm iPhone dù
                    không hẳn là một tín đồ công nghệ. Về giá cả, chất lượng và
                    độ uy tín thì Hoàng Hà đều mang lại cho mình sự hài lòng.
                  </p>
                </div>
              </div>
              <div className={clsx(styles.divCustomer, "flex")}>
                <img src="https://cdn.hoanghamobile.com/i/idol/Uploads/2022/03/29/whatsapp-image-2022-03-28-at-5-36-16-pm.jpeg" />
                <div>
                  <h5>Jun Vũ</h5>
                  <h6>Diễn viên</h6>
                  <p>
                    Các sản phẩm đến từ thương hiệu Apple luôn chiếm trọn niềm
                    yêu thích của mình từ cái nhìn đầu tiên. Và Hoàng Hà Mobile
                    là nơi Jun Vũ tin tưởng nhất để mua sắm, với hơn 100 chi
                    nhánh trên toàn quốc.
                  </p>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Article;
