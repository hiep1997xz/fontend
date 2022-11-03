import classNames from 'classnames/bind'
import React from 'react'
import Footer from '../../layouts/Footer/Footer'
import Header from '../../layouts/Header/Header'
import SlideShow from '../../layouts/Slides/SlideShow'

import eye from '../../assets/blog/eye.png'
import date from '../../assets/blog/icon_date.png'
import img from '../../assets/blog/img.png'
import img1 from '../../assets/blog/img1.png'
import like from '../../assets/blog/like.png'
import search from '../../assets/blog/search.png'

import styles from './index.module.scss'

const cx = classNames.bind(styles)

const Blog = () => {
  return (
    <>
      <Header />
      <SlideShow />
      <div className={cx('blog__container')}>
        <h1>Blog</h1>
        <div className={cx('group__blog')}>
          <div className={cx('group__bog__list')}>
            <div className={cx('bog__list')}>
              <img src={img} alt="" />
              <div className={cx('group__content')}>
                <p className={cx('text')}>
                  Chi tiết nhỏ - Gây thương nhớ cho khách hàng
                </p>
                <div className={cx('group__view')}>
                  <div className={cx('group__icon')}>
                    <img src={date} alt="" />
                    <p>20/05/2021</p>
                  </div>
                  <div className={cx('group__icon')}>
                    <img src={eye} alt="" />
                    <p className={cx('text__number')}>20</p>
                  </div>
                  <div className={cx('group__icon')}>
                    <img src={like} alt="" />
                    <p className={cx('text__number')}>20</p>
                  </div>
                  <div className={cx('group__icon')}>
                    <img src={img1} alt="" />
                    <p className={cx('text__number')}>20</p>
                  </div>
                </div>
                <p className={cx('text__desc')}>
                  Nếu bạn muốn xây dựng mối quan hệ tốt đẹp với khách hàng của
                  mình. Hãy bắt tay ngay vào việc viết thư cảm ơn ( nếu có thể
                  bạn hãy viết tay đính kèm trong mỗi sản phẩm thì ý nghĩa sẽ
                  tăng ...
                </p>
                <button className={cx('btn')}>Xem thêm</button>
              </div>
            </div>
            <div className={cx('border__bottom')}></div>
            <div className={cx('bog__list')}>
              <img src={img} alt="" />
              <div className={cx('group__content')}>
                <p className={cx('text')}>
                  Chi tiết nhỏ - Gây thương nhớ cho khách hàng
                </p>
                <div className={cx('group__view')}>
                  <div className={cx('group__icon')}>
                    <img src={date} alt="" />
                    <p>20/05/2021</p>
                  </div>
                  <div className={cx('group__icon')}>
                    <img src={eye} alt="" />
                    <p className={cx('text__number')}>20</p>
                  </div>
                  <div className={cx('group__icon')}>
                    <img src={like} alt="" />
                    <p className={cx('text__number')}>20</p>
                  </div>
                  <div className={cx('group__icon')}>
                    <img src={img1} alt="" />
                    <p className={cx('text__number')}>20</p>
                  </div>
                </div>
                <p className={cx('text__desc')}>
                  Nếu bạn muốn xây dựng mối quan hệ tốt đẹp với khách hàng của
                  mình. Hãy bắt tay ngay vào việc viết thư cảm ơn ( nếu có thể
                  bạn hãy viết tay đính kèm trong mỗi sản phẩm thì ý nghĩa sẽ
                  tăng ...
                </p>
                <button className={cx('btn')}>Xem thêm</button>
              </div>
            </div>
            <div className={cx('border__bottom')}></div>
            <div className={cx('bog__list')}>
              <img src={img} alt="" />
              <div className={cx('group__content')}>
                <p className={cx('text')}>
                  Chi tiết nhỏ - Gây thương nhớ cho khách hàng
                </p>
                <div className={cx('group__view')}>
                  <div className={cx('group__icon')}>
                    <img src={date} alt="" />
                    <p>20/05/2021</p>
                  </div>
                  <div className={cx('group__icon')}>
                    <img src={eye} alt="" />
                    <p className={cx('text__number')}>20</p>
                  </div>
                  <div className={cx('group__icon')}>
                    <img src={like} alt="" />
                    <p className={cx('text__number')}>20</p>
                  </div>
                  <div className={cx('group__icon')}>
                    <img src={img1} alt="" />
                    <p className={cx('text__number')}>20</p>
                  </div>
                </div>
                <p className={cx('text__desc')}>
                  Nếu bạn muốn xây dựng mối quan hệ tốt đẹp với khách hàng của
                  mình. Hãy bắt tay ngay vào việc viết thư cảm ơn ( nếu có thể
                  bạn hãy viết tay đính kèm trong mỗi sản phẩm thì ý nghĩa sẽ
                  tăng ...
                </p>
                <button className={cx('btn')}>Xem thêm</button>
              </div>
            </div>
            <div className={cx('border__bottom')}></div>
            <div className={cx('bog__list')}>
              <img src={img} alt="" />
              <div className={cx('group__content')}>
                <p className={cx('text')}>
                  Chi tiết nhỏ - Gây thương nhớ cho khách hàng
                </p>
                <div className={cx('group__view')}>
                  <div className={cx('group__icon')}>
                    <img src={date} alt="" />
                    <p>20/05/2021</p>
                  </div>
                  <div className={cx('group__icon')}>
                    <img src={eye} alt="" />
                    <p className={cx('text__number')}>20</p>
                  </div>
                  <div className={cx('group__icon')}>
                    <img src={like} alt="" />
                    <p className={cx('text__number')}>20</p>
                  </div>
                  <div className={cx('group__icon')}>
                    <img src={img1} alt="" />
                    <p className={cx('text__number')}>20</p>
                  </div>
                </div>
                <p className={cx('text__desc')}>
                  Nếu bạn muốn xây dựng mối quan hệ tốt đẹp với khách hàng của
                  mình. Hãy bắt tay ngay vào việc viết thư cảm ơn ( nếu có thể
                  bạn hãy viết tay đính kèm trong mỗi sản phẩm thì ý nghĩa sẽ
                  tăng ...
                </p>
                <button className={cx('btn')}>Xem thêm</button>
              </div>
            </div>
            <div className={cx('border__bottom')}></div>
            <div className={cx('bog__list')}>
              <img src={img} alt="" />
              <div className={cx('group__content')}>
                <p className={cx('text')}>
                  Chi tiết nhỏ - Gây thương nhớ cho khách hàng
                </p>
                <div className={cx('group__view')}>
                  <div className={cx('group__icon')}>
                    <img src={date} alt="" />
                    <p>20/05/2021</p>
                  </div>
                  <div className={cx('group__icon')}>
                    <img src={eye} alt="" />
                    <p className={cx('text__number')}>20</p>
                  </div>
                  <div className={cx('group__icon')}>
                    <img src={like} alt="" />
                    <p className={cx('text__number')}>20</p>
                  </div>
                  <div className={cx('group__icon')}>
                    <img src={img1} alt="" />
                    <p className={cx('text__number')}>20</p>
                  </div>
                </div>
                <p className={cx('text__desc')}>
                  Nếu bạn muốn xây dựng mối quan hệ tốt đẹp với khách hàng của
                  mình. Hãy bắt tay ngay vào việc viết thư cảm ơn ( nếu có thể
                  bạn hãy viết tay đính kèm trong mỗi sản phẩm thì ý nghĩa sẽ
                  tăng ...
                </p>
                <button className={cx('btn')}>Xem thêm</button>
              </div>
            </div>
        
            <div className={cx('border__bottom')}></div>
            
          </div>


          <div className={cx('bog__search')}>
            <p className={cx('title__search')}>Tìm kiếm chủ để</p>
            <div className={cx('group__search')}>
                <img src={search} alt='' />
                <input type="text" />
            </div>
            <button className={cx('btn__search')}>LIÊN HỆ</button>

            <p className={cx('text_new')}>Bài viết đề xuất</p>
            <div className={cx('border_bottom_search')}></div>
            <div className={cx('group__img')}>
              <img src={img} alt='' className={cx('width__height')} />
              <p>Vector đồ họa tết trung thu</p>
            </div>
            <div className={cx('group__img')}>
              <img src={img} alt='' className={cx('width__height')} />
              <p>Vector đồ họa tết trung thu</p>
            </div>
            <div className={cx('group__img')}>
              <img src={img} alt='' className={cx('width__height')} />
              <p>Vector đồ họa tết trung thu</p>
            </div>
            <div className={cx('group__img')}>
              <img src={img} alt='' className={cx('width__height')} />
              <p>Vector đồ họa tết trung thu</p>
            </div>
            <div className={cx('group__img')}>
              <img src={img} alt='' className={cx('width__height')} />
              <p>Vector đồ họa tết trung thu</p>
            </div>
            <div className={cx('group__img')}>
              <img src={img} alt='' className={cx('width__height')} />
              <p>Vector đồ họa tết trung thu</p>
            </div>
            <div className={cx('group__img')}>
              <img src={img} alt='' className={cx('width__height')} />
              <p>Vector đồ họa tết trung thu</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Blog
