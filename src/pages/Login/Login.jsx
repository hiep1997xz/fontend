import { Button, Checkbox, Form, Input } from 'antd'
import classNames from 'classnames/bind'
import React from 'react'
import { Link } from 'react-router-dom'
import fb from '../../assets/Login/fb.png'
import gg from '../../assets/Login/gg.png'
import logo from '../../assets/Login/logo.png'
import tw from '../../assets/Login/tw.png'
import styles from './Login.module.scss'

const cx = classNames.bind(styles)

const Login = () => {
  return (
    <div className={cx('login-container')}>
      <div className={cx('group__login')}>
        <img src={logo} alt="" />
        <div className={cx('title__login')}>
          <span>Đăng nhập hệ thống</span>
        </div>
      </div>
      <div className={cx('form__login')}>
        <Form name="basic" autoComplete="off">
          <Form.Item
            label={
              <>
                Tên đăng nhập{' '}
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
                Mật khẩu <span className={cx('start__note')}>*</span>
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
            wrapperCol={{ offset: 8, span: 16 }}
            >
            <div className={cx('form__checkbox')}>
              <Checkbox>Nhớ mật khẩu</Checkbox>
              <span className={cx('forgot_password')}>Quên mật khẩu?</span>
            </div>
          </Form.Item>

          <div>
            <Button
              type="primary"
              htmlType="submit"
              className={cx('btn__login')}>
              Đăng nhập
            </Button>
          </div>
        </Form>
        <div className={cx('group__sso')}>
          <p>Đăng nhập bằng</p>
          <div>
            <img src={gg} alt="" />
            <img src={fb} alt="" />
            <img src={tw} alt="" />
          </div>
        </div>
        <div className={cx('account__login')}>
          <span>
            Bạn chưa có tài khoản?{' '}
            <Link to="/register" className={cx('text__register')}>
              <span>Đăng kí ngay</span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Login
