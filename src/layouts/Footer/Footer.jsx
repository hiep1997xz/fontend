import { Button } from "antd";
import TextArea from "antd/lib/input/TextArea";
import classNames from "classnames/bind";
import EmailIcon from "../../assets/Footer/EmailIcon.svg";
import FacebookIcon from "../../assets/Footer/FacebookIcon.svg";
import IconPhone from "../../assets/Footer/IconPhone.svg";
import img1 from "../../assets/Footer/img1.jpg";
import InIcon from "../../assets/Footer/InIcon.svg";
import LogoColor from "../../assets/Footer/LogoColor.svg";
import MapIcon from "../../assets/Footer/MapIcon.svg";
import YoutubeIcon from "../../assets/Footer/YoutubeIcon.svg";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <div className={cx("footer")}>
      <div className={cx("footer-header")}>
        <div className={cx("footer-contact")}>
          <h1>LIÊN HỆ CHÚNG TÔI</h1>
          <div className={cx("hotline")}>
            <div>
              <div className={cx("hotline-phone")}>
                <img src={IconPhone} alt="" />
                <p>
                  <span>Hotline/Zalo:</span> 0986 801 797
                </p>
              </div>
              <p style={{ marginLeft: "142px" }}>0986 801 797</p>
            </div>
            <div className={cx("hotline-email")}>
              <img src={MapIcon} alt="" />
              <p>
                <span>Văn phòng:</span> Số 90, Cụm 3, Tổ 1, Ngõ 118, Phố Đào
                Tấn, P. Cống Vị, Q.Ba Đình, TP. Hà Nội.
              </p>
            </div>
          </div>
          <div className={cx("email")}>
            <div>
              <div className={cx("icon-phone")}>
                <img src={EmailIcon} alt="" />
                <p>
                  <span>Gmail:</span> inanthietketrangia@gmail.com
                </p>
              </div>
              <p style={{ marginLeft: "88px" }}>tranbinhdesign@gmail.com</p>
            </div>
            <div className={cx("map-email")}>
              <img src={MapIcon} alt="" />
              <p>
                <span>Trụ sở:</span> Cụm công nghiệp Lai Xá, xã Kim chung, huyện
                Hoài Đức, TP. Hà Nội.
              </p>
            </div>
          </div>
        </div>
        <div className={cx("footer-facebook")}>
          <h1>Facebook</h1>
          <img src={img1} alt="" />
        </div>
      </div>
      <div className={cx("footer-body")}>
        <div className={cx("footer-body-content")}>
          <div className={cx("footer-body-content-1")}>
            <img src={LogoColor} alt="" className={cx("img")} />
            <p className={cx("text-1")}>NHANH CHÓNG - THÂN THIỆN - HỢP LÍ</p>
            <p className={cx("text-2")}>
              TRẦN GIA là công thiết kế in ấn tại Hà Nội cam kết mang đến <br />{" "}
              cho bạn những sản phẩm in ấn chất lượng cao nhất với giá cả <br />{" "}
              cạnh tranh và dịch vụ khách hàng tốt nhất. Chúng tôi nhận in
              <br /> và vận chuyển sản phẩm trên toàn quốc.
            </p>
            <div className={cx("logo")}>
              <img src={FacebookIcon} alt="" className={cx("img1")} />
              <img src={InIcon} alt="" className={cx("img2")} />
              <img src={YoutubeIcon} alt="" className={cx("img3")} />
            </div>
          </div>
          <div className={cx("footer-body-content-2")}>
            <h1>Sản phẩm</h1>
            <div className={cx("list-products")}>
              <div className={cx("list-products-1")}>
                <p>In Nhanh</p>
                <p>In Offset</p>
                <p>In Đen Trắng</p>
                <p>Thiết kế in ấn</p>
              </div>
              <div className={cx("list-products-2")}>
                <p>Về chúng tôi</p>
                <p>Liên hệ</p>
                <p>Blog</p>
              </div>
            </div>
          </div>
          <div className={cx("footer-body-content-3")}>
            <div>
              <h1>Đóng góp ý kiến</h1>
              <TextArea
                className={cx("text-area")}
                placeholder="Nhập nội dung "
              />
            </div>
            <div className={cx("btn")}>
              <Button className={cx("btn-send")}>Gửi</Button>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("footer-end")}>
        Copyright 2022 © In Ấn Trần Gia. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
