import classNames from 'classnames/bind'
import React from 'react'
import styles from './index.module.scss'
import img1 from '../../assets/InOffset/book.png'

const cx = classNames.bind(styles)

const Book = () => {
  return (
    <>
      <div>
        <div className={cx('layout__book')}>
          <div className={cx('book')}>
            <img src={img1} alt='' className={cx('book')} />
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

export default Book
