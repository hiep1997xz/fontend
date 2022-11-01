import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import styles from './BesidesQuickPrint.module.scss'
import data from './data'
import SelectCard from '../../assets/SelectCard.svg'

const cx = classNames.bind(styles)

const BesidesQuickPrint = () => {
  return (
    <>
      {data.map((card, index) => {
        return (
          <div className={cx('cart-list')} key={index}>
            <img src={card.img} alt="" className={cx('card-img')} />
            <p className={cx('card-name')}>{card.name}</p>
            <p className={cx('material')}>
              <span className={cx('text-card')}>Chất liệu: </span>
              <span className={cx('text-card-material')}>{card.material}</span>
            </p>
            <p>
              <span className={cx('text-card')}>Số lượng: </span>
              <span className={cx('text-card-machining')}>
                {card.machining}
              </span>
            </p>
          </div>
        )
      })}
    </>
  )
}

export default BesidesQuickPrint
