import React from "react";
import styles from "../styles/Menu.module.css";
import phone from "../../assets/images/icons/phone.png";
import apple from "../../assets/images/icons/apple.png";
import headphones from "../../assets/images/icons/headphones.png";
import recovery from "../../assets/images/icons/recovery.png";
import settings from "../../assets/images/icons/settings.png";
import service from "../../assets/images/icons/service.png";
import hotNews from "../../assets/images/icons/hot-news.png";
import incentive from "../../assets/images/icons/incentive.png";
import clsx from "clsx";
import { Link, useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();
  return (
    <div>
      <ul className={clsx(styles.menuContainer, "rounded")}>
        <li className={clsx(styles.itemContainer, styles.itemContainer1)}>
          <div
            className={clsx(styles.item, styles.item1)}
            onClick={() => navigate("/phones")}
          >
            <img className={styles.img} src={phone} alt="" />
            <span>ĐIỆN THOẠI</span>
          </div>
          <div className={styles.subMenu1}>
            <div className={styles.subMenu11}>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <h6>HÃNG SẢN XUẤT</h6>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <ul>
                        <li onClick={() => navigate("/phones/apple")}>Apple</li>
                        <li>Oppo</li>
                        <li>Realme</li>
                        <li>Infinix</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h6>ĐIỆN THOẠI CAO CẤP</h6>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h6>ĐIỆN THOẠI GẬP</h6>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={styles.subMenu12}>
              <h6>MỨC GIÁ</h6>
              <ul>
                <li>Trên 100 triệu</li>
                <li>Dưới 1 triệu</li>
                <li>Từ 2 đến 3 triệu</li>
                <li>Từ 3 đến 4 triệu</li>
                <li>Từ 6 đến 8 triệu</li>
                <li>Từ 15 đến 20 triệu</li>
                <li>Từ 20 đến 100 triệu</li>
              </ul>
            </div>
            <div className={styles.subMenu13}>
              <h6>QUAN TÂM NHẤT</h6>
              <ul>
                <li>Hôm nay</li>
                <li>Tuần này</li>
                <li>Tháng này</li>
                <li>Năm nay</li>
              </ul>
            </div>
          </div>
        </li>
        <li className={styles.itemContainer}>
          <div
            className={clsx(styles.item)}
            onClick={() => navigate("/phones/apple")}
          >
            <img className={styles.img} src={apple} alt="" />
            <span style={{ padding: "0px 6px" }}>APPLE</span>
          </div>
        </li>
        <li className={clsx(styles.itemContainer, styles.itemContainer1)}>
          <div className={styles.item}>
            <img className={styles.img} src={headphones} alt="" />
            <span>PHỤ KIỆN</span>
          </div>
          <div className={clsx(styles.subMenu1, styles.subMenu2)}>
            <div className={styles.subMenu11}>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <h6>PHỤ KIỆN ĐIỆN THOẠI</h6>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <ul>
                        <li>Sạc dự phòng</li>
                        <li>Củ sạc, dây cáp</li>
                        <li>Thẻ nhớ - USB</li>
                        <li>Bao da - Ốp lưng</li>
                        <li>Miếng dán màn hình</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h6>XẢ TỒN PHỤ KIỆN - GIÁ SỐC</h6>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={styles.subMenu12}>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <h6>PHỤ KIỆN APPLE</h6>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <ul>
                        <li>Phụ kiện chính hãng Apple</li>
                        <li>Phụ kiện Iphone 15</li>
                        <li>Sản phẩm ưu đãi</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h6>PHỤ KIỆN KHÁC</h6>
                      <ul>
                        <li>Balo - Túi xách - Túi chống sốc</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </li>
        <li className={clsx(styles.itemContainer, styles.itemContainer1)}>
          <div className={styles.item}>
            <img className={styles.img} src={recovery} alt="" />
            <span>MÁY TRÔI</span>
          </div>
          <div className={clsx(styles.subMenu1, styles.subMenu3)}>
            <div className={styles.subMenu11}>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <h6>HÀNG CŨ GIÁ RẺ</h6>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <ul>
                        <li>Điện thoại di động</li>
                        <li>Tay cầm chống rung</li>
                        <li>Củ sạc</li>
                        <li>Phụ kiện</li>
                      </ul>
                    </td>
                    <td>
                      <ul className={styles.td2}>
                        <li>Tai nghe</li>
                        <li>Dây cáp</li>
                        <li>Sạc dự phòng</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <h2></h2>
                </tfoot>
              </table>
            </div>
          </div>
        </li>
        <li className={clsx(styles.itemContainer, styles.itemContainer1)}>
          <div className={styles.item}>
            <img className={styles.img} src={settings} alt="" />
            <span>SỬA CHỮA</span>
          </div>
          <div className={clsx(styles.subMenu1, styles.subMenu4)}>
            <div className={styles.subMenu11}>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <h6>ANDROID</h6>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <ul>
                        <li>Pin</li>
                        <li>Màn hình</li>
                      </ul>
                    </td>
                    <td>
                      <ul className={styles.td2}>
                        <li>Camera</li>
                        <li>Vỏ và mặt lưng</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <h2></h2>
                </tfoot>
              </table>
            </div>
            <div className={styles.subMenu11}>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <h6>APPLE IPHONE</h6>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <ul>
                        <li>Camera trước</li>
                        <li>Loa trong - Loa ngoài</li>
                        <li>Camera sau</li>
                        <li>Cáp bo sạc Iphone</li>
                      </ul>
                    </td>
                    <td>
                      <ul className={styles.td2}>
                        <li>Cáp phím âm lượng - Cáp phím nguồn</li>
                        <li>Vỏ - Kính lưng</li>
                        <li>Màn hình</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <h2></h2>
                </tfoot>
              </table>
            </div>
          </div>
        </li>
        <li className={clsx(styles.itemContainer, styles.itemContainer1)}>
          <div className={styles.item}>
            {" "}
            <img className={styles.img} src={service} alt="" />
            <span>DỊCH VỤ</span>
          </div>
          <div className={clsx(styles.subMenu1, styles.subMenu5)}>
            <div className={styles.subMenu11}>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <h6>SIM THẺ</h6>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <ul>
                        <li>Sim MobiFone</li>
                        <li>Sim WINTEL</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <h2></h2>
                </tfoot>
              </table>
            </div>
          </div>
        </li>
        <li className={styles.itemContainer}>
          <div className={styles.item}>
            <img className={styles.img} src={hotNews} alt="" />
            <span>TIN HOT</span>
          </div>
        </li>
        <li className={clsx(styles.itemContainer, styles.itemContainer1)}>
          <div className={styles.item}>
            <img className={styles.img} src={incentive} alt="" />
            <span style={{ padding: "0px 6px" }}>ƯU ĐÃI</span>
          </div>
          <div className={clsx(styles.subMenu1, styles.subMenu6)}>
            <div className={styles.subMenu11}>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <h6>ƯU ĐÃI HOT</h6>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <ul>
                        <li>Combo ưu đãi</li>
                        <li>Combo ưu đãi Samsung</li>
                        <li>Khuyễn mãi Apple</li>
                        <li>Khuyễn mãi Samsung</li>
                        <li>Sản phẩm độc quyền</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <h2></h2>
                </tfoot>
              </table>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
