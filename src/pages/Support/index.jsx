import classNames from 'classnames/bind'
import React, { useRef } from 'react'
import Slider from 'react-slick'
import BesidesQuickPrint from '../../components/BesidesQuickPrint'
import Footer from '../../layouts/Footer/Footer'
import Header from '../../layouts/Header/Header'

import img from '../../assets/support/img.png'

import styles from './index.module.scss'

const cx = classNames.bind(styles)

const Support = () => {
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
      <div className={cx('support__container')}>
        <div className={cx('support__form')}>
          <div className={cx('support__form__1')}>
            <p className={cx('support__text')}>TRUNG TÂM HỖ TRỢ KHÁCH HÀNG VỀ IN ẤN</p>
            <p className={cx('mgBottom')}>
              Mọi yêu cầu hợp tác hoặc phản ánh về thương hiệu In ấn Trần Gia
              vui lòng liên hệ trực tiếp thông tin đã được cung cấp phía bên
              dưới. Xin cảm ơn!
            </p>
            <p>
              <span>• Địa chỉ:</span> Số 90, Cụm 3, Tổ 1, Ngõ 118, Phố Đào Tấn,
              P. Cống Vị, Q.Ba Đình, TP. Hà Nội.
            </p>
            <p>
              <span>• Tư vấn đặt hàng:</span> 0986 081 797 - 0972 096 797 / Zalo
            </p>
            <p>
              <span>• Email:</span> tranbinhdesign@gmail.com
            </p>
          </div>
          <div className={cx('support__form__2')}>
            <p className={cx('working__times')}>THỜI GIAN LÀM VIỆC CỐ ĐỊNH</p>
            <div className={cx('text__aline')}>
              <p>• Thứ 2: 08:30 – 17:30</p>
              <p>• Thứ 3: 08:30 – 17:30</p>
              <p>• Thứ 4: 08:30 – 17:30</p>
              <p>• Thứ 5: 08:30 – 17:30</p>
              <p>• Thứ 6: 08:30 – 17:30</p>
              <p>• Thứ 7: 08:30 – 17:30</p>
              <p>• <span>Chủ nhật: Nghỉ</span></p>
            </div>
            <div className={cx('color')}>In Trần Gia phục vụ tự vấn online 24/7 </div>
          </div>
        </div>
        <div className={cx('thanks')}>♥ XIN CHÂN THÀNH CẢM ƠN  ♥</div>
        <img src={img} alt='' className={cx('img')} />
        <div>
          <div>
            <div className={cx('featured__order')}>Đơn hàng nổi bật</div>
            <Slider ref={sliderRef} {...settings}>
              <div className={cx('d-flex')}>
                <BesidesQuickPrint />
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Support
