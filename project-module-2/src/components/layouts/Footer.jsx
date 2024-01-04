import React from "react";
import styles from "../styles/Footer.module.css";
import img1 from "../../assets/images/logos/logo-visa.png";
import img2 from "../../assets/images/logos/logo-master.png";
import img3 from "../../assets/images/logos/logo-jcb.png";
import img4 from "../../assets/images/logos/logo-samsungpay.png";
import img5 from "../../assets/images/logos/logo-atm.png";
import img6 from "../../assets/images/logos/logo-vnpay.png";
import img7 from "../../assets/images/logos/nhattin.jpg";
import img8 from "../../assets/images/logos/vnpost.jpg";
import img9 from "../../assets/images/logos/logo-bct.png";
import clsx from "clsx";

function Footer() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.col1}>
          <h6>Hỗ trợ dịch vụ</h6>
          <ul>
            <li>Mua hàng trả góp</li>
            <li>Hướng dẫn đặt hàng và thanh toán</li>
            <li>Tra cứu đơn hàng</li>
            <li>Chính sách bảo hành</li>
            <li>Phạm vi, điều khoản gói bảo hành mở rộng</li>
            <li>Chính sách bảo mật</li>
            <li>Chính sách giải quyết khiếu nại</li>
            <li>Điều khoản mua bán hàng hoá</li>
            <li>Câu hỏi thường gặp</li>
          </ul>
        </div>
        <div className={styles.col2}>
          <h6>Thông tin liên hệ</h6>
          <ul>
            <li>Bán hàng online</li>
            <li>Chăm sóc khách hàng</li>
            <li>Dịch vụ sửa chữa Thái Linh Care</li>
            <li>Hợp tác kinh doanh</li>
            <li>Tra cứu bảo hành</li>
          </ul>
        </div>
        <div className={styles.col3}>
          <h6>Hệ thống 127 siêu thị trên toàn quốc</h6>
          <ul>
            <li>Danh sách 127 siêu thị trên toàn quốc</li>
          </ul>
        </div>
        <div className={styles.col4}>
          <h6 style={{ color: "white" }}>Tổng đài</h6>
          <p>1900.2091</p>
        </div>
        <div className={styles.col5}>
          <h6 style={{ color: "white" }}>Thanh toán miễn phí</h6>
          <div className="flex flex-wrap">
            <img src={img1} />
            <img src={img2} />
            <img src={img3} />
            <img src={img4} />
            <img src={img5} />
            <img src={img6} />
          </div>
        </div>
        <div className={styles.col6}>
          <h6 style={{ color: "white" }}>Hình thức vận chuyển</h6>
          <div className="flex flex-wrap">
            <img src={img7} />
            <img src={img8} />
            <img src={img9} />
          </div>
        </div>
        <div className={clsx(styles.col7, "")}>
          <p>
            © 2020. CÔNG TY CỔ PHẦN XÂY DỰNG VÀ ĐẦU TƯ THƯƠNG MẠI THÁI LINH.
            MST: 0106713191. (Đăng ký lần đầu: Ngày 15 tháng 12 năm 2014, Đăng
            ký thay đổi ngày 24/11/2022)
          </p>
          <p>GP số 426/GP-TTĐT do sở TTTT Hà Nội cấp ngày 22/01/2021</p>
          <p>
            Địa chỉ: Số 89 Đường Tam Trinh, Phường Mai Động, Quận Hoàng Mai,
            Thành Phố Hà Nội, Việt Nam. Điện thoại: 1900.2091. Chịu trách nhiệm
            nội dung: Thái Ngọc Linh.
          </p>
        </div> 
      </div>
    </div>
  );
}

export default Footer;
