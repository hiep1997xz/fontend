import classNames from 'classnames/bind'
import React from 'react'
import Footer from '../../layouts/Footer/Footer'
import Header from '../../layouts/Header/Header'
import SlideShow from '../../layouts/Slides/SlideShow'
import Slider from 'react-slick'

import eye from '../../assets/blog/eye.png'
import date from '../../assets/blog/icon_date.png'
import img_1 from '../../assets/blog/img1.png'
import like from '../../assets/blog/like.png'
import download from '../../assets/newpaper/download.png'
import iconHome from '../../assets/newpaper/icon_home.png'
import img_2 from '../../assets/newpaper/img1.png'
import img_3 from '../../assets/newpaper/img3.png'

import styles from './index.module.scss'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

const cx = classNames.bind(styles)

/* eslint-disable import/no-anonymous-default-export */
const data = [
  {
    id: 1,
    img: img_3,
    title: 'Công nghệ bản đồ số (GIS)',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since th',
  },
  {
    id: 2,
    img: img_3,
    title: 'Công nghệ bản đồ số (GIS)',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since th',
  },
  {
    id: 3,
    img: img_3,
    title: 'Công nghệ bản đồ số (GIS)',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since th',
  },
  {
    id: 4,
    img: img_3,
    title: 'Công nghệ bản đồ số (GIS)',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since th',
  },
]

const NewspaperBlog = () => {
  const settings = {
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  }

  return (
    <>
      <Header />
      <SlideShow />
      <div className={cx('newspaper__container')}>
        <div className={cx('group__iconHome')}>
          <img src={iconHome} alt="" />
          <p>Trang chủ / Blog</p>
        </div>
        <h1 className={cx('title__newspaper')}>
          Bộ TT&TT: Phối hợp chặt chẽ với Viettel triển khai diện rộng 5G từ
          2021
        </h1>
        <div className={cx('group__view')}>
          <div className={cx('group__icon')}>
            <img src={date} alt="" />
            <p>20/05/2021</p>
          </div>
          <div className={cx('group__icon')}>
            <img src={eye} alt="" />
            <p className={cx('text__number')}>20</p>
          </div>
          <div className={cx('group__icon')}>
            <img src={like} alt="" />
            <p className={cx('text__number')}>20</p>
          </div>
          <div className={cx('group__icon')}>
            <img src={img_1} alt="" />
            <p className={cx('text__number')}>20</p>
          </div>
        </div>
        <div className={cx('img1')}>
          <img src={img_2} alt="" />
        </div>
        <div className={cx('group__text')}>
          <p>
            Trước những tác động của đại dịch Covid-19 trên toàn thế giới, nước
            chủ nhà Việt Nam đã chủ động đề xuất tổ chức ITU 2020 theo hình thức
            trực tuyến. Nhiệm vụ hỗ trợ Bộ Thông tin và Truyền thông, đơn vị
            đồng tổ chức sự kiện cùng với Liên minh Viễn thông Quốc tế (ITU),
            được giao cho tập đoàn Viettel.
          </p>
          <p>
            Với những kinh nghiệm khi là chủ nhà của APEC 2017, hội nghị Thượng
            đỉnh Mỹ - Triều 2019 và hội nghị cấp cao ASEAN và ASEAN+3 năm 2020,
            Việt Nam, dù lần đầu đăng cai tổ chức, vẫn sẵn sàng cho một hình
            thức chưa từng được áp dụng trong suốt gần nửa thế kỷ lịch sử của
            ITU.
          </p>
          <p>
            Với Platform 3D, công nghệ 100% Make in Việt Nam, do các
            kỹVietteltùy biến đã tạo nênnhững gian hàng ảo 3D đầu tiên tại ITU
            2020. Với thiết bị kết nối Internet, người dùng có thể thăm các gian
            hàng một cách trực quan như đang trực tiếp có mặt. Kính thực tế ảo
            (VR) sẽ giúp mang lại những trải nghiệm hoàn hảo nhất.
          </p>
          <p>
            Những thông tin về gian hàng sẽ được hiển thị đầy đủ ở những vị trí
            hợp lý, giúp người dùng nhanh chóng tìm ra thứ họ quan tâm. Về mặt
            hình ảnh, gian hàng ảo 3D mang tới những trải nghiệm đầy đủ nhưng
            mới lạ và thú vị cho người thăm quan. Cách dự triển lãm này giúp
            ngăn chặn hoàn toàn nguy cơ virus corona lây lan vì không cần tiếp
            xúc với người khác trong quá trình tham quan.
          </p>
          <p>
            Bên cạnh đó, việc áp dụng gian hàng ảo 3D cũng tiết kiệm toàn bộ chi
            phí xây dựng một gian hàng thật tại triển lãm. Một số tiền khổng lồ
            cũng sẽ được tiết kiệm từ các khoản chi cho sự kiện thông thường.
          </p>
          <p>
            Gian hàng của Viettel là một ví dụ điển hình cho công nghệ triển lãm
            ảo tại ITU năm nay. Xuất hiện với nền xanh cùng dòng chữ “Viettel
            kiến tạo xã hội số” bằng tiếng Anh, người dùng chỉ cần 1 click để
            bắt đầu trải nghiệm. Mang đến với triển lãm hàng loạt các giải pháp
            như B2G (Giải pháp cho Chính phủ); B2B (Giải pháp cho Doanh nghiệp)
            và B2C (Giải pháp cho người dùng), gian hàng của Viettel mang tới
            thế giới cái nhìn toàn cảnh nhất về công cuộc chuyển đổi số ở Việt
            Nam.
          </p>
        </div>
        <div className={cx('img1')}>
          <img src={img_2} alt="" />
        </div>
        <div className={cx('group__text')}>
          <p>
            Trước những tác động của đại dịch Covid-19 trên toàn thế giới, nước
            chủ nhà Việt Nam đã chủ động đề xuất tổ chức ITU 2020 theo hình thức
            trực tuyến. Nhiệm vụ hỗ trợ Bộ Thông tin và Truyền thông, đơn vị
            đồng tổ chức sự kiện cùng với Liên minh Viễn thông Quốc tế (ITU),
            được giao cho tập đoàn Viettel.
          </p>
          <p>
            Với những kinh nghiệm khi là chủ nhà của APEC 2017, hội nghị Thượng
            đỉnh Mỹ - Triều 2019 và hội nghị cấp cao ASEAN và ASEAN+3 năm 2020,
            Việt Nam, dù lần đầu đăng cai tổ chức, vẫn sẵn sàng cho một hình
            thức chưa từng được áp dụng trong suốt gần nửa thế kỷ lịch sử của
            ITU.
          </p>
          <p>
            Với Platform 3D, công nghệ 100% Make in Việt Nam, do các
            kỹVietteltùy biến đã tạo nênnhững gian hàng ảo 3D đầu tiên tại ITU
            2020. Với thiết bị kết nối Internet, người dùng có thể thăm các gian
            hàng một cách trực quan như đang trực tiếp có mặt. Kính thực tế ảo
            (VR) sẽ giúp mang lại những trải nghiệm hoàn hảo nhất.
          </p>
          <p>
            Những thông tin về gian hàng sẽ được hiển thị đầy đủ ở những vị trí
            hợp lý, giúp người dùng nhanh chóng tìm ra thứ họ quan tâm. Về mặt
            hình ảnh, gian hàng ảo 3D mang tới những trải nghiệm đầy đủ nhưng
            mới lạ và thú vị cho người thăm quan. Cách dự triển lãm này giúp
            ngăn chặn hoàn toàn nguy cơ virus corona lây lan vì không cần tiếp
            xúc với người khác trong quá trình tham quan.
          </p>
        </div>
        <div className={cx('boder-bottom')}></div>
        <div className={cx('mgBottom')}>
          <h1 className={cx('title__newspaper')}>
            Linh tải 300 + chữ hỷ trong đám cưới đẹp nhất
          </h1>
          <button className={cx('btn')}>
            <img src={download} alt="" />
            <p>Download</p>
          </button>
        </div>
        <div className={cx('boder-bottom')}></div>
        <div className={cx('comments')}>
          <p>Bình luận (3)</p>
          <div className={cx('member_comment')}>
            <p className={cx('name')}>Nguyễn Văn A</p>
            <p className={cx('coment')}>
              Chúc mừng Viettel ngày càng phát triển vượt bậc
            </p>
            <div className={cx('d-flex')}>
              <div className={cx('border_botom')}></div>
              <div className={cx('answer')}>Trả lời</div>
            </div>
          </div>
          <div className={cx('member_comment')}>
            <p className={cx('name')}>Nguyễn Văn A</p>
            <p className={cx('coment')}>
              Chúc mừng Viettel ngày càng phát triển vượt bậc
            </p>
            <div className={cx('d-flex')}>
              <div className={cx('border_botom')}></div>
              <div className={cx('answer')}>Trả lời</div>
            </div>
          </div>
          <div className={cx('member_comment')}>
            <p className={cx('name')}>Nguyễn Văn A</p>
            <p className={cx('coment')}>
              Chúc mừng Viettel ngày càng phát triển vượt bậc
            </p>
            <div className={cx('d-flex')}>
              <div className={cx('border_botom')}></div>
              <div className={cx('answer')}>Trả lời</div>
            </div>
          </div>
        </div>
        <textarea
          placeholder="Nội dung bình luận"
          className={cx('text_area')}
        />
        <button className={cx('btn_comment')}>Bình Luận</button>

        <div className={cx('blog__hot')}>
          <h1>Blog cùng chủ đề</h1>
          <Slider {...settings}>
            {data.map((el, index) => {
              return (
                <div className={cx('group_blog_hot')} key={index}>
                  <img src={el.img} alt="" className={cx('img_blog')} />
                  <div className={cx('group_text_blog')}>
                    <p className={cx('group_text_title')}>{el.title}</p>
                    <p className={cx('group_text_desc')}>{el.desc}</p>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default NewspaperBlog
