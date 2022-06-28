import classNames from 'classnames/bind'
import IconSeacrh from '../../assets/IconSeacrh.svg'
import IconSelect from '../../assets/IconSelect.svg'
import styles from './Search.module.scss'

const cx = classNames.bind(styles)

const Search = () => {
  return (
    <div className={cx('search')}>
      <div className={cx('btn-select')}>
        <span className={cx('text-all')}>All</span>
        <img src={IconSelect} alt="" className={cx('icon-select')}/>
      </div>
      <span className={cx('seperate')}></span>
      <div className={cx('search-icon')}>
        <button className={cx('search-btn')}>
          <img src={IconSeacrh} alt="" />
        </button>
        <input type="text" placeholder="Nhập nôi dung tìm kiếm" />
      </div>
    </div>
  )
}

export default Search
