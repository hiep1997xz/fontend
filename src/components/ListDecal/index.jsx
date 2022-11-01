import classNames from 'classnames/bind'
import data from './data'
import styles from './index.module.scss'

const cx = classNames.bind(styles)

const ListDecal = () => {
  return (
    <>
      {data.map((card, index) => {
        return (
          <div className={cx('cart-list')} key={index}>
            <div>
              <img src={card.img} alt="" className={cx('card-img')} />
              <p className={cx('card-name')}>{card.name}</p>
            </div>
            <div  className={cx('group_btn')}>
              <button className={cx('btn')}>XEM CHI TIẾT</button>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ListDecal
