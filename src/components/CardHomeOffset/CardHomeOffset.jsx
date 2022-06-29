import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import styles from './CardHomeOffset.module.scss'
import dataCartHome from './dataCartHomeOffset'
import SelectCard from '../../assets/SelectCard.svg'

const cx = classNames.bind(styles)

const CardHomeOffset = () => {
  return (
    <>
      {dataCartHome.map((card, index) => {
        console.log(card)
        return (
          <div className={cx('cart-list')} key={index}>
            <img src={card.img} alt="" className={cx('card-img')} />
            <p className={cx('card-name')}>{card.name}</p>
            <p className={cx('material')}>
              <span className={cx('text-card')}>Chất liệu: </span>
              <span className={cx('text-card-material')}>{card.material}</span>
            </p>
            <p>
              <span className={cx('text-card')}>Gia công: </span>
              <span className={cx('text-card-machining')}>
                {card.machining}
              </span>
            </p>
            <p className={cx('text-quote')}>
              <span className={cx('text-card')}>Liên hệ nhận </span>
              <Link to="#" className={cx("text-card-quote")}>
                <span>báo giá</span>
                <img src={SelectCard} alt="" className={cx('icon-SelectCard')}/>
              </Link>
            </p>
          </div>
        )
      })}
    </>
  )
}

export default CardHomeOffset
