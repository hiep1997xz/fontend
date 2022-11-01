import classNames from 'classnames/bind'
import React from 'react'
import styles from './QuirkPint.module.scss'

const cx = classNames.bind(styles)

const Catalogue = () => {
  return (
    <>
      <div>
        <div className={cx('layout__catalogue')}>
          <div className={cx('catalogue')}>
            <div className={cx('decan__title')}>
              <p className={cx('decan__title_text')}>
                ẤN PHẨM CATALOGUE, TỜ RƠI, TỜ GẤP
              </p>
              <p className={cx('color__title')}>
                Thiết kế - In Catalogue – In tờ rơi, tờ gấp
              </p>
              <div className={cx('text_desc_cata')}>
                <p>
                  <span>Catalogue</span> là một danh mục dùng để giới thiệu các
                  sản phẩm hoặc dịch vụ mà doanh nghiệp bạn đang kinh doanh.{' '}
                  <span>Catalogue</span> được trình bày và thiết kế đẹp mắt,
                  giúp đưa thông tin, sản phẩm tới khách hàng một cách trực quan
                  và sinh động, thu hút sự quan tâm và phản hồi từ phía khách
                  hàng. <span>In Catalogue</span> được rất nhiều các doanh
                  nghiệp thực hiện.
                </p>
                <p className="marginTop10px">
                  Bạn cần in <span>gấp tờ rơi, tờ gấp</span>.
                </p>
                <p>Bạn chỉ muốn in với số lượng nhỏ để bổ sung.</p>
                <p className="marginTop10px">
                  <span>In Trần Gia</span> nhận in Catalogue, tờ rơi, tờ gấp{' '}
                  <span>đảm bảo chất lượng</span>. Chúng tôi đáp ứng mọi nhu cầu
                  của quý khách về số lượng cũng như chất liệu.
                </p>
              </div>
            </div>
          </div>
          <div className={cx('decan_layout')}>
            <div className="d-flex">
              <div className={cx('decan_layout_one')}></div>
              <div className={cx('decan_layout_two')}></div>
            </div>
            <div className="d-flex">
              <div className={cx('decan_layout_three')}></div>
              <div className={cx('decan_layout_four')}></div>
            </div>
          </div>
        </div>
        <div className={cx('group__btn')}>
          <button className={cx('see__details')}>XEM CHI TIẾT</button>
          <button className={cx('get__price')}>NHẬN BÁO GIÁ</button>
        </div>
      </div>
    </>
  )
}

export default Catalogue
