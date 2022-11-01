import classNames from 'classnames/bind'
import React, { useRef } from 'react'
import Slider from 'react-slick'
import BesidesQuickPrint from '../../components/BesidesQuickPrint'
import Footer from '../../layouts/Footer/Footer'
import Header from '../../layouts/Header/Header'
import SlideShow from '../../layouts/Slides/SlideShow'

import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import ListDecal from '../../components/ListDecal'
import styles from './index.module.scss'

const cx = classNames.bind(styles)

const Decal = () => {
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
          <h1 className={cx('text__title')}>ẤN PHẨM TEM NHÃN DECAL</h1>
          <div className={cx('text')}>
            <p>
              <span>Tem nhãn decal</span> được sử dụng để dán bên ngoài bao bì
              hàng hóa, có tác dụng truyền tải các thông tin, hình ảnh về nhà
              sản xuất và sản phẩm. In tem nhãn decal là một giải pháp PR
              Marketing hiệu quả để thu hút sự quan tâm của khách hàng.
            </p>
            <p className={cx('margin_text')}>
              <sapn>In Trần Gia</sapn> nhận in tem nhãn decal, với cam{' '}
              <span>kết đảm bảo chất lượng</span>. Chúng tôi đáp ứng mọi nhu cầu
              của quý khách về số lượng cũng như chất liệu decal: decal giấy,
              decal nhựa sữa, decal nhựa trong, decal si vàng, decal si bạc,
              decal 7 màu, decal bể (tem bảo hành)
            </p>
          </div>
        </div>
        <div className={cx('list_decal')}>
          <ListDecal />
        </div>
        {/* <div className={cx('float_right')}>
          <Pagination defaultCurrent={1} total={50} />
        </div> */}
        <div className={cx('boder__bottom')}></div>
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

export default Decal
