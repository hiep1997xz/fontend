import classNames from 'classnames/bind'
import React, { useRef } from 'react'
import Slider from 'react-slick'
import img3 from '../../assets/details/edit.png'
import img1 from '../../assets/details/Vector.png'
import img2 from '../../assets/details/view.png'
import BesidesQuickPrint from '../../components/BesidesQuickPrint'
import Footer from '../../layouts/Footer/Footer'
import Header from '../../layouts/Header/Header'
import SlideShow from '../../layouts/Slides/SlideShow'

import styles from './index.module.scss'

const cx = classNames.bind(styles)

const Details = () => {
  const sliderRef = useRef(null)
  const settings = {
    dots: true,
    autoplay: true,
    speed: 300,
    slidesToScroll: 1,
  }
  return (
    <>
      <Header />
      <SlideShow />
      <div className={cx('details__container')}>
        <div>
          <div className={cx('d_flex')}>
            <div>
              <div className={cx('img__details')}></div>
              <div className={cx('img__details_bottom')}>
                <div className={cx('d_flex')}>
                  <img src={img1} alt="" className={cx('widthImg1')} />
                  <p className={cx('text')}>150</p>
                </div>
                <div className={cx('d_flex')}>
                  <img src={img2} alt="" className={cx('width')} />
                  <p className={cx('text')}>150</p>
                </div>
              </div>
            </div>
            <div className={cx('group__text')}>
              <h1 className={cx('text__title')}>
                In Hộp Trung Thu 4 bánh Kinh Đô
              </h1>
              <p>
                <span>Kỹ thuật in: </span>Digital/Offset
              </p>
              <p>
                <span>Chất liệu giấy: </span>Couches
              </p>
              <p>
                <span>Kỹ thuật gia công: </span>Cắt thành phẩm
              </p>
              <p>
                <span>Chủ đề: </span>
                <span className={cx('color__text')}>Sắc màu, hiện đại</span>
              </p>
              <div className={cx('group__btn')}>
                <button className={cx('btn')}>
                  <img src={img3} alt="" />
                  <p>Thiết kế theo yêu cầu</p>
                </button>
              </div>
              <p>
                <span>Thông tin khác:</span>
              </p>
              <p>
                <span>Tư vấn về sản phẩm: </span>DĐ/Zalo - 0972 096 797
              </p>
              <p>
                <span>Nhận báo giá: </span>Zalo - 0972 096 797 /
                tranbinhdesign@gmail.com
              </p>
            </div>
          </div>
          <div>
            <p>Chi tiết sản phẩm</p>
            <p>In Hộp Trung Thu 4 bánh Kinh Đô</p>
            <div className={cx('form__text')}></div>
            <p>Giới thiệu thiết kế hộp bánh</p>
            <span>
              Hộp bánh Trung Thu Nguyệt Quang Bảo Hợp 4 bánh là loại hộp nắp âm
              dương với tông màu chủ đạo là vàng đồng. Đây là một tông màu vô
              cùng sang trọng và quý phải, là biểu tượng cho tầng lớp quý tộc
              ngày xưa. Những hộp con đựng bánh được làm từ giấy Ivory 300gsm.
              Phương pháp in là in offset 4 màu CMYK mặt ngoài, cán mờ, ép kim
              logo. Hộp lớn bên ngoài được làm từ carton lạnh 2mm bồi giấy C150
              in màu cán mờ.
            </span>
            <div className={cx('form__text__1')}></div>
            <p>
              Ưu điểm của mẫu hộp bánh Trung Thu Nguyệt Quang Bảo Hợp 4 bánh
            </p>
            <span>
              Màu vàng đồng nổi bật làm nên sự sang trọng, quý phái cho hộp bánh
              Sử dụng chất liệu giấy cao cấp, thân thiện với môi trường và an
              toàn để đựng thực phẩm. Thiết kế độc đáo, ấn tượng đẳng cấp nên
              rất phù hợp cho việc làm quà tặng cho người thân, bạn bè, đồng
              nghiệp, đối tác hay nhân viên
            </span>
            <p>
              Trần Gia - Sự lựa chọn hoàn hảo cho thiết kế và in ấn hộp bánh
              Trung Thu
            </p>
            <span>
              Khi lựa chọn đơn vị thiết kế và in hộp bánh trung thu, khách hàng
              cần cẩn trọng, xem xét kỹ càng lựa chọn đơn vị in ấn chuyên
              nghiệp, uy tín. Tránh tình trạng mất thời gian cũng như chi phí
              tại đơn vị in hộp bánh trung thu giá rẻ. Bởi trên thị trường hiện
              nay có nhiều cơ sở in ấn không đảm bảo chất lượng sản phẩm và đáp
              ứng yêu cầu thiết kế, in ấn của khách hàng. Trần Gia - Công ty
              chuyên thiết kế và in ấn vỏ hộp bánh trung thu đẹp, sáng tạo và uy
              tín số 1 Việt Nam. Với ưu điểm về kho mẫu hộp bánh trung thu có
              sẵn, cũng như quy trình thiết kế và in ấn đồng bộ, giúp khách hàng
              tiết kiệm thời gian và chi phí in hộp bánh trung thu. Bên cạnh đó,
              giá thành in ấn tại Printgo cạnh tranh nhất trên thị trường, cùng
              hàng ngàn ưu đãi, khuyến mãi khủng trong mùa Trung thu năm nay.
            </span>
            <div className={cx('center')}>
              <button className={cx('btn_1')}>
                <span>YÊU CẦU BÁO GIÁ</span>
              </button>
            </div>
          </div>
        </div>
        <div className={cx('mgt50px')}>
          <div className={cx('featured__order')}>Đơn hàng nổi bật</div>
          <Slider ref={sliderRef} {...settings}>
            <div className={cx('d-flex_slider')}>
              <BesidesQuickPrint />
            </div>
          </Slider>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Details
