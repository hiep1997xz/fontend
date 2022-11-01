import classNames from 'classnames/bind'
import React from 'react'
import styles from './QuirkPint.module.scss'

const cx = classNames.bind(styles)

const InvitationCard = () => {
  return (
    <>
      <div>
        <div className={cx('layout__invitationCard')}>
          <div className={cx('invitationCard')}>
            <div className={cx('decan__title')}>
              <p className={cx('decan__title_text')}>ẤN PHẨM THIỆP MỜI</p>
              <p className={cx('color__title')}>
                In ấn phẩm thiệp, thiệp cưới mời theo yêu cầu
              </p>
              <div className={cx('text_desc_cata')}>
                <p>
                  <span>Thiệp mời, thiệp cưới</span> luôn thể hiện được sự trang
                  trọng của một buổi lễ cũng như sự trân trọng đối với khách
                  mời. Có đôi khi chương trình có sự thay đổi và bạn cần in gấp
                  thêm thiệp mời. Bạn muốn tìm những đơn vị in uy tín sẵn sàng
                  in với tốc độ nhanh, in chỉ vài ba chục đến vài trăm bộ thiệp
                  mời để bạn lấy ngay trong ngày. Không chỉ thể bạn cần{' '}
                  <span>in rõ, in đẹp, chất lượng</span> in vẫn phải đảm bảo dù
                  cần hoàn thành gấp. In Trần Gia cam kết sẽ là sự lựa chọn hoàn
                  hảo cho mọi nhu cầu của bạn.
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

export default InvitationCard
