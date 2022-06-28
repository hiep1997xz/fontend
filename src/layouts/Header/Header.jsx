import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import LoginRegisterIcon from '../../assets/LoginRegisterIcon.svg'
import logo from '../../assets/logo.svg'
import select from '../../assets/select.svg'
import Search from '../Search/Search'
import SideBar from '../SideBar/SideBar'
import styles from './Header.module.scss'

const cx = classNames.bind(styles)

const Header = () => {
  return (
    <div className={cx('fixed-header')}>
      <div className={cx('header-container')}>
        <div className={cx('logo')}>
          <img src={logo} alt="" />
        </div>
        <div>
          <Search />
        </div>
        <div className={cx('header-login')}>
          <Link to="/login" className={cx('login-register')}>
            <span className={cx('text-header')}>Login / Sign up</span>
            <img src={LoginRegisterIcon} alt="" />
          </Link>
          <span className={cx('seperate-header')}></span>
          <div>
            <span className={cx('text-header')}>Ngôn ngữ</span>
            <img src={select} alt="" />
          </div>
        </div>
      </div>
      <div>
        <SideBar />
      </div>
    </div>
  )
}

export default Header
