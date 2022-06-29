import { useState } from 'react'
import Carousel from 'react-simply-carousel'
import dataCacrousel from './dataCacrousel'
import classNames from 'classnames/bind'
import styles from './Cacrousel.module.scss'
import rightArrow from '../../assets/rightArrow.svg'

const cx = classNames.bind(styles)

const Cacrousel = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <div>
      <Carousel
        containerProps={{
          style: {
            width: '100%',
            justifyContent: 'space-between',
            userSelect: 'text',
          },
        }}
        activeSlideIndex={activeSlide}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          style: {
            alignSelf: 'center',
            background: 'white',
            border: 'none',
            borderRadius: '50%',
            color: 'black',
            cursor: 'pointer',
            fontSize: '60px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          style: {
            alignSelf: 'center',
            background: 'white',
            border: 'none',
            borderRadius: '50%',
            color: 'black',
            cursor: 'pointer',
            fontSize: '60px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        itemsToShow={2}
        speed={400}>
        {dataCacrousel.map((item, index) => {
          return (
            <div
              style={{
                border: '30px solid white',
                textAlign: 'center',
                display: 'flex',
              }}
              key={index}>
              <div className={cx('cacrousel')}>
                <img src={item.img} alt="" className={cx('img-item')} />
                <p className={cx('name-item')}>{item.name}</p>
                <p className={cx('content-item')}>{item.content}</p>
              </div>
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

export default Cacrousel
