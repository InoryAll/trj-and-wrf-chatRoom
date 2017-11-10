/**
 * 用户登录
 * Created by tianrenjie on 2017/11/9
 */
import React, { PropTypes } from 'react';
import { Form, Input, Button, Icon, Checkbox, Card } from 'antd';
import { Link } from 'react-router';
import './login.less';

const FormItem = Form.Item;
class Login extends React.Component {
  static propTypes = {
    form: PropTypes.object.isRequired,
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-bg">
        <h1 className="login-title">欢迎进入TRJ&&WRF在线聊天系统!</h1>
        <Card title="登录" className="login-card">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {
                getFieldDecorator('username', {
                  rules: [{ required: true, message: '请输入你的用户名!' }],
                })(<Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="请输入用户名" />)
              }
            </FormItem>
            <FormItem>
              {
                getFieldDecorator('password', {
                  rules: [{ required: true, message: '请输入你的密码!' }],
                })(<Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="请输入密码" />)
              }
            </FormItem>
            <FormItem>
              {
                getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(<Checkbox>记住我</Checkbox>)
              }
              <Link to="#" className="login-form-forgot">忘记密码</Link>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
              或者 <Link to="#">立即注册!</Link>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}

export default Form.create()(Login);
