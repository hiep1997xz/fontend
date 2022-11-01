import classNames from 'classnames/bind'
import React, { useRef } from 'react'
import Slider from 'react-slick'
import BesidesQuickPrint from '../../components/BesidesQuickPrint'
import Billings from '../../components/QuirkPint/Billings'
import Catalogue from '../../components/QuirkPint/Catalogue'
import InvitationCard from '../../components/QuirkPint/InvitationCard'
import TemDecal from '../../components/QuirkPint/TemDecal'
import Vouchers from '../../components/QuirkPint/Vouchers'
import Footer from '../../layouts/Footer/Footer'
import Header from '../../layouts/Header/Header'
import SlideShow from '../../layouts/Slides/SlideShow'
import styles from './QuanlityQuickPrint.module.scss'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const cx = classNames.bind(styles)

const QuanlityQuickPrint = () => {
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
      <div className={cx('quantity__container')}>
        <div>
          <h1 className={cx('text__title')}>
            IN NHANH CHẤT LƯỢNG CAO – CÔNG TY IN ẤN TRẦN GIA
          </h1>
          <div className={cx('text')}>
            <p>
              <span>In nhanh, in số lượng ít </span>phục vụ các nhu cầu cấp
              thiết của doanh nghiệp, đặc biệt trong các công việc cần hoàn
              thành trong thời gian gấp, xử lý sự cố phát sinh, hay là việc in
              mẫu, in thử nghiệm, nhu cầu doanh nghiệp chỉ ở một số lượng nhỏ
              nhất định.
            </p>
            <p className={cx('margin_text')}>
              Với <span>kỹ thuật in hiện đại, </span>khách hàng sẽ vẫn có được
              những sản phẩm in ấn chất lượng không khác gì được in offset chỉ
              trong thời gian ngắn.
            </p>
            <p>
              <span> Công nghệ in siêu tốc</span>, in số lượng ít phù hợp với
              các ấn phẩm văn phòng (name card, bao thư, giấy tiêu đề,…), tem
              nhãn, nhãn dán decal, catalogue, tờ rơi, tờ gấp, hóa đơn,…{' '}
              <span>In Trần Gia</span> đáp ứng nhu cầu tất cả các nhu cầu in
              nhanh lấy ngay của quý khách với tốc độ nhanh chóng, chất lượng
              được đảm bảo, cam kết đem đến sự hài lòng 100%.
            </p>
          </div>
        </div>
        <div>
          <h1 className={cx('text__title')}>
            CÁC SẢN PHẨM IN NHANH – IN SỐ LƯỢNG ÍT TẠI TRẦN GIA
          </h1>
          <TemDecal />
          <Catalogue />
          <InvitationCard />
          <Vouchers />
          <Billings />
        </div>

        <div>
          <h1 className={cx('text__title')}>
            Ngoài các sản phẩm thông dụng trên In TRẦN GIA nhận in ấn tất cả các{' '}
            <br />
            mặt hàng trên chất liệu giấy
          </h1>

          <Slider ref={sliderRef} {...settings}>
            <div className={cx('d-flex')}>
              <BesidesQuickPrint />
            </div>
          </Slider>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default QuanlityQuickPrint
