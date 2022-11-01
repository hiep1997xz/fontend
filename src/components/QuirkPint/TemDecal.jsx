import classNames from 'classnames/bind'
import React from 'react'
import styles from './QuirkPint.module.scss'

const cx = classNames.bind(styles)

const TemDecal = () => {
  return (
    <>
      <div>
        <div className={cx('layout__quirkprint')}>
          <div className={cx('decan')}>
            <div className={cx('decan__title')}>
              <p className={cx('decan__title_text')}>ẤN PHẨM TEM NHÃN DECAL</p>
              <p className={cx('color__title')}>Thiết kế – In Tem Nhãn</p>
              <div className={cx('text_desc')}>
                <p>
                  <span>Tem nhãn decal</span> được sử dụng để dán bên ngoài bao
                  bì hàng hóa, có tác dụng truyền tải các thông tin, hình ảnh về
                  nhà sản xuất và sản phẩm. In tem nhãn decal là một giải pháp
                  PR Marketing hiệu quả để thu hút sự quan tâm của khách hàng.
                </p>
                <p className="marginTop20px">
                  <span>In Trần Gia</span> nhận in tem nhãn decal, với cam kết{' '}
                  <span>đảm bảo chất lượng</span>. Chúng tôi đáp ứng mọi nhu cầu
                  của quý khách về số lượng cũng như chất liệu decal: decal
                  giấy, decal nhựa sữa, decal nhựa trong, decal si vàng, decal
                  si bạc, decal 7 màu, decal bể (tem bảo hành)
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

export default TemDecal;
