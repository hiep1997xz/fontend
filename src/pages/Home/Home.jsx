import { Button, Input } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import classNames from 'classnames/bind'
import CardHome from '../../components/CardHome/CardHome'
import CardHomeOffset from '../../components/CardHomeOffset/CardHomeOffset'
import Cacrousel from '../../layouts/Cacrousel/Cacrousel'
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
        <div>
          <h1>SẢN PHẨM IN NHANH</h1>
          <div className={cx('home-cart')}>
            <CardHome />
          </div>
        </div>
        <div>
          <h1>SẢN PHẨM IN OFFSET</h1>
          <div className={cx('home-cart')}>
            <CardHomeOffset />
          </div>
        </div>
        <div className={cx('boder-bottom')}></div>
        <div>
          <div>
            <h1>THIẾT KẾ IN ẤN/ WEBSITE</h1>
            <div className={cx('text-website')}>
              <span>
                Với nhiều năm hoạt động trong lĩnh vực in ấn và thiết kế, xưởng
                in Trần Gia luôn đặt lợi ích của khách hàng là ưu tiên
              </span>
              <br />
              <span>
                chúng tôi bằng sự quan tâm trọn vẹn và mong muốn mang lại cho
                quý khách nhiều giá trị nhất có thể
              </span>
            </div>
            <h1 className={cx('text-outstanding')}>CÁC SẢN PHẨM NỔI BẬT</h1>
            <div className={cx('img-outstanding')}>
              <div>
                <img
                  src="https://binhminhdigital.com/StoreData/PageData/4126/10-ky-thuat-chup-anh-an-tuong-ma-ban-nen-biet-binhminhdigital%20(4).jpg"
                  alt=""
                  className={cx('img-1')}
                />
                <p className={cx('text-title-img')}>
                  Thiết kế Logo bộ nhận diện thương hiệu
                </p>
              </div>
              <div>
                <img
                  src="https://binhminhdigital.com/StoreData/PageData/4126/10-ky-thuat-chup-anh-an-tuong-ma-ban-nen-biet-binhminhdigital%20(4).jpg"
                  alt=""
                  className={cx('img-2')}
                />
                <p className={cx('text-title-img')}>Thiết kế Website</p>
              </div>
            </div>
            <div className={cx('list-img')}>
              <div>
                <img
                  src="https://binhminhdigital.com/StoreData/PageData/4126/10-ky-thuat-chup-anh-an-tuong-ma-ban-nen-biet-binhminhdigital%20(4).jpg"
                  alt=""
                  className={cx('img-3')}
                />
                <p className={cx('text-title-img')}>Bao bì, hộp giấy</p>
              </div>
              <div>
                <img
                  src="https://binhminhdigital.com/StoreData/PageData/4126/10-ky-thuat-chup-anh-an-tuong-ma-ban-nen-biet-binhminhdigital%20(4).jpg"
                  alt=""
                  className={cx('img-4')}
                />
                <p className={cx('text-title-img')}>Tem nhãn mác, decal</p>
              </div>
              <div>
                <img
                  src="https://binhminhdigital.com/StoreData/PageData/4126/10-ky-thuat-chup-anh-an-tuong-ma-ban-nen-biet-binhminhdigital%20(4).jpg"
                  alt=""
                  className={cx('img-5')}
                />
                <p className={cx('text-title-img')}>
                  Catologue, tờ rơi, tờ gấp
                </p>
              </div>
              <div>
                <img
                  src="https://binhminhdigital.com/StoreData/PageData/4126/10-ky-thuat-chup-anh-an-tuong-ma-ban-nen-biet-binhminhdigital%20(4).jpg"
                  alt=""
                  className={cx('img-6')}
                />
                <p className={cx('text-title-img')}>Thiệp mời, thiệp cưới</p>
              </div>
            </div>
            <h1 className={cx('text-outstanding-client')}>
              ĐÁNH GIÁ PHẢN HỒI CỦA KHÁCH HÀNG
            </h1>
          </div>
        </div>
        <Cacrousel />
        <div className={cx('boder-bottom')}></div>
        <div>
          <h1>BLOG</h1>
        </div>
      </div>
      <div className={cx('request')}>
        <h1>GỬI YÊU CẦU CỦA BẠN</h1>
        <div className={cx('border-bottom')}></div>
        <p>Gửi yêu cầu cho chúng tôi theo from sau</p>
        <div className={cx('form-input')}>
          <div>
            <Input placeholder="Tên của bạn(*)" className={cx('input')} />
            <br />
            <Input placeholder="Điện thoại(*)" className={cx('input')} />
            <br />
            <Input placeholder="Email" className={cx('input')} />
            <br />
            <Input placeholder="Địa chỉ" className={cx('input')} />
            <br />
          </div>
          <div>
            <TextArea
              className={cx('text-area')}
              placeholder="Bạn cần in ấn hoặc thiết kế? Hãy nhập nội dung yêu cầu và gửi cho chúng tôi. Chúng tôi sẽ liên hệ lại sớm nhất."
            />
          </div>
        </div>
        <p className={cx('btn')}>
          <Button className={cx('btn-send')}>Gửi</Button>
        </p>
      </div>
    </>
  )
}

export default Home
