import classNames from 'classnames/bind'
import React from 'react'
import styles from './QuirkPint.module.scss'

const cx = classNames.bind(styles)

const Vouchers = () => {
  return (
    <>
      <div>
        <div className={cx('layout__vouchers')}>
          <div className={cx('vouchers')}>
            <div className={cx('decan__title')}>
              <p className={cx('decan__title_text')}>
                ẤN PHẨM, NAME CARD VOUCHERS
              </p>
              <p className={cx('color__title')}>Thiết kế - In Voucher</p>
              <div className={cx('text_desc_cata')}>
                <p>
                  Bạn đang cần gấp rất gấp – bạn cần một địa chỉ{' '}
                  <span>in voucher, Name card</span> lấy ngay để kịp chuyến bay,
                  kịp đi công tác, kịp giờ khai trương, kịp dịp khuyến mãi. Hay
                  vì chương trình ưu đãi của bạn có giới hạn, lượng vouchers
                  (phiếu quà tặng) bạn muốn in rất ít. Bạn đang loay hoay tiềm
                  kiếm công ty in ấn có thể đáp ứng nhu cầu về thời gian hay số
                  lượng của bạn.
                </p>
                <p className="marginTop10px">
                  <span>In Trần Gia</span> sẽ giúp bạn giải quyết tất cả các vấn
                  đề đó. Chúng tôi cam kết sẽ giao hàng cho bạn với tốc độ nhanh
                  nhất, sản phẩm in nhanh vẫn đảm bảo chất lượng, màu sắc đẹp,
                  nét in rõ.
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

export default Vouchers
