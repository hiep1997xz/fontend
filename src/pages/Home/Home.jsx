import classNames from 'classnames/bind'
import CardHome from '../../components/CardHome/CardHome'
import Header from '../../layouts/Header/Header'
import SlideShow from '../../layouts/Slides/SlideShow'
import styles from './Home.module.scss'

const cx = classNames.bind(styles)

const Home = () => {
  return (
    <>
      <Header />
      <SlideShow />
      <div className={cx('home-container')}>
        <h1>SẢN PHẨM IN NHANH</h1>
        <div className={cx('home-cart')}>
          <CardHome />
        </div>
      </div>
    </>
  )
}

export default Home
