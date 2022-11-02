import classNames from 'classnames/bind'
import React from 'react'
import Slider from 'react-slick'
import img3 from '../../assets/webside/frame.png'
import img1 from '../../assets/webside/image 1.png'
import img2 from '../../assets/webside/image 2.png'
import img4 from '../../assets/webside/image3.png'
import img7 from '../../assets/webside/image4.png'
import img8 from '../../assets/webside/image5.png'
import img9 from '../../assets/webside/image6.png'
import img10 from '../../assets/webside/image7.png'
import img5 from '../../assets/webside/row.png'
import img6 from '../../assets/webside/rowLeft.png'
import Footer from '../../layouts/Footer/Footer'
import Header from '../../layouts/Header/Header'
import SlideShow from '../../layouts/Slides/SlideShow'

import { useRef } from 'react'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import BesidesQuickPrint from '../../components/BesidesQuickPrint'
import styles from './index.module.scss'

const cx = classNames.bind(styles)

const Webside = () => {
  const sliderRef = useRef(null)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const settings_1 = {
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  const handleClickPrev = () => {
    if (!sliderRef.current) return
    sliderRef.current.slickPrev()
    console.log(sliderRef.current.slickPrev());
  }

  const handleClickNext = () => {
    if (!sliderRef.current) return
    sliderRef.current.slickNext()
  }

  return (
    <>
      <Header />
      <SlideShow />
      <div className={cx('webside__container')}>
        <h1 className={cx('text__title')}>THIẾT KẾ IN ẤN/WEBSITE</h1>
        <div className={cx('text__desc')}>
          <p>
            Với đội ngũ nhân viên nhiều năm hoạt động trong lĩnh vực{' '}
            <span>In ấn và Thiết kế</span>, xưởng <span>in Trần Gia</span> luôn{' '}
            <span>
              đặt lợi ích của khách hàng là ưu tiên hàng đầu của chúng tôi
            </span>{' '}
            bằng sự quan tâm trọn vẹn và mong muốn mang lại cho quý khách nhiều
            giá trị nhất có thể.
          </p>
          <p>
            <span>In Trần Gia</span> cung cấp gói dịch vụ thiết kế ấn phẩm in
            ấn:
          </p>
          <div className={cx('text__desc_1')}>
            <p>• Thiết kế bộ nhận diện thương hiệu</p>
            <p>• Thiết kế Website</p>
            <p>• Các ấn phẩm quảng cáo, tờ rơi, vouchers, menu</p>
            <p>• Các ấn phẩm bao bì giấy</p>
            <p>
              • Thiết kế toàn bộ những sản phẩm liên quan đến thiết kế in ấn và
              quảng cáo
            </p>
          </div>
          <p className={cx('marginTop20px')}>
            <span>Với đội ngũ thiết kế chuyên nghiệp</span>, chung tôi đảm bảo
            sự phù hợp, sáng tạo và độc đáo cho từng ấn phẩm thiết kế. Bên cạnh
            đó, nhân viên của In Trần Gia cam kết luôn giao tiếp cởi mở, sẵn
            sàng tiếp thu ý kiến và yêu cầu của khách hàng nhằm mang đến sự hài
            lòng cho quý khách.
          </p>
        </div>

        <h1 className={cx('text__title_1')}>
          DỊCH VỤ THIẾT KẾ TẠI IN TRẦN GIA
        </h1>
        <div className={cx('text__desc__1')}>
          <div className={cx('text__content__1')}>
            <div className={cx('center')}>
              <img src={img1} alt="" />
              <p>Thiết kế theo mẫu có sẵn</p>
            </div>
            <p>
              Sau khi tham khảo các thông tin về nhu cầu của quý khách, chúng
              tôi sẽ cung cấp các mẫu in đã thiết kế sẵn có trong kho tư liệu
              của Lê Khiết. Từ đó, quý khách chọn ra mẫu thiết kế ưng ý nhất.
              Design của chúng tôi sẽ tiến hành chỉnh sửa các chi tiết phù hợp
              (text, logo, thông tin) trên cơ sở mẫu đó. Lưu ý, sự chỉnh sửa
              không bao gồm thay đổi lại kết cấu của bản thiết kế cũ.
            </p>
          </div>
          <div className={cx('text__content__2')}>
            <div className={cx('center')}>
              <img src={img2} alt="" />
              <p>Thiết kế theo mẫu có sẵn</p>
            </div>
            <p>
              Design của in Trần Gia sẽ thiết kế 3 option trên những thông tin
              và yêu cầu và khách hàng mong muốn.
            </p>
            <p>
              Bản thiết kế được cam kết mới hoàn toàn. Sau đó, chúng tôi sẽ dựa
              trên ý khiến của quý khách mà chỉnh sửa để tạo ra mẫu thiết kế ấn
              phẩm được lựa chọn.
            </p>
          </div>
        </div>

        <h1 className={cx('text__title_1')}>QUY TRÌNH THIẾT KẾ</h1>
        <div>
          <img src={img3} alt="" className={cx('tesst')} />
        </div>

        <h1 className={cx('text__title_1')}>DANH MỤC THIẾT KẾ IN ẤN</h1>
        <div className={cx('group__web_list')}>
          <div className={cx('web_list_1')}>
            <div>
              <Slider ref={sliderRef} {...settings}>
                <div>
                  <img src={img4} alt="" />
                </div>
                <div>
                  <img src={img4} alt="" />
                </div>
                <div>
                  <img src={img4} alt="" />
                </div>
                <div>
                  <img src={img4} alt="" />
                </div>
              </Slider>
              <div onClick={handleClickPrev} className={cx('row__left')}>
                <img src={img6} alt="" />
              </div>
              <div onClick={handleClickNext} className={cx('row__right')}>
                <img src={img5} alt="" />
              </div>
            </div>
          </div>
          <div className={cx('web_list_2')}>
            <div className={cx('mgbt80px')}>
              <p className={cx('web_list_title')}>
                THIẾT KẾ BỘ NHẬN DIỆN THƯƠNG HIỆU
              </p>
              <div className={cx('border')}></div>
            </div>

            <p>
              Thiết kế bộ <span>nhận diện thương hiệu</span> là yếu tố thực sự
              cần thiết đối với mỗi doanh nghiệp nhằm quảng bá thương hiệu một
              cách rộng rãi nhất, là một trong các giải pháp marketing được đánh
              giá vô cùng hiệu quả.
            </p>
            <p>
              In ấn thiêt kế Trần Gia thấu hiểu nhu cầu của các doanh nghiệp và
              cung cấp dịch vụ thiết kế cũng như in ấn các ấn phẩm nhận diện
              thương hiệu.
            </p>
            <p className={cx('color__text')}>
              Thiết kế bộ nhận diện thương hiệu bao gồm:
            </p>
            <div className={cx('group__text')}>
              <p>1. Logo thương hiệu và Slogan</p>
              <p>
                2. Ấn phẩm văn phòng mang hình ảnh thương hiệu: namecards, bao
                thư, bìa đựng hồ sơ, giấy tiêu đề, hóa đơn,…
              </p>
              <p>3. Đồng phục cho nhân viên</p>
              <p>
                4. Các sản phẩm khác có gắn thương hiệu: catalogue, brouc hure,
                poster, standee, tờ rơi, tờ gấp,…
              </p>
            </div>
            <div className={cx('web_list_slider')}>
              <Slider {...settings_1}>
                <div>
                  <img src={img7} alt="" />
                </div>
                <div>
                  <img src={img8} alt="" />
                </div>
                <div>
                  <img src={img9} alt="" />
                </div>
                <div>
                  <img src={img10} alt="" />
                </div>
                <div>
                  <img src={img10} alt="" />
                </div>
                <div>
                  <img src={img10} alt="" />
                </div>
              </Slider>
            </div>
            <div>
              <button className={cx('btn')}>NHẬN TƯ VẤN BÁO GIÁ</button>
            </div>
          </div>
        </div>
        <div className={cx('boder-bottom')}></div>

        <div className={cx('group__web_list')}>
          <div className={cx('web_list_2')}>
            <div className={cx('mgbt80px')}>
              <p className={cx('web_list_title')}>
                THIẾT KẾ BỘ NHẬN DIỆN THƯƠNG HIỆU
              </p>
              <div className={cx('border')}></div>
            </div>

            <p>
              Thiết kế bộ <span>nhận diện thương hiệu</span> là yếu tố thực sự
              cần thiết đối với mỗi doanh nghiệp nhằm quảng bá thương hiệu một
              cách rộng rãi nhất, là một trong các giải pháp marketing được đánh
              giá vô cùng hiệu quả.
            </p>
            <p>
              In ấn thiêt kế Trần Gia thấu hiểu nhu cầu của các doanh nghiệp và
              cung cấp dịch vụ thiết kế cũng như in ấn các ấn phẩm nhận diện
              thương hiệu.
            </p>
            <p className={cx('color__text')}>
              Thiết kế bộ nhận diện thương hiệu bao gồm:
            </p>
            <div className={cx('group__text')}>
              <p>1. Logo thương hiệu và Slogan</p>
              <p>
                2. Ấn phẩm văn phòng mang hình ảnh thương hiệu: namecards, bao
                thư, bìa đựng hồ sơ, giấy tiêu đề, hóa đơn,…
              </p>
              <p>3. Đồng phục cho nhân viên</p>
              <p>
                4. Các sản phẩm khác có gắn thương hiệu: catalogue, brouc hure,
                poster, standee, tờ rơi, tờ gấp,…
              </p>
            </div>
            <div className={cx('web_list_slider')}>
              <Slider {...settings_1}>
                <div>
                  <img src={img7} alt="" />
                </div>
                <div>
                  <img src={img8} alt="" />
                </div>
                <div>
                  <img src={img9} alt="" />
                </div>
                <div>
                  <img src={img10} alt="" />
                </div>
                <div>
                  <img src={img10} alt="" />
                </div>
                <div>
                  <img src={img10} alt="" />
                </div>
              </Slider>
            </div>
            <div>
              <button className={cx('btn')}>NHẬN TƯ VẤN BÁO GIÁ</button>
            </div>
          </div>
          <div className={cx('web_list_1')}>
            <div>
              <Slider ref={sliderRef} {...settings}>
                <div>
                  <img src={img4} alt="" />
                </div>
                <div>
                  <img src={img4} alt="" />
                </div>
                <div>
                  <img src={img4} alt="" />
                </div>
                <div>
                  <img src={img4} alt="" />
                </div>
              </Slider>
              <div onClick={handleClickPrev} className={cx('row__left')}>
                <img src={img6} alt="" />
              </div>
              <div onClick={handleClickNext} className={cx('row__right')}>
                <img src={img5} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className={cx('boder-bottom')}></div>

        <div className={cx('group__web_list')}>
          <div className={cx('web_list_1')}>
            <div>
              <Slider ref={sliderRef} {...settings}>
                <div>
                  <img src={img4} alt="" />
                </div>
                <div>
                  <img src={img4} alt="" />
                </div>
                <div>
                  <img src={img4} alt="" />
                </div>
                <div>
                  <img src={img4} alt="" />
                </div>
              </Slider>
              <div onClick={handleClickPrev} className={cx('row__left')}>
                <img src={img6} alt="" />
              </div>
              <div onClick={handleClickNext} className={cx('row__right')}>
                <img src={img5} alt="" />
              </div>
            </div>
          </div>
          <div className={cx('web_list_2')}>
            <div className={cx('mgbt80px')}>
              <p className={cx('web_list_title')}>
                THIẾT KẾ BỘ NHẬN DIỆN THƯƠNG HIỆU
              </p>
              <div className={cx('border')}></div>
            </div>

            <p>
              Thiết kế bộ <span>nhận diện thương hiệu</span> là yếu tố thực sự
              cần thiết đối với mỗi doanh nghiệp nhằm quảng bá thương hiệu một
              cách rộng rãi nhất, là một trong các giải pháp marketing được đánh
              giá vô cùng hiệu quả.
            </p>
            <p>
              In ấn thiêt kế Trần Gia thấu hiểu nhu cầu của các doanh nghiệp và
              cung cấp dịch vụ thiết kế cũng như in ấn các ấn phẩm nhận diện
              thương hiệu.
            </p>
            <p className={cx('color__text')}>
              Thiết kế bộ nhận diện thương hiệu bao gồm:
            </p>
            <div className={cx('group__text')}>
              <p>1. Logo thương hiệu và Slogan</p>
              <p>
                2. Ấn phẩm văn phòng mang hình ảnh thương hiệu: namecards, bao
                thư, bìa đựng hồ sơ, giấy tiêu đề, hóa đơn,…
              </p>
              <p>3. Đồng phục cho nhân viên</p>
              <p>
                4. Các sản phẩm khác có gắn thương hiệu: catalogue, brouc hure,
                poster, standee, tờ rơi, tờ gấp,…
              </p>
            </div>
            <div className={cx('web_list_slider')}>
              <Slider {...settings_1}>
                <div>
                  <img src={img7} alt="" />
                </div>
                <div>
                  <img src={img8} alt="" />
                </div>
                <div>
                  <img src={img9} alt="" />
                </div>
                <div>
                  <img src={img10} alt="" />
                </div>
                <div>
                  <img src={img10} alt="" />
                </div>
                <div>
                  <img src={img10} alt="" />
                </div>
              </Slider>
            </div>
            <div>
              <button className={cx('btn')}>NHẬN TƯ VẤN BÁO GIÁ</button>
            </div>
          </div>
        </div>
        <div className={cx('boder-bottom')}></div>

        <div className={cx('group__web_list')}>
          <div className={cx('web_list_2')}>
            <div className={cx('mgbt80px')}>
              <p className={cx('web_list_title')}>
                THIẾT KẾ BỘ NHẬN DIỆN THƯƠNG HIỆU
              </p>
              <div className={cx('border')}></div>
            </div>

            <p>
              Thiết kế bộ <span>nhận diện thương hiệu</span> là yếu tố thực sự
              cần thiết đối với mỗi doanh nghiệp nhằm quảng bá thương hiệu một
              cách rộng rãi nhất, là một trong các giải pháp marketing được đánh
              giá vô cùng hiệu quả.
            </p>
            <p>
              In ấn thiêt kế Trần Gia thấu hiểu nhu cầu của các doanh nghiệp và
              cung cấp dịch vụ thiết kế cũng như in ấn các ấn phẩm nhận diện
              thương hiệu.
            </p>
            <p className={cx('color__text')}>
              Thiết kế bộ nhận diện thương hiệu bao gồm:
            </p>
            <div className={cx('group__text')}>
              <p>1. Logo thương hiệu và Slogan</p>
              <p>
                2. Ấn phẩm văn phòng mang hình ảnh thương hiệu: namecards, bao
                thư, bìa đựng hồ sơ, giấy tiêu đề, hóa đơn,…
              </p>
              <p>3. Đồng phục cho nhân viên</p>
              <p>
                4. Các sản phẩm khác có gắn thương hiệu: catalogue, brouc hure,
                poster, standee, tờ rơi, tờ gấp,…
              </p>
            </div>
            <div className={cx('web_list_slider')}>
              <Slider {...settings_1}>
                <div>
                  <img src={img7} alt="" />
                </div>
                <div>
                  <img src={img8} alt="" />
                </div>
                <div>
                  <img src={img9} alt="" />
                </div>
                <div>
                  <img src={img10} alt="" />
                </div>
                <div>
                  <img src={img10} alt="" />
                </div>
                <div>
                  <img src={img10} alt="" />
                </div>
              </Slider>
            </div>
            <div>
              <button className={cx('btn')}>NHẬN TƯ VẤN BÁO GIÁ</button>
            </div>
          </div>
          <div className={cx('web_list_1')}>
            <div>
              <Slider ref={sliderRef} {...settings}>
                <div>
                  <img src={img4} alt="" />
                </div>
                <div>
                  <img src={img4} alt="" />
                </div>
                <div>
                  <img src={img4} alt="" />
                </div>
                <div>
                  <img src={img4} alt="" />
                </div>
              </Slider>
              <div onClick={handleClickPrev} className={cx('row__left')}>
                <img src={img6} alt="" />
              </div>
              <div onClick={handleClickNext} className={cx('row__right')}>
                <img src={img5} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className={cx('boder-bottom')}></div>

        <div>
          <div>
            <div className={cx('featured__order')}>Đơn hàng nổi bật</div>
            <Slider>
              <div className={cx('d-flex')}>
                <BesidesQuickPrint />
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Webside
