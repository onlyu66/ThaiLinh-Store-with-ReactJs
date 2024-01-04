import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import clsx from "clsx";
import styles from "../../../styles/Phones.module.css";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  productAction,
  sspProducts,
} from "../../../../redux/productSlice";
import Pagination from "react-bootstrap/Pagination";
import { cartAction } from "../../../../redux/cartSlice";

function Phones() {
  const imgs = [
    "https://cdn.hoanghamobile.com/i/cat/Uploads/2022/09/07/logoooooooooooooooo.png",
    "https://cdn.hoanghamobile.com/i/cat/Uploads/2020/11/30/samsung-logo-transparent.png",
    "https://cdn.hoanghamobile.com/i/cat/Uploads/2023/07/18/xiaomi-logo.png",
    "https://cdn.hoanghamobile.com/i/cat/Uploads/2020/09/14/brand%20(3).png",
    "https://cdn.hoanghamobile.com/i/cat/Uploads/2023/06/02/tecno.png",
    "https://cdn.hoanghamobile.com/i/cat/Uploads/2020/09/14/brand%20(4).png",
    "https://cdn.hoanghamobile.com/i/cat/Uploads/2020/09/14/brand%20(6).png",
    "https://cdn.hoanghamobile.com/i/cat/Uploads/2020/11/30/vivo-logo.png",
    "https://cdn.hoanghamobile.com/i/cat/Uploads/2023/06/19/honor-logo-2022-svg.png",
    "https://cdn.hoanghamobile.com/i/cat/Uploads/2023/08/22/htc-new-logo-svg.png",
    "https://cdn.hoanghamobile.com/i/cat/Uploads/2023/05/26/infinix-logo-svg.png",
    "https://cdn.hoanghamobile.com/i/cat/Uploads/2023/06/12/rog.png",
    "https://cdn.hoanghamobile.com/i/cat/Uploads/2021/12/24/xorr.png",
    "https://cdn.hoanghamobile.com/i/cat/Uploads/2020/10/30/logo-masstel-4.png",
    "https://cdn.hoanghamobile.com/i/cat/Uploads/2023/06/02/tcl.png",
    "https://cdn.hoanghamobile.com/i/cat/Uploads/2023/08/02/logo-moi-ra-2.png",
  ];
  const products = useSelector((state) => state.products.products);
  const phones = products.filter((phone) => phone.type === "phone");
  // console.log(phones);
  const [brand, setBrand] = useState("");
  const [rangePrice, setRangePrice] = useState("");

  const [sortType, setSortType] = useState("");
  const [sortTypeName, setSortTypeName] = useState("");
  console.log(sortType);
  console.log(sortTypeName);

  const navigate = useNavigate();

  const [addToCart, setAddoCart] = useState(false);

  const [id, setId] = useState("");

  const phonesPerPage = useSelector((state) => state.products.phonesPerPage);
  const currentPage = useSelector((state) => state.products.currentPage);
  const dispatch = useDispatch();

  useEffect(() => {
    if (sortTypeName) {
      dispatch(sspProducts(sortTypeName, sortType));
    } else {
      dispatch(fetchProducts());
    }
  }, [dispatch, sortTypeName, sortType]);
  let countSamsung = 0;
  let countVivo = 0;
  let countItel = 0;
  let countPhilips = 0;
  let countApple = 0;
  let countNokia = 0;
  let countHonor = 0;
  let countAsus = 0;
  let countXiaomi = 0;
  let countRealme = 0;
  let countXor = 0;
  let countHuawei = 0;
  let countOppo = 0;
  let countTcl = 0;
  let countNubia = 0;
  let countTecno = 0;
  let countInfinix = 0;
  let countHtc = 0;
  let count0_1 = 0;
  let count1_2 = 0;
  let count2_3 = 0;
  let count3_4 = 0;
  let count4_5 = 0;
  let count5_6 = 0;
  let count6_8 = 0;
  let count8_10 = 0;
  let count10_12 = 0;
  let count12_15 = 0;
  let count15_20 = 0;
  let count20_100 = 0;

  for (let i = 0; i < phones.length; i++) {
    if (phones[i].brand === "Samsung") {
      countSamsung++;
    }
    if (phones[i].brand === "Vivo") {
      countVivo++;
    }
    if (phones[i].brand === "Itel") {
      countItel++;
    }
    if (phones[i].brand === "Philips") {
      countPhilips++;
    }
    if (phones[i].brand === "Apple") {
      countApple++;
    }
    if (phones[i].brand === "Nokia") {
      countNokia++;
    }
    if (phones[i].brand === "HONOR") {
      countHonor++;
    }
    if (phones[i].brand === "Asus") {
      countAsus++;
    }
    if (
      phones[i].brand === "Xiaomi" ||
      phones[i].brand === "Redmi" ||
      phones[i].brand === "POCO"
    ) {
      countXiaomi++;
    }
    if (phones[i].brand === "Realme") {
      countRealme++;
    }
    if (phones[i].brand === "XOR") {
      countXor++;
    }
    if (phones[i].brand === "Huawei") {
      countHuawei++;
    }
    if (phones[i].brand === "OPPO") {
      countOppo++;
    }
    if (phones[i].brand === "TCL") {
      countTcl++;
    }
    if (phones[i].brand === "Nubia") {
      countNubia++;
    }
    if (phones[i].brand === "TECNO") {
      countTecno++;
    }
    if (phones[i].brand === "Infinix") {
      countInfinix++;
    }
    if (phones[i].brand === "HTC") {
      countHtc++;
    }
    let price = Math.floor(phones[i].price.split(",").join("")) / 1000000;
    // console.log(phones[i].price.split(",").join(""));
    if (phones[i].type === "phone" && price < 1) {
      count0_1++;
    }
    if (phones[i].type === "phone" && price >= 1 && price < 2) {
      count1_2++;
    }
    if (phones[i].type === "phone" && price >= 2 && price < 3) {
      count2_3++;
    }
    if (phones[i].type === "phone" && price >= 3 && price < 4) {
      count3_4++;
    }
    if (phones[i].type === "phone" && price >= 4 && price < 5) {
      count4_5++;
    }
    if (phones[i].type === "phone" && price >= 5 && price < 6) {
      count5_6++;
    }
    if (phones[i].type === "phone" && price >= 6 && price < 8) {
      count6_8++;
    }
    if (phones[i].type === "phone" && price >= 8 && price < 10) {
      count8_10++;
    }
    if (phones[i].type === "phone" && price >= 10 && price < 12) {
      count10_12++;
    }
    if (phones[i].type === "phone" && price >= 12 && price < 15) {
      count12_15++;
    }
    if (phones[i].type === "phone" && price >= 15 && price < 20) {
      count15_20++;
    }
    if (phones[i].type === "phone" && price >= 20 && price < 100) {
      count20_100++;
    }
  }

  let temp = [];
  let temp_ = [];
  if (brand === "Apple") {
    temp = phones.filter(
      (phone) => phone.brand === "Apple" && phone.price !== "Liên hệ"
    );
    if (rangePrice === "0_1") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price < 1) {
          return true;
        }
      });
    } else if (rangePrice === "1_2") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 1 && price < 2) {
          return true;
        }
      });
    } else if (rangePrice === "2_3") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 2 && price < 3) {
          return true;
        }
      });
    } else if (rangePrice === "3_4") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 3 && price < 4) {
          return true;
        }
      });
    } else if (rangePrice === "4_5") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 4 && price < 5) {
          return true;
        }
      });
    } else if (rangePrice === "5_6") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 5 && price < 6) {
          return true;
        }
      });
    } else if (rangePrice === "6_8") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 6 && price < 8) {
          return true;
        }
      });
    } else if (rangePrice === "8_10") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 8 && price < 10) {
          return true;
        }
      });
    } else if (rangePrice === "10_12") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 10 && price < 12) {
          return true;
        }
      });
    } else if (rangePrice === "12_15") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 12 && price < 15) {
          return true;
        }
      });
    } else if (rangePrice === "15_20") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 15 && price < 20) {
          return true;
        }
      });
    } else if (rangePrice === "20_100") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 20 && price < 100) {
          return true;
        }
      });
    } else {
      temp_ = temp;
    }
  } else if (brand === "Nokia") {
    temp = phones.filter(
      (phone) => phone.brand === "Nokia" && phone.price !== "Liên hệ"
    );
    if (rangePrice === "0_1") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price < 1) {
          return true;
        }
      });
    } else if (rangePrice === "1_2") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 1 && price < 2) {
          return true;
        }
      });
    } else if (rangePrice === "2_3") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 2 && price < 3) {
          return true;
        }
      });
    } else if (rangePrice === "3_4") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 3 && price < 4) {
          return true;
        }
      });
    } else if (rangePrice === "4_5") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 4 && price < 5) {
          return true;
        }
      });
    } else if (rangePrice === "5_6") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 5 && price < 6) {
          return true;
        }
      });
    } else if (rangePrice === "6_8") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 6 && price < 8) {
          return true;
        }
      });
    } else if (rangePrice === "8_10") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 8 && price < 10) {
          return true;
        }
      });
    } else if (rangePrice === "10_12") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 10 && price < 12) {
          return true;
        }
      });
    } else if (rangePrice === "12_15") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 12 && price < 15) {
          return true;
        }
      });
    } else if (rangePrice === "15_20") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 15 && price < 20) {
          return true;
        }
      });
    } else if (rangePrice === "20_100") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 20 && price < 100) {
          return true;
        }
      });
    } else {
      temp_ = temp;
    }
  } else if (brand === "Infinix") {
    temp = phones.filter(
      (phone) => phone.brand === "Infinix" && phone.price !== "Liên hệ"
    );
    if (rangePrice === "0_1") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price < 1) {
          return true;
        }
      });
    } else if (rangePrice === "1_2") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 1 && price < 2) {
          return true;
        }
      });
    } else if (rangePrice === "2_3") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 2 && price < 3) {
          return true;
        }
      });
    } else if (rangePrice === "3_4") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 3 && price < 4) {
          return true;
        }
      });
    } else if (rangePrice === "4_5") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 4 && price < 5) {
          return true;
        }
      });
    } else if (rangePrice === "5_6") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 5 && price < 6) {
          return true;
        }
      });
    } else if (rangePrice === "6_8") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 6 && price < 8) {
          return true;
        }
      });
    } else if (rangePrice === "8_10") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 8 && price < 10) {
          return true;
        }
      });
    } else if (rangePrice === "10_12") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 10 && price < 12) {
          return true;
        }
      });
    } else if (rangePrice === "12_15") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 12 && price < 15) {
          return true;
        }
      });
    } else if (rangePrice === "15_20") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 15 && price < 20) {
          return true;
        }
      });
    } else if (rangePrice === "20_100") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 20 && price < 100) {
          return true;
        }
      });
    } else {
      temp_ = temp;
    }
  } else if (brand === "TCL") {
    temp = phones.filter(
      (phone) => phone.brand === "TCL" && phone.price !== "Liên hệ"
    );
    if (rangePrice === "0_1") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price < 1) {
          return true;
        }
      });
    } else if (rangePrice === "1_2") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 1 && price < 2) {
          return true;
        }
      });
    } else if (rangePrice === "2_3") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 2 && price < 3) {
          return true;
        }
      });
    } else if (rangePrice === "3_4") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 3 && price < 4) {
          return true;
        }
      });
    } else if (rangePrice === "4_5") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 4 && price < 5) {
          return true;
        }
      });
    } else if (rangePrice === "5_6") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 5 && price < 6) {
          return true;
        }
      });
    } else if (rangePrice === "6_8") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 6 && price < 8) {
          return true;
        }
      });
    } else if (rangePrice === "8_10") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 8 && price < 10) {
          return true;
        }
      });
    } else if (rangePrice === "10_12") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 10 && price < 12) {
          return true;
        }
      });
    } else if (rangePrice === "12_15") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 12 && price < 15) {
          return true;
        }
      });
    } else if (rangePrice === "15_20") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 15 && price < 20) {
          return true;
        }
      });
    } else if (rangePrice === "20_100") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 20 && price < 100) {
          return true;
        }
      });
    } else {
      temp_ = temp;
    }
  } else if (brand === "Samsung") {
    temp = phones.filter(
      (phone) => phone.brand === "Samsung" && phone.price !== "Liên hệ"
    );
    if (rangePrice === "0_1") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price < 1) {
          return true;
        }
      });
    } else if (rangePrice === "1_2") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 1 && price < 2) {
          return true;
        }
      });
    } else if (rangePrice === "2_3") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 2 && price < 3) {
          return true;
        }
      });
    } else if (rangePrice === "3_4") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 3 && price < 4) {
          return true;
        }
      });
    } else if (rangePrice === "4_5") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 4 && price < 5) {
          return true;
        }
      });
    } else if (rangePrice === "5_6") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 5 && price < 6) {
          return true;
        }
      });
    } else if (rangePrice === "6_8") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 6 && price < 8) {
          return true;
        }
      });
    } else if (rangePrice === "8_10") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 8 && price < 10) {
          return true;
        }
      });
    } else if (rangePrice === "10_12") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 10 && price < 12) {
          return true;
        }
      });
    } else if (rangePrice === "12_15") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 12 && price < 15) {
          return true;
        }
      });
    } else if (rangePrice === "15_20") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 15 && price < 20) {
          return true;
        }
      });
    } else if (rangePrice === "20_100") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 20 && price < 100) {
          return true;
        }
      });
    } else {
      temp_ = temp;
    }
  } else if (brand === "Realme") {
    temp = phones.filter(
      (phone) => phone.brand === "Realme" && phone.price !== "Liên hệ"
    );
    if (rangePrice === "0_1") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price < 1) {
          return true;
        }
      });
    } else if (rangePrice === "1_2") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 1 && price < 2) {
          return true;
        }
      });
    } else if (rangePrice === "2_3") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 2 && price < 3) {
          return true;
        }
      });
    } else if (rangePrice === "3_4") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 3 && price < 4) {
          return true;
        }
      });
    } else if (rangePrice === "4_5") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 4 && price < 5) {
          return true;
        }
      });
    } else if (rangePrice === "5_6") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 5 && price < 6) {
          return true;
        }
      });
    } else if (rangePrice === "6_8") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 6 && price < 8) {
          return true;
        }
      });
    } else if (rangePrice === "8_10") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 8 && price < 10) {
          return true;
        }
      });
    } else if (rangePrice === "10_12") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 10 && price < 12) {
          return true;
        }
      });
    } else if (rangePrice === "12_15") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 12 && price < 15) {
          return true;
        }
      });
    } else if (rangePrice === "15_20") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 15 && price < 20) {
          return true;
        }
      });
    } else if (rangePrice === "20_100") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 20 && price < 100) {
          return true;
        }
      });
    } else {
      temp_ = temp;
    }
  } else if (brand === "ROG") {
    temp = phones.filter(
      (phone) => phone.brand === "ROG" && phone.price !== "Liên hệ"
    );
    if (rangePrice === "0_1") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price < 1) {
          return true;
        }
      });
    } else if (rangePrice === "1_2") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 1 && price < 2) {
          return true;
        }
      });
    } else if (rangePrice === "2_3") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 2 && price < 3) {
          return true;
        }
      });
    } else if (rangePrice === "3_4") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 3 && price < 4) {
          return true;
        }
      });
    } else if (rangePrice === "4_5") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 4 && price < 5) {
          return true;
        }
      });
    } else if (rangePrice === "5_6") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 5 && price < 6) {
          return true;
        }
      });
    } else if (rangePrice === "6_8") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 6 && price < 8) {
          return true;
        }
      });
    } else if (rangePrice === "8_10") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 8 && price < 10) {
          return true;
        }
      });
    } else if (rangePrice === "10_12") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 10 && price < 12) {
          return true;
        }
      });
    } else if (rangePrice === "12_15") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 12 && price < 15) {
          return true;
        }
      });
    } else if (rangePrice === "15_20") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 15 && price < 20) {
          return true;
        }
      });
    } else if (rangePrice === "20_100") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 20 && price < 100) {
          return true;
        }
      });
    } else {
      temp_ = temp;
    }
  } else if (brand === "Itel") {
    temp = phones.filter(
      (phone) => phone.brand === "Itel" && phone.price !== "Liên hệ"
    );
    if (rangePrice === "0_1") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price < 1) {
          return true;
        }
      });
    } else if (rangePrice === "1_2") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 1 && price < 2) {
          return true;
        }
      });
    } else if (rangePrice === "2_3") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 2 && price < 3) {
          return true;
        }
      });
    } else if (rangePrice === "3_4") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 3 && price < 4) {
          return true;
        }
      });
    } else if (rangePrice === "4_5") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 4 && price < 5) {
          return true;
        }
      });
    } else if (rangePrice === "5_6") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 5 && price < 6) {
          return true;
        }
      });
    } else if (rangePrice === "6_8") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 6 && price < 8) {
          return true;
        }
      });
    } else if (rangePrice === "8_10") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 8 && price < 10) {
          return true;
        }
      });
    } else if (rangePrice === "10_12") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 10 && price < 12) {
          return true;
        }
      });
    } else if (rangePrice === "12_15") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 12 && price < 15) {
          return true;
        }
      });
    } else if (rangePrice === "15_20") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 15 && price < 20) {
          return true;
        }
      });
    } else if (rangePrice === "20_100") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 20 && price < 100) {
          return true;
        }
      });
    } else {
      temp_ = temp;
    }
  } else if (brand === "Xiaomi") {
    temp = phones.filter(
      (phone) =>
        (phone.brand === "Xiaomi" ||
          phone.brand === "Redmi" ||
          phone.brand === "POCO") &&
        phone.price !== "Liên hệ"
    );
    if (rangePrice === "0_1") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price < 1) {
          return true;
        }
      });
    } else if (rangePrice === "1_2") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 1 && price < 2) {
          return true;
        }
      });
    } else if (rangePrice === "2_3") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 2 && price < 3) {
          return true;
        }
      });
    } else if (rangePrice === "3_4") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 3 && price < 4) {
          return true;
        }
      });
    } else if (rangePrice === "4_5") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 4 && price < 5) {
          return true;
        }
      });
    } else if (rangePrice === "5_6") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 5 && price < 6) {
          return true;
        }
      });
    } else if (rangePrice === "6_8") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 6 && price < 8) {
          return true;
        }
      });
    } else if (rangePrice === "8_10") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 8 && price < 10) {
          return true;
        }
      });
    } else if (rangePrice === "10_12") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 10 && price < 12) {
          return true;
        }
      });
    } else if (rangePrice === "12_15") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 12 && price < 15) {
          return true;
        }
      });
    } else if (rangePrice === "15_20") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 15 && price < 20) {
          return true;
        }
      });
    } else if (rangePrice === "20_100") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 20 && price < 100) {
          return true;
        }
      });
    } else {
      temp_ = temp;
    }
  } else if (brand === "Asus") {
    temp = phones.filter(
      (phone) => phone.brand === "Asus" && phone.price !== "Liên hệ"
    );
    if (rangePrice === "0_1") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price < 1) {
          return true;
        }
      });
    } else if (rangePrice === "1_2") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 1 && price < 2) {
          return true;
        }
      });
    } else if (rangePrice === "2_3") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 2 && price < 3) {
          return true;
        }
      });
    } else if (rangePrice === "3_4") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 3 && price < 4) {
          return true;
        }
      });
    } else if (rangePrice === "4_5") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 4 && price < 5) {
          return true;
        }
      });
    } else if (rangePrice === "5_6") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 5 && price < 6) {
          return true;
        }
      });
    } else if (rangePrice === "6_8") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 6 && price < 8) {
          return true;
        }
      });
    } else if (rangePrice === "8_10") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 8 && price < 10) {
          return true;
        }
      });
    } else if (rangePrice === "10_12") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 10 && price < 12) {
          return true;
        }
      });
    } else if (rangePrice === "12_15") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 12 && price < 15) {
          return true;
        }
      });
    } else if (rangePrice === "15_20") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 15 && price < 20) {
          return true;
        }
      });
    } else if (rangePrice === "20_100") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 20 && price < 100) {
          return true;
        }
      });
    } else {
      temp_ = temp;
    }
  } else if (brand === "Vivo") {
    temp = phones.filter(
      (phone) => phone.brand === "Vivo" && phone.price !== "Liên hệ"
    );
    if (rangePrice === "0_1") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price < 1) {
          return true;
        }
      });
    } else if (rangePrice === "1_2") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 1 && price < 2) {
          return true;
        }
      });
    } else if (rangePrice === "2_3") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 2 && price < 3) {
          return true;
        }
      });
    } else if (rangePrice === "3_4") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 3 && price < 4) {
          return true;
        }
      });
    } else if (rangePrice === "4_5") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 4 && price < 5) {
          return true;
        }
      });
    } else if (rangePrice === "5_6") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 5 && price < 6) {
          return true;
        }
      });
    } else if (rangePrice === "6_8") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 6 && price < 8) {
          return true;
        }
      });
    } else if (rangePrice === "8_10") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 8 && price < 10) {
          return true;
        }
      });
    } else if (rangePrice === "10_12") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 10 && price < 12) {
          return true;
        }
      });
    } else if (rangePrice === "12_15") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 12 && price < 15) {
          return true;
        }
      });
    } else if (rangePrice === "15_20") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 15 && price < 20) {
          return true;
        }
      });
    } else if (rangePrice === "20_100") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 20 && price < 100) {
          return true;
        }
      });
    } else {
      temp_ = temp;
    }
  } else if (brand === "Nubia") {
    temp = phones.filter(
      (phone) => phone.brand === "Nubia" && phone.price !== "Liên hệ"
    );
    if (rangePrice === "0_1") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price < 1) {
          return true;
        }
      });
    } else if (rangePrice === "1_2") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 1 && price < 2) {
          return true;
        }
      });
    } else if (rangePrice === "2_3") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 2 && price < 3) {
          return true;
        }
      });
    } else if (rangePrice === "3_4") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 3 && price < 4) {
          return true;
        }
      });
    } else if (rangePrice === "4_5") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 4 && price < 5) {
          return true;
        }
      });
    } else if (rangePrice === "5_6") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 5 && price < 6) {
          return true;
        }
      });
    } else if (rangePrice === "6_8") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 6 && price < 8) {
          return true;
        }
      });
    } else if (rangePrice === "8_10") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 8 && price < 10) {
          return true;
        }
      });
    } else if (rangePrice === "10_12") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 10 && price < 12) {
          return true;
        }
      });
    } else if (rangePrice === "12_15") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 12 && price < 15) {
          return true;
        }
      });
    } else if (rangePrice === "15_20") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 15 && price < 20) {
          return true;
        }
      });
    } else if (rangePrice === "20_100") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 20 && price < 100) {
          return true;
        }
      });
    } else {
      temp_ = temp;
    }
  } else if (brand === "OPPO") {
    temp = phones.filter(
      (phone) => phone.brand === "OPPO" && phone.price !== "Liên hệ"
    );
    if (rangePrice === "0_1") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price < 1) {
          return true;
        }
      });
    } else if (rangePrice === "1_2") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 1 && price < 2) {
          return true;
        }
      });
    } else if (rangePrice === "2_3") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 2 && price < 3) {
          return true;
        }
      });
    } else if (rangePrice === "3_4") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 3 && price < 4) {
          return true;
        }
      });
    } else if (rangePrice === "4_5") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 4 && price < 5) {
          return true;
        }
      });
    } else if (rangePrice === "5_6") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 5 && price < 6) {
          return true;
        }
      });
    } else if (rangePrice === "6_8") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 6 && price < 8) {
          return true;
        }
      });
    } else if (rangePrice === "8_10") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 8 && price < 10) {
          return true;
        }
      });
    } else if (rangePrice === "10_12") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 10 && price < 12) {
          return true;
        }
      });
    } else if (rangePrice === "12_15") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 12 && price < 15) {
          return true;
        }
      });
    } else if (rangePrice === "15_20") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 15 && price < 20) {
          return true;
        }
      });
    } else if (rangePrice === "20_100") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 20 && price < 100) {
          return true;
        }
      });
    } else {
      temp_ = temp;
    }
  } else if (brand === "HONOR") {
    temp = phones.filter(
      (phone) => phone.brand === "HONOR" && phone.price !== "Liên hệ"
    );
    if (rangePrice === "0_1") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price < 1) {
          return true;
        }
      });
    } else if (rangePrice === "1_2") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 1 && price < 2) {
          return true;
        }
      });
    } else if (rangePrice === "2_3") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 2 && price < 3) {
          return true;
        }
      });
    } else if (rangePrice === "3_4") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 3 && price < 4) {
          return true;
        }
      });
    } else if (rangePrice === "4_5") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 4 && price < 5) {
          return true;
        }
      });
    } else if (rangePrice === "5_6") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 5 && price < 6) {
          return true;
        }
      });
    } else if (rangePrice === "6_8") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 6 && price < 8) {
          return true;
        }
      });
    } else if (rangePrice === "8_10") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 8 && price < 10) {
          return true;
        }
      });
    } else if (rangePrice === "10_12") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 10 && price < 12) {
          return true;
        }
      });
    } else if (rangePrice === "12_15") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 12 && price < 15) {
          return true;
        }
      });
    } else if (rangePrice === "15_20") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 15 && price < 20) {
          return true;
        }
      });
    } else if (rangePrice === "20_100") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 20 && price < 100) {
          return true;
        }
      });
    } else {
      temp_ = temp;
    }
  } else if (brand === "XOR") {
    temp = phones.filter(
      (phone) => phone.brand === "XOR" && phone.price !== "Liên hệ"
    );
    if (rangePrice === "0_1") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price < 1) {
          return true;
        }
      });
    } else if (rangePrice === "1_2") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 1 && price < 2) {
          return true;
        }
      });
    } else if (rangePrice === "2_3") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 2 && price < 3) {
          return true;
        }
      });
    } else if (rangePrice === "3_4") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 3 && price < 4) {
          return true;
        }
      });
    } else if (rangePrice === "4_5") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 4 && price < 5) {
          return true;
        }
      });
    } else if (rangePrice === "5_6") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 5 && price < 6) {
          return true;
        }
      });
    } else if (rangePrice === "6_8") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 6 && price < 8) {
          return true;
        }
      });
    } else if (rangePrice === "8_10") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 8 && price < 10) {
          return true;
        }
      });
    } else if (rangePrice === "10_12") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 10 && price < 12) {
          return true;
        }
      });
    } else if (rangePrice === "12_15") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 12 && price < 15) {
          return true;
        }
      });
    } else if (rangePrice === "15_20") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 15 && price < 20) {
          return true;
        }
      });
    } else if (rangePrice === "20_100") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 20 && price < 100) {
          return true;
        }
      });
    } else {
      temp_ = temp;
    }
  } else if (brand === "TECNO") {
    temp = phones.filter(
      (phone) => phone.brand === "TECNO" && phone.price !== "Liên hệ"
    );
    if (rangePrice === "0_1") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price < 1) {
          return true;
        }
      });
    } else if (rangePrice === "1_2") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 1 && price < 2) {
          return true;
        }
      });
    } else if (rangePrice === "2_3") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 2 && price < 3) {
          return true;
        }
      });
    } else if (rangePrice === "3_4") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 3 && price < 4) {
          return true;
        }
      });
    } else if (rangePrice === "4_5") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 4 && price < 5) {
          return true;
        }
      });
    } else if (rangePrice === "5_6") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 5 && price < 6) {
          return true;
        }
      });
    } else if (rangePrice === "6_8") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 6 && price < 8) {
          return true;
        }
      });
    } else if (rangePrice === "8_10") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 8 && price < 10) {
          return true;
        }
      });
    } else if (rangePrice === "10_12") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 10 && price < 12) {
          return true;
        }
      });
    } else if (rangePrice === "12_15") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 12 && price < 15) {
          return true;
        }
      });
    } else if (rangePrice === "15_20") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 15 && price < 20) {
          return true;
        }
      });
    } else if (rangePrice === "20_100") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 20 && price < 100) {
          return true;
        }
      });
    } else {
      temp_ = temp;
    }
  } else if (brand === "HTC") {
    temp = phones.filter(
      (phone) => phone.brand === "HTC" && phone.price !== "Liên hệ"
    );
    if (rangePrice === "0_1") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price < 1) {
          return true;
        }
      });
    } else if (rangePrice === "1_2") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 1 && price < 2) {
          return true;
        }
      });
    } else if (rangePrice === "2_3") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 2 && price < 3) {
          return true;
        }
      });
    } else if (rangePrice === "3_4") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 3 && price < 4) {
          return true;
        }
      });
    } else if (rangePrice === "4_5") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 4 && price < 5) {
          return true;
        }
      });
    } else if (rangePrice === "5_6") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 5 && price < 6) {
          return true;
        }
      });
    } else if (rangePrice === "6_8") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 6 && price < 8) {
          return true;
        }
      });
    } else if (rangePrice === "8_10") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 8 && price < 10) {
          return true;
        }
      });
    } else if (rangePrice === "10_12") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 10 && price < 12) {
          return true;
        }
      });
    } else if (rangePrice === "12_15") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 12 && price < 15) {
          return true;
        }
      });
    } else if (rangePrice === "15_20") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 15 && price < 20) {
          return true;
        }
      });
    } else if (rangePrice === "20_100") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 20 && price < 100) {
          return true;
        }
      });
    } else {
      temp_ = temp;
    }
  } else if (brand === "Masstel") {
    temp = phones.filter(
      (phone) => phone.brand === "Masstel" && phone.price !== "Liên hệ"
    );
    if (rangePrice === "0_1") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price < 1) {
          return true;
        }
      });
    } else if (rangePrice === "1_2") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 1 && price < 2) {
          return true;
        }
      });
    } else if (rangePrice === "2_3") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 2 && price < 3) {
          return true;
        }
      });
    } else if (rangePrice === "3_4") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 3 && price < 4) {
          return true;
        }
      });
    } else if (rangePrice === "4_5") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 4 && price < 5) {
          return true;
        }
      });
    } else if (rangePrice === "5_6") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 5 && price < 6) {
          return true;
        }
      });
    } else if (rangePrice === "6_8") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 6 && price < 8) {
          return true;
        }
      });
    } else if (rangePrice === "8_10") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 8 && price < 10) {
          return true;
        }
      });
    } else if (rangePrice === "10_12") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 10 && price < 12) {
          return true;
        }
      });
    } else if (rangePrice === "12_15") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 12 && price < 15) {
          return true;
        }
      });
    } else if (rangePrice === "15_20") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 15 && price < 20) {
          return true;
        }
      });
    } else if (rangePrice === "20_100") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 20 && price < 100) {
          return true;
        }
      });
    } else {
      temp_ = temp;
    }
  } else if (brand === "Philips") {
    temp = phones.filter(
      (phone) => phone.brand === "Philips" && phone.price !== "Liên hệ"
    );
    if (rangePrice === "0_1") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price < 1) {
          return true;
        }
      });
    } else if (rangePrice === "1_2") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 1 && price < 2) {
          return true;
        }
      });
    } else if (rangePrice === "2_3") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 2 && price < 3) {
          return true;
        }
      });
    } else if (rangePrice === "3_4") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 3 && price < 4) {
          return true;
        }
      });
    } else if (rangePrice === "4_5") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 4 && price < 5) {
          return true;
        }
      });
    } else if (rangePrice === "5_6") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 5 && price < 6) {
          return true;
        }
      });
    } else if (rangePrice === "6_8") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 6 && price < 8) {
          return true;
        }
      });
    } else if (rangePrice === "8_10") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 8 && price < 10) {
          return true;
        }
      });
    } else if (rangePrice === "10_12") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 10 && price < 12) {
          return true;
        }
      });
    } else if (rangePrice === "12_15") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 12 && price < 15) {
          return true;
        }
      });
    } else if (rangePrice === "15_20") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 15 && price < 20) {
          return true;
        }
      });
    } else if (rangePrice === "20_100") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 20 && price < 100) {
          return true;
        }
      });
    } else {
      temp_ = temp;
    }
  } else if (brand === "Huawei") {
    temp = phones.filter((phone) => phone.brand === "Huawei");
    if (rangePrice === "0_1") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price < 1) {
          return true;
        }
      });
    } else if (rangePrice === "1_2") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 1 && price < 2) {
          return true;
        }
      });
    } else if (rangePrice === "2_3") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 2 && price < 3) {
          return true;
        }
      });
    } else if (rangePrice === "3_4") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 3 && price < 4) {
          return true;
        }
      });
    } else if (rangePrice === "4_5") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 4 && price < 5) {
          return true;
        }
      });
    } else if (rangePrice === "5_6") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 5 && price < 6) {
          return true;
        }
      });
    } else if (rangePrice === "6_8") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 6 && price < 8) {
          return true;
        }
      });
    } else if (rangePrice === "8_10") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 8 && price < 10) {
          return true;
        }
      });
    } else if (rangePrice === "10_12") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 10 && price < 12) {
          return true;
        }
      });
    } else if (rangePrice === "12_15") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 12 && price < 15) {
          return true;
        }
      });
    } else if (rangePrice === "15_20") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 15 && price < 20) {
          return true;
        }
      });
    } else if (rangePrice === "20_100") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 20 && price < 100) {
          return true;
        }
      });
    } else {
      temp_ = temp;
    }
  } else {
    temp = phones;
    if (rangePrice === "0_1") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price < 1) {
          return true;
        }
      });
    } else if (rangePrice === "1_2") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 1 && price < 2) {
          return true;
        }
      });
    } else if (rangePrice === "2_3") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 2 && price < 3) {
          return true;
        }
      });
    } else if (rangePrice === "3_4") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 3 && price < 4) {
          return true;
        }
      });
    } else if (rangePrice === "4_5") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 4 && price < 5) {
          return true;
        }
      });
    } else if (rangePrice === "5_6") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 5 && price < 6) {
          return true;
        }
      });
    } else if (rangePrice === "6_8") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 6 && price < 8) {
          return true;
        }
      });
    } else if (rangePrice === "8_10") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 8 && price < 10) {
          return true;
        }
      });
    } else if (rangePrice === "10_12") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 10 && price < 12) {
          return true;
        }
      });
    } else if (rangePrice === "12_15") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 12 && price < 15) {
          return true;
        }
      });
    } else if (rangePrice === "15_20") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 15 && price < 20) {
          return true;
        }
      });
    } else if (rangePrice === "20_100") {
      temp_ = temp.filter((phone) => {
        let price = Math.floor(phone.price.split(",").join("")) / 1000000;
        if (price >= 20 && price < 100) {
          return true;
        }
      });
    } else {
      temp_ = temp;
    }
  }
  if (rangePrice) {
    temp = temp_;
  } else {
    temp = temp;
  }
  // console.log(brand);
  // console.log(temp);

  const totalPages = Math.ceil(temp.length / phonesPerPage);
  const pages = [...Array(totalPages + 1).keys()].slice(1);
  const indexOfLastPage = currentPage * phonesPerPage;
  const indexOfFirstPage = indexOfLastPage - phonesPerPage;

  const visiblePhones = temp.slice(indexOfFirstPage, indexOfLastPage);
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
  return (
    <div>
      <Carousel data-bs-theme="dark" className="carousel">
        <Carousel.Item>
          <img
            className="d-block w-100 rounded"
            src="https://cdn.hoanghamobile.com/i/home/Uploads/2023/10/24/infinix-note-30-5g-01.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded"
            src="https://cdn.hoanghamobile.com/i/home/Uploads/2023/10/25/web-v29e-03.jpg"
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
      <Carousel>
        <Carousel.Item>
          <ul className="p-0 pt-2 m-0 flex  justify-center ">
            {imgs.map((img, index) => {
              if (index <= 7) {
                return (
                  <li
                    className={clsx(
                      styles.item,
                      "list-none p-2 m-px mx-3.5 my-1.5 border rounded shadow-md "
                    )}
                    key={index}
                  >
                    <img src={img} alt="This is a image" />
                  </li>
                );
              }
            })}
          </ul>
        </Carousel.Item>
        <Carousel.Item>
          <ul className="p-0 pt-2 m-0 flex  justify-center ">
            {imgs.map((img, index) => {
              if (index >= 1 && index <= 8) {
                return (
                  <li
                    className={clsx(
                      styles.item,
                      "list-none p-2 m-px mx-3.5 my-1.5 border rounded shadow-md "
                    )}
                    key={index}
                  >
                    <img src={img} alt="This is a image" />
                  </li>
                );
              }
            })}
          </ul>
        </Carousel.Item>
        <Carousel.Item>
          <ul className="p-0 pt-2 m-0 flex  justify-center ">
            {imgs.map((img, index) => {
              if (index >= 2 && index <= 9) {
                return (
                  <li
                    className={clsx(
                      styles.item,
                      "list-none p-2 m-px mx-3.5 my-1.5 border rounded shadow-md "
                    )}
                    key={index}
                  >
                    <img src={img} alt="This is a image" />
                  </li>
                );
              }
            })}
          </ul>
        </Carousel.Item>
        <Carousel.Item>
          <ul className="p-0 pt-2 m-0 flex  justify-center ">
            {imgs.map((img, index) => {
              if (index >= 3 && index <= 10) {
                return (
                  <li
                    className={clsx(
                      styles.item,
                      "list-none p-2 m-px mx-3.5 my-1.5 border rounded shadow-md "
                    )}
                    key={index}
                  >
                    <img src={img} alt="This is a image" />
                  </li>
                );
              }
            })}
          </ul>
        </Carousel.Item>
        <Carousel.Item>
          <ul className="p-0 pt-2 m-0 flex  justify-center ">
            {imgs.map((img, index) => {
              if (index >= 4 && index <= 11) {
                return (
                  <li
                    className={clsx(
                      styles.item,
                      "list-none p-2 m-px mx-3.5 my-1.5 border rounded shadow-md "
                    )}
                    key={index}
                  >
                    <img src={img} alt="This is a image" />
                  </li>
                );
              }
            })}
          </ul>
        </Carousel.Item>
        <Carousel.Item>
          <ul className="p-0 pt-2 m-0 flex  justify-center ">
            {imgs.map((img, index) => {
              if (index >= 5 && index <= 12) {
                return (
                  <li
                    className={clsx(
                      styles.item,
                      "list-none p-2 m-px mx-3.5 my-1.5 border rounded shadow-md "
                    )}
                    key={index}
                  >
                    <img src={img} alt="This is a image" />
                  </li>
                );
              }
            })}
          </ul>
        </Carousel.Item>
        <Carousel.Item>
          <ul className="p-0 pt-2 m-0 flex  justify-center ">
            {imgs.map((img, index) => {
              if (index >= 6 && index <= 13) {
                return (
                  <li
                    className={clsx(
                      styles.item,
                      "list-none p-2 m-px mx-3.5 my-1.5 border rounded shadow-md "
                    )}
                    key={index}
                  >
                    <img src={img} alt="This is a image" />
                  </li>
                );
              }
            })}
          </ul>
        </Carousel.Item>
        <Carousel.Item>
          <ul className="p-0 pt-2 m-0 flex  justify-center ">
            {imgs.map((img, index) => {
              if (index >= 7 && index <= 14) {
                return (
                  <li
                    className={clsx(
                      styles.item,
                      "list-none p-2 m-px mx-3.5 my-1.5 border rounded shadow-md "
                    )}
                    key={index}
                  >
                    <img src={img} alt="This is a image" />
                  </li>
                );
              }
            })}
          </ul>
        </Carousel.Item>
        <Carousel.Item>
          <ul className="p-0 pt-2 m-0 flex  justify-center ">
            {imgs.map((img, index) => {
              if (index >= 8 && index <= 15) {
                return (
                  <li
                    className={clsx(
                      styles.item,
                      "list-none p-2 m-px mx-3.5 my-1.5 border rounded shadow-md "
                    )}
                    key={index}
                  >
                    <img src={img} alt="This is a image" />
                  </li>
                );
              }
            })}
          </ul>
        </Carousel.Item>
      </Carousel>
      <Breadcrumb className="mt-2">
        <Breadcrumb.Item>
          <Link to="/" className="no-underline">
            <i className="fa-solid fa-house mr-1"></i>Home
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item
          onClick={() => {
            setBrand("");
            setRangePrice("");
          }}
        >
          Điện thoại
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className={clsx(styles.filter, "flex justify-evenly ")}>
        <p>Lọc danh sách: </p>
        <ul className="flex justify-evenly m-0">
          <li>
            <div>
              <span>Danh mục</span>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
            <ul className={clsx(styles.subCategory, "p-0")}>
              <li>
                <ul className="p-0">
                  <li onClick={() => navigate("/phones/apple")}>Apple</li>
                  <li>Nokia</li>
                  <li>Infinix</li>
                  <li>TCL</li>
                </ul>
              </li>
              <li>
                <ul className="p-0">
                  <li onClick={() => navigate("/phones/samsung")}>Samsung</li>
                  <li>Realme</li>
                  <li>ROG</li>
                  <li>Itel</li>
                </ul>
              </li>
              <li>
                <ul className="p-0">
                  <li>Xiaomi</li>
                  <li>Vivo</li>
                  <li>Nubia</li>
                  <li>Mới - Tin đồn</li>
                </ul>
              </li>
              <li>
                <ul className="p-0">
                  <li>OPPO</li>
                  <li>HONOR</li>
                  <li>XOR</li>
                </ul>
              </li>
              <li>
                <ul className="p-0">
                  <li>TECNO</li>
                  <li>HTC</li>
                  <li>Masstel</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            {brand ? (
              <div onClick={() => setBrand("")}>
                <i
                  class="fa-solid fa-circle-minus"
                  style={{ color: "#ff3333" }}
                ></i>
                <span
                  style={{ color: "#d10000", fontSize: "15px" }}
                  className="ml-1"
                >
                  Thương hiệu:
                </span>
                <span className="font-bold ml-2">{brand}</span>
              </div>
            ) : (
              <div>
                <span>Thương hiệu</span>
                <i className="fa-solid fa-chevron-down"></i>
              </div>
            )}
            <ul className={clsx(styles.subBrand, "p-0")}>
              <li>
                <ul className="p-0">
                  <li onClick={() => setBrand("Samsung")}>
                    Samsung ({countSamsung})
                  </li>
                  <li onClick={() => setBrand("Vivo")}>Vivo ({countVivo})</li>
                  <li onClick={() => setBrand("Itel")}>Itel ({countItel})</li>
                  <li onClick={() => setBrand("Philips")}>
                    Philips ({countPhilips})
                  </li>
                </ul>
              </li>
              <li>
                <ul className="p-0">
                  <li onClick={() => setBrand("Apple")}>
                    Apple ({countApple})
                  </li>
                  <li onClick={() => setBrand("Nokia")}>
                    Nokia ({countNokia})
                  </li>
                  <li onClick={() => setBrand("HONOR")}>
                    HONOR ({countHonor})
                  </li>
                  <li onClick={() => setBrand("Asus")}>Asus ({countAsus})</li>
                </ul>
              </li>
              <li>
                <ul className="p-0">
                  <li onClick={() => setBrand("Xiaomi")}>
                    Xiaomi ({countXiaomi})
                  </li>
                  <li onClick={() => setBrand("Realme")}>
                    Realme ({countRealme})
                  </li>
                  <li onClick={() => setBrand("XOR")}>XOR ({countXor})</li>
                  <li onClick={() => setBrand("Huawei")}>
                    Huawei ({countHuawei})
                  </li>
                </ul>
              </li>
              <li>
                <ul className="p-0">
                  <li onClick={() => setBrand("OPPO")}>OPPO ({countOppo})</li>
                  <li onClick={() => setBrand("TCL")}>TCL ({countTcl})</li>
                  <li onClick={() => setBrand("Nubia")}>
                    Nubia ({countNubia})
                  </li>
                </ul>
              </li>
              <li>
                <ul className="p-0">
                  <li onClick={() => setBrand("TECNO")}>
                    TECNO ({countTecno})
                  </li>
                  <li onClick={() => setBrand("Infinix")}>
                    Infinix ({countInfinix})
                  </li>
                  <li onClick={() => setBrand("HTC")}>HTC ({countHtc})</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            {rangePrice ? (
              <div onClick={() => setRangePrice("")}>
                <i
                  class="fa-solid fa-circle-minus"
                  style={{ color: "#ff3333" }}
                ></i>
                <span
                  style={{ color: "#d10000", fontSize: "15px" }}
                  className="ml-1"
                >
                  Giá:
                </span>
                <span style={{ fontSize: "16px" }} className="font-bold ml-1">
                  {rangePrice}
                </span>
              </div>
            ) : (
              <div>
                <span>Giá</span>
                <i className="fa-solid fa-chevron-down"></i>
              </div>
            )}
            <ul className={clsx(styles.subPrice, "p-0")}>
              <li>
                <ul className="p-0">
                  <li onClick={() => setRangePrice("0_1")}>
                    Dưới 1 triệu ({count0_1})
                  </li>
                  <li onClick={() => setRangePrice("5_6")}>
                    5 đến 6 triệu ({count5_6})
                  </li>
                  <li onClick={() => setRangePrice("15_20")}>
                    15 đến 20 triệu ({count15_20})
                  </li>
                </ul>
              </li>
              <li>
                <ul className="p-0">
                  <li onClick={() => setRangePrice("1_2")}>
                    1 đến 2 triệu ({count1_2})
                  </li>
                  <li onClick={() => setRangePrice("6_8")}>
                    6 đến 8 triệu ({count6_8})
                  </li>
                  <li onClick={() => setRangePrice("20_100")}>
                    20 đến 100 triệu ({count20_100})
                  </li>
                </ul>
              </li>
              <li>
                <ul className="p-0">
                  <li onClick={() => setRangePrice("2_3")}>
                    2 đến 3 triệu ({count2_3})
                  </li>
                  <li onClick={() => setRangePrice("8_10")}>
                    8 đến 10 triệu ({count8_10})
                  </li>
                </ul>
              </li>
              <li>
                <ul className="p-0">
                  <li onClick={() => setRangePrice("3_4")}>
                    3 đến 4 triệu ({count3_4})
                  </li>
                  <li onClick={() => setRangePrice("10_12")}>
                    10 đến 12 triệu ({count10_12})
                  </li>
                </ul>
              </li>
              <li>
                <ul className="p-0">
                  <li onClick={() => setRangePrice("4_5")}>
                    4 đến 5 triệu ({count4_5})
                  </li>
                  <li onClick={() => setRangePrice("12_15")}>
                    12 đến 15 triệu ({count12_15})
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <div>
              <span>Bluetooth</span>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
          </li>
          <li>
            <div>
              <span>Độ phân giải</span>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
          </li>
          <li>
            <div>
              <span>Kích thước màn hình</span>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
          </li>
          <li>
            <div>
              <span>RAM</span>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
          </li>
          <li>
            <div>
              <span>Sắp xếp</span>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
            <ul className={clsx(styles.subSort, "p-0")}>
              <li>
                <ul className="p-0">
                  <li
                    onClick={() => {
                      setSortTypeName("price");
                      setSortType("");
                    }}
                  >
                    Mặc định
                  </li>
                  <li
                    onClick={() => {
                      setSortTypeName("price");
                      setSortType("asc");
                    }}
                  >
                    Giá thấp đến cao
                  </li>
                  <li
                    onClick={() => {
                      setSortTypeName("price");
                      setSortType("desc");
                    }}
                  >
                    Giá cao đến thấp
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <h4 className="mt-2">Điện thoại</h4>
      <ul className="p-0 pt-2 m-0 flex flex-wrap justify-evenly">
        {visiblePhones.map((element) => {
          if (element.type === "phone") {
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
            );
          }
        })}
      </ul>
      <Pagination
        style={{ display: "flex", justifyContent: "center" }}
        className="mt-2"
      >
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
    </div>
  );
}

export default Phones;
