import classNames from 'classnames/bind'
import React from 'react'
import styles from './QuirkPint.module.scss'

const cx = classNames.bind(styles)

const Billings = () => {
  return (
    <>
      <div>
        <div className={cx('layout__billings')}>
          <div className={cx('billings')}>
            <div className={cx('decan__title')}>
              <p className={cx('decan__title_text')}>ẤN PHẨM MENU, HÓA ĐƠN</p>
              <p className={cx('color__title')}>Thiết kế - In Menu Hóa đơn</p>
              <div className={cx('text_desc_cata')}>
                <p>
                  Menu, hóa đơn được sử dụng trong công việc kinh doanh của bạn,
                  bạn cần thiết kế in ấn chất lượng tốt hãy liên hệ chúng tôi.
                </p>
                <p className="marginTop20px">
                  <span>In Trần Gia</span> nhận in Menu, Hóa đơn với cam kết{' '}
                  <span>đảm bảo chất lượng</span>. Chúng tôi đáp ứng mọi nhu cầu
                  của quý khách.
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

export default Billings
