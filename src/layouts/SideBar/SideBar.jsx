import classNames from 'classnames/bind'
import Home from '../../assets/Home.svg'
import IconSelectSidebar from '../../assets/IconSelectSidebar.svg'
import styles from './SideBar.module.scss'

const cx = classNames.bind(styles)

const SideBar = () => {
  return (
    <>
      <div className={cx('menu-bar')}>
        <ul>
          <li className={cx('active')}>
            <a href=" # ">
              <img src={Home} alt="" className={cx('iconHome-sidebar')}/>
              TRANG CHỦ
            </a>
          </li>
          <li>
            <a href=" # ">IN NHANH<img src={IconSelectSidebar} alt="" className={cx('iconSelect-sidebar')}/></a>
            <div className={cx('sub-memnu-1')}>
              <ul>
                <li><a href=" # ">Name Card Visit</a></li>
                <li><a href=" # ">Giấy mời, Thiệp mời</a></li>
                <li><a href=" # ">Tờ rơi, Tờ gấp</a></li>
                <li><a href=" # ">Tem dán, nhãn decal</a></li>
                <li><a href=" # ">Catalog</a></li>
                <li><a href=" # ">Vocher</a></li>
                <li><a href=" # ">Menu</a></li>
                <li><a href=" # ">Phong bì thư</a></li>
                <li><a href=" # ">Lịch chữ A</a></li>
                <li><a href=" # ">Giấy khen</a></li>
                <li><a href=" # ">Hồ sơ kiến trúc</a></li>
                <li><a href=" # ">Kẹp file</a></li>
                <li><a href=" # ">Nhãn treo</a></li>
              </ul>
            </div>
          </li>
          <li>
            <a href=" # ">
              IN OFFSET
              <img src={IconSelectSidebar} alt="" className={cx('iconSelect-sidebar')}/>
            </a>
            <div className={cx('sub-memnu-2')}>
              <ul>
                <li><a href=" # ">Túi giấy</a></li>
                <li><a href=" # ">Họp giấy</a></li>
                <li><a href=" # ">Sách, báo</a></li>
                <li><a href=" # ">Tranh ảnh</a></li>
                <li><a href=" # ">Tờ rơi, Tờ gấp</a></li>
                <li><a href=" # ">Phong bì, tiêu đề thư</a></li>
                <li><a href=" # ">Nhãn mác, mác treo</a></li>
              </ul>
            </div>
          </li>
          <li>
            <a href=" # ">
              <div className={cx('offset-sidebar')}>
                <p className={cx('offset-sidebar-website')}>THIẾT KẾ IN ẤN/WEBSITE</p>
                <img src={IconSelectSidebar} alt="" className={cx('iconSelect-sidebar')}/>
              </div>
            </a>
            <div className={cx('sub-memnu-3')}>
              <ul>
                <li><a href=" # ">Thiết kế logo</a></li>
                <li><a href=" # ">Thiết kế bao bì nhãn mác</a></li>
                <li><a href=" # ">Thiết kế Website</a></li>
                <li><a href=" # ">Thiết kế tờ rơi tờ gấp</a></li>
                <li><a href=" # ">Thiếu kế theo yêu cầu</a></li>
              </ul>
            </div>
          </li>
          <li>
            <a href=" # ">BLOG</a>
          </li>
          <li>
            <a href=" # ">VỀ CHÚNG TÔI</a>
          </li>
          <li>
            <a href=" # ">LIÊN HỆ</a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default SideBar
