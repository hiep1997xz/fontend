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
          <img
            className={cx('logo__avatar')}
            src="https://ephoto360.com/uploads/worigin/2018/09/07/avatar-avt5b92469f182d2_526929fdb13fe28ac68489644991cd80.jpg"
            alt=""
          />
          <Link to="/login" className={cx('login-register')}>
            <span className={cx('text-header')}>Login</span>
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
