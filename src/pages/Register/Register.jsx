import { Button, Checkbox, Form, Input } from 'antd'
import classNames from 'classnames/bind'
import React from 'react'
import { Link } from 'react-router-dom'
import fb from '../../assets/Login/fb.png'
import gg from '../../assets/Login/gg.png'
import logo from '../../assets/Login/logo.png'
import tw from '../../assets/Login/tw.png'
import styles from './Register.module.scss'

const cx = classNames.bind(styles)

const Register = () => {
  return (
    <div className={cx('register__container')}>
      <div className={cx('group__login')}>
        <img src={logo} alt="" />
        <div className={cx('title__login')}>
          <span>Đăng kí tài khoản</span>
        </div>
      </div>
      <div className={cx('form__login')}>
        <Form name="basic" autoComplete="off">
          <Form.Item
            label={
              <>
                Email
                <span span className={cx('start__note')}>
                  *
                </span>
              </>
            }
            name="username"
            rules={[
              { required: true, message: 'Please input your username!' },
            ]}>
            <Input className={cx('input')} />
          </Form.Item>

          <Form.Item
            label={
              <>
                Tên đăng nhập
                <span span className={cx('start__note')}>
                  *
                </span>
              </>
            }
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
            className={cx('mt20px')}>
            <Input className={cx('input')} />
          </Form.Item>

          <Form.Item
            label={
              <>
                Mật khẩu <span className={cx('start__note')}>*</span>
              </>
            }
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
            className={cx('form__password')}>
            <Input type="password" className={cx('input')} />
          </Form.Item>

          <Form.Item
            label={
              <>
                Nhập lại mật khẩu <span className={cx('start__note')}>*</span>
              </>
            }
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
            className={cx('form__password')}>
            <Input type="password" className={cx('input')} />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}>
            <div className={cx('form__checkbox')}>
              <Checkbox>
                Tôi đồng ý với{' '}
                <Link to='#' className={cx('forgot_password')}>
                  điều khoản và chính sách
                </Link>{' '}
                của In Trần Gia
              </Checkbox>
            </div>
          </Form.Item>

          <div>
            <Button
              type="primary"
              htmlType="submit"
              className={cx('btn__login')}>
             Đăng kí tài khoản
            </Button>
          </div>
        </Form>
        <div className={cx('account__login')}>
          <span>
            Bạn đã có tài khoản?{' '}
            <Link to="/register" className={cx('text__register')}>
              <span>Đăng nhập ngay</span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Register
