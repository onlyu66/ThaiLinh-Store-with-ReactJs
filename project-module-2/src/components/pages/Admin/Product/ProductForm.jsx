import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { postProducts, putProducts } from "../../../../redux/productSlice";
import styles from "../../../styles/ProductForm.module.css";
import axios from "axios";
import { imageDb } from "./firebaseConfig";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

function ProductForm(props) {
  const [inputForm, setInputForm] = useState({
    id: 0,
    brand: "",
    model: "",
    price: "",
    image: "",
    saling: false,
    type: "",
    quantity: 0,
  });
  const { brand, model, price, image, saling, type, quantity } = inputForm;

  const dispatch = useDispatch();

  const [images, setImages] = useState("");
  const [imgUrl, setImgUrl] = useState([]);
  // const [imgDatas, setImgDatas] = useState([]);
  //   const [disabled, setDisabled] = useState(false);

  const handleChangeInput = (e) => {
    // console.log(file.target.files[0].name);
    // setDisabled(c);

    // setImages(e.target.files);
    // setImages(e.target.files[0]);
    setInputForm({
      ...inputForm,
      [e.target.name]: e.target.value,
      // image: imgUrl,
    });
    // [...images].map((f) => {
    //   setImgDatas(URL.createObjectURL(f));
    // });
    // data();
  };
  //   const data = () =>{
  //     [...images].map((image) => {
  //         setImgDatas(...imgDatas,URL.createObjectURL(image))
  //     })
  //   }
  //   console.log(images);

  //   const onChange = (checked) => {
  //     setDisabled(checked);
  //   };
  // const [progress, setProgress] = useState({ started: false, pc: 0 });
  const [msg, setMsg] = useState(null);

  const handleUpload = () => {
    if (!images) {
      setMsg("No image selected");
      return;
    }

    // const fd = new FormData();
    // for (let i = 0; i < images.length; i++) {
    //   fd.append(`image[${i + 1}`, images[i]);
    // }
    setMsg("Uploading...");
    // setProgress((prevState) => {
    //   return { ...prevState, started: true };
    // });
    // axios
    //   .post(`http://localhost:8000/imagesProducts`, fd, {
    //     onUploadProgress: (ProgressEvent) => {
    //       setProgress((prevState) => {
    //         return { ...prevState, pc: ProgressEvent.progress * 100 };
    //       });
    //     },
    //     headers: {
    //       "Customer-Header": "value",
    //     },
    //   })
    //   .then((res) => {
    //     setMsg("Upload successful");
    //     console.log(res.data);
    //   })
    //   .catch((err) => {
    //     setMsg("Upload failed");

    //     console.log(err);
    //   });
    // Upload image
    if (images !== null) {
      const imgRef = ref(imageDb, `Products/${v4()}`);
      uploadBytes(imgRef, images).then((value) => {
        console.log(value);
        getDownloadURL(value.ref)
          .then((url) => {
            setMsg("Upload successful");
            setImgUrl((data) => [...data, url]);
          })
          .catch((err) => {
            setMsg("Upload failed");
            console.log(err);
          });
      });
    }
    // setImgUrl([]);
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (props.selectProduct) {
      dispatch(putProducts({ inputForm, id: props.selectProduct.id }));
    } else {
      dispatch(postProducts(inputForm));
      // setImgUrl([]);
    }
    setInputForm({
      brand: "",
      model: "",
      price: "",
      image: "",
      saling: false,
      type: "",
      quantity: 0,
    });
    // console.log(props.modelShow);
    props.setSelectProduct("");
    props.setModalShow(!props.modalShow);
  };
  // console.log(props.modelShow, "modelShow");
  // console.log(props.selectProduct, "selectProduct");
  useEffect(() => {
    // listAll(ref(imageDb, "Products")).then((imgs) => {
    //   console.log(imgs);
    //   imgs.items.forEach((value) => {
    //     getDownloadURL(value).then((url) => {
    //       setImgUrl((data) => [...data, url]);
    //     });
    //   });
    // });
    if (props.selectProduct) {
      setInputForm({
        brand: props.selectProduct.brand,
        model: props.selectProduct.model,
        price: props.selectProduct.price,
        image: props.selectProduct.image,
        saling: props.selectProduct.saling,
        type: props.selectProduct.type,
        quantity: props.selectProduct.quantity,
      });
    }
  }, [props.selectProduct]);
  // console.log(imgUrl);
  // console.log(props.selectProduct);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmitForm} className={styles.form}>
          <div>
            <label>Brand: </label>
            <input
              type="text"
              name="brand"
              value={brand}
              onChange={handleChangeInput}
            />
          </div>

          <div>
            <label>Name: </label>
            <input
              type="text"
              name="model"
              value={model}
              onChange={handleChangeInput}
            />
          </div>

          <div>
            <label>Price: </label>
            <input
              type="text"
              name="price"
              value={price}
              onChange={handleChangeInput}
            />
          </div>

          {/* <label>Saling:</label>
            <Switch
              size="small"
              checked={disabled}
              name="saling"
              value={saling}
              onChange={handleChangeInput}
            />
            <br /> */}
          <div>
            <label>Type:</label>
            <input
              type="text"
              name="type"
              value={type}
              onChange={handleChangeInput}
            />
          </div>

          <div>
            <label>Image:</label>
            <input
              type="text"
              // type="file"
              name="image"
              // multiple
              // accept="image/*"
              value={image}
              onChange={handleChangeInput}
              // style={{ flex: 3 }}
            />

            {/* <button onClick={handleUpload} style={{ flex: 1 }}>
              Upload
            </button> */}
          </div>

          <div className="flex mt-2">
            {/* {[...images].map((image) => (
              <div className="mr-2">
                <img
                  src={URL.createObjectURL(image)}
                  className="w-20 h-20 flex"
                  alt="This is a image"
                />
              </div>
            ))} */}
            {/* {imgUrl.map((dataVal) => (
              <div className="mr-2">
                <img
                  src={dataVal}
                  height="100px"
                  width="100px"
                  className="w-20 h-20 flex"
                />
              </div>
            ))} */}
            <div className="mr-2">
              {image ? (
                <img
                  src={image}
                  height="100px"
                  width="100px"
                  className="w-20 h-20 flex"
                />
              ) : (
                <p></p>
              )}
            </div>
          </div>
          <div>
            <label>Quantity:</label>
            <input
              type="number"
              name="quantity"
              value={quantity}
              onChange={handleChangeInput}
            />
          </div>
          <br />
          <button type="submit">
            {props.selectProduct ? "Update Product" : "Add Product"}
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default ProductForm;
