import classNames from 'classnames/bind'
import React, { useRef } from 'react'
import Slider from 'react-slick'
import BesidesQuickPrint from '../../components/BesidesQuickPrint'
import Footer from '../../layouts/Footer/Footer'
import Header from '../../layouts/Header/Header'
import SlideShow from '../../layouts/Slides/SlideShow'

import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import styles from './index.module.scss'
import PaperBags from '../../components/InOffset/PaperBags'
import MidAutumn from '../../components/InOffset/MidAutumn'
import Vouchers from '../../components/InOffset/Vouchers'
import Book from '../../components/InOffset/Book'

const cx = classNames.bind(styles)

const InOffset = () => {
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
      <div className={cx('inOffset__container')}>
        <div>
          <h1 className={cx('text__title')}>
            IN OFFSET CHẤT LƯỢNG – CÔNG TY IN ẤN TRẦN GIA
          </h1>
          <div className={cx('text')}>
            <p>
              <span>In Offset</span> chất lượng cao, với số lượng lớn trong thời
              gian nhanh chóng, đảm bảo đầu ra chất lượng sản phẩm, màu sắc cũng
              như tiến độ cho công việc cũng nhơ những sự án của khách hàng.
            </p>
            <p className={cx('margin_text')}>
              Với kỹ thuật in offset thì các xưởng in vẫn có thể tạo ra những
              sản phẩm có màu sắc đẹp và bắt mắt, làm nổi bật thiết kế. Độ chuẩn
              màu của sản phẩm sau khi in ở mức tốt, các lỗi thường gặp như in
              mờ, mực lốm đốm hay nhòe sẽ ít gặp hơn nếu chọn kỹ thuật in này.
            </p>
            <p>
              Công nghệ{' '}
              <span>
                in Offset hiện đại uy tín, chất lượng cao tại In Trần Gia
              </span>
              luôn đáp ứng nhu cầu tất cả các nhu cầu của quý khách với thái độ
              thân thiện, nhiệt tình{' '}
              <span>nhanh chóng, đảm bảo chất lượng giá cả cạnh tranh</span>,
              cam kết đem đến sự <span>hài lòng 100%</span> cho khách hàng.
            </p>
          </div>
        </div>
        <div>
          <h1 className={cx('text__title')}>
            CÁC SẢN PHẨM IN OFFSET – IN SỐ LƯỢNG NHIỀU TẠI TRẦN GIA
          </h1>
          <PaperBags />
          <MidAutumn />
          <Vouchers />
          <Book />
        </div>

        <div>
          <h1 className={cx('text__title')}>
            Ngoài các sản phẩm thông dụng trên In TRẦN GIA nhận in ấn tất cả các{' '}
            <br />
            mặt hàng trên chất liệu giấy
          </h1>

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

export default InOffset
