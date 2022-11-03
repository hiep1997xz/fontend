import classNames from 'classnames/bind'
import React from 'react'
import Footer from '../../layouts/Footer/Footer'
import Header from '../../layouts/Header/Header'

import img1 from '../../assets/about/img1.png'

import styles from './index.module.scss'

const cx = classNames.bind(styles)

const About = () => {
  return (
    <>
      <Header />
      <div className={cx('about__container')}>
        <div className={cx('about__body__text')}>
          <h1>Giới thiệu</h1>
          <p>
            Từ một xưởng thết kế in ấn nhỏ lẻ, qua hơn 3 năm hoạt động,{' '}
            <span>IN Trần Gia</span> ngày càng phát triển và tạo dựng thế mạnh
            trong lĩnh vực in ấn trên giấy, tạo ra các ấn phẩm, bao bì giấy độc
            đáo, chuyên nghiệp. Đội ngũ nhân viên chuyên nghiệp, kinh nghiệm,
            được đào tạo bài bản cùng hệ thống máy móc, công nghệ cao, hiện đại
            luôn đáp ứng mọi yêu cầu đa dạng và gắt gao của khách hàng .
          </p>
          <p>
            Với lợi thế về quy mô nhà xưởng, quy trình sản xuất khép kín và giá
            cả cạnh tranh, chúng tôi đã được nhiều khách hàng đặt trọn niềm tin
            và sự ủng hộ. Tiềm năng lớn của thị trường in ấn và thiết kế tại
            Việt Nam sẽ là cơ hội lớn cho <span>IN Trần Gia</span> phát triển
            vượt bậc hơn trong tương lai.
          </p>
        </div>
        <img src={img1} alt="" className={cx('img')} />
        <div className={cx('mission')}>
          <h1>Sứ Mệnh</h1>
          <p>
            Làm cầu nối rút ngắn khoảng cách giữa các doanh nghiệp và khách
            hàng, truyền tải hiệu quả thông điệp của doanh nghiệp thông qua
            những sản phẩm chất lượng cao và chi phí hợp lý.
          </p>
        </div>
        <div className={cx('vision')}>
          <h1>Tầm nhìn</h1>
          <p>
            Tiềm năng lớn của thị trường là cơ hội lớn cho{' '}
            <span>IN Trần Gia</span> ngày càng phát triển tại Việt Nam trong
            lĩnh vực in ấn bao bì giấy, thiết kế. Tập trung vào các sản phẩm
            trên giấy (Hộp giấy, túi giấy, Catalogue, Brochure, Leaflet,
            Namecard, Bì thư…) Chúng tôi muốn khẳng định tên tuổi của mình trên
            thị trường với các lợi thế:
          </p>
        </div>
        <div className={cx('service')}>
          <h1>Xưởng IN Trần Gia cung cấp những dịch vụ sau:</h1>
          <p>• Thiết kế sáng tạo In ấn</p>
          <p>• In Nhanh In ấn</p>
          <p>• In Offset</p>
          <p>• Gia công sau in</p>
        </div>
        <div className={cx('vision')}>
          <h1>Xưởng IN Trần Gia cung cấp những dịch vụ sau:</h1>
          <p>
            Đội ngũ thiết kế sáng tạo của <span>IN Trần Gia</span> được tuyển
            chọn từ những cơ sở đào tạo bài bản về đồ họa và có nhiều năm kinh
            nghiệm, tay nghề vững vàng trong lĩnh vực in ấn, thiết kế. Lấy mục
            tiêu rút ngắn khoảng cách giữa doanh nghiệp và khách hàng, chúng tôi
            luôn tận tâm với những thiết kế sáng tạo, tạo ra sản phẩm chất lượng
            nhằm truyền tải thông điệp của doanh nghiệp đến tay khách hàng.
          </p>
          <p className={cx('text_vesion')}>
            <span>IN Trần Gia</span> đang cung cấp những dịch vụ thiết kế sáng
            tạo gồm:
          </p>

          <div className={cx('group__p')}>
            <p>
              • Thiết kế <span>Logo</span>
            </p>
            <p>
              • Thiết kế <span>Website</span>
            </p>
            <p>
              • Sáng tạo <span>Slogan</span>
            </p>
            <p>
              • Thiết kế hệ thống <span>nhận diện thương hiệu</span>
            </p>
            <p>
              • Tư vấn <span>xây dựng thương hiệu</span> và các chiến lược quảng
              bá thương hiệu
            </p>
            <p>
              • Thiết kế <span>bao bì giấy sản phẩm…</span>
            </p>
            <p>
              • Thiết kế các ấn phẩm thông dụng như:{' '}
              <span>
                Hộp giấy, Túi giấy, Catalogue, Decal, Brochure, Namecard, Bì
                thư…
              </span>
            </p>
          </div>
        </div>
        <div className={cx('service_in')}>
          <h1>In ấn</h1>
          <p>
            Với nhiều năm kinh nghiệm trong lĩnh vực in ấn, thiết kế,{' '}
            <span>IN Trần Gia</span> luôn mang đến những sản phẩm chất lượng cho
            quý khách. Để đáp ứng nhu cầu đa dạng của khách hàng, chúng tôi
            không ngừng mở rộng cơ sở vật chất, khép kín quy trình sản xuất và
            nâng cao chuyên môn đội ngũ nhân viên làm hài lòng những khách hàng
            khó tính nhất.
          </p>
          <div className={cx('layout__about')}></div>
          <p>
            IN Trần Gia nhận thực hiện in ấn tất cả ấn phẩm trên giấy, bao bì
            giấy, decal giấy, nhựa, in metalized… Chúng tôi có đầy đủ nhà xưởng
            và hệ thống máy móc chuyên dụng, hiện đại, công nghệ cao sẵn sàng
            đáp ứng mọi nhu cầu in của quý khách.
          </p>
          <div className={cx('group__scale')}>
            <p className={cx('scale')}>Quy mô nhà xưởng</p>
            <p>
              Cơ sở hạ tầng vững chắc bao gồm nhà xưởng cùng hệ thống trang
              thiết bị, máy móc hiện đại gồm các máy in 3F-4 khổ (72×102), 3 máy
              Mitsubishi Daiya 1F-4 (khổ 52×72) và hệ thống máy thành phẩm như
              máy cắt, dán,đóng kim, máy sếp tự động, phun UV, máy cán màng, máy
              bồi...
            </p>
          </div>
          <div className={cx('group__scale')}>
            <p className={cx('scale')}>
              Xưởng sản xuất ( có khoảng trên 15 máy gia công các loại)
            </p>
            <p>– Máy in:</p>
            <p>+ 2 máy in Mitsubishi Daiya 1F-4 khổ 52×72 4 màu: công suất 10.000tờ sản phẩm /1giờ </p>
            <p>+ 1 máy in Mitsubishi Daiya 3F-4 khổ 72×102 4 màu : công suất 13.000tờ sản phẩm /1giờ </p>
            <p>+ 1 máy in Mitsubishi Daiya 2 màu khổ 52×72 và 72×102: công suất 10.000tờ sản phẩm /1giờ </p>
            <p>– Máy cắt : 02 máy cắt lập trình Nagai khổ 1,02m</p>
            <p>– Máy cán màng nhiệt khổ 92cm, máy cán màng nước 100cm.</p>
            <p>– Máy bế khổ 75cm đến 1,1m</p>
            <p>– Máy bế nhũ khổ 97cm, ép kim thủy lực </p>
            <p>– Máy dán hộp tự động khổ 58cm </p>
            <p>– Máy xếp khổ 65×90 </p>
            <p>– Máy đóng sách kim 2 đầu, 1 đầu </p>
            <p>– Máy cột dây,…</p>
            <p>– Giao hàng</p>
            <p>– Xe nâng Mitsubishi 02 tấn</p>
            <p>– Xe tải……</p>
          </div>
        </div>

        <div className={cx('service_in')}>
          <h1>Sản phẩm</h1>
          <p>
            Với quy trình sản xuất khép kín, quy mô nhà xưởng, máy móc và chi
            phí hợp lý, IN Trần Gia mang đến cho quý khách những sản phẩm có
            chất lượng tốt nhất với giá cả vô cùng cạnh tranh.
          </p>
          <div className={cx('layout__about')}></div>
        </div>
        <div className={cx('service_in')}>
          <h1>Khách hàng</h1>
          <p>
            Bằng những sản phẩm in ấn trên giấy chất lượng cao và khả năng cung
            ứng dịch vụ đầy đủ, kịp thời, chu đáo, chúng tôi đã và đang nhận
            được sự tin tưởng, ủng hộ từ nhiều khách hàng. IN LÊ KHIẾT cam kết
            luôn tận tụy phục vụ khách hàng và nỗ lực phát triển thành công ty
            in ấn, thiết kế sáng tạo hàng đầu Việt Nam.
          </p>
          <div className={cx('layout__about')}></div>
          <div className={cx('layout__about__content')}>
            <h1>Xem lại nội dung bài viết</h1>
            <p>1. Giới thiệu</p>
            <p>2. Sứ mệnh</p>
            <p>3. Tầm nhìn</p>
            <p>3.1. Thiết kế sáng tạo</p>
            <p>4. Bộ phận kinh doanh</p>
            <p>4.1. In ấn</p>
            <p>5. Quy mô nhà xưởng</p>
            <p>5.1. Xưởng sản xuất ( có khoảng trên 15 máy gia công các loại )</p>
            <p>6. Sản phẩm</p>
            <p>7. Khách hàng</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About
