import React, { Component } from "react";
import { Row, Col, Card, Form, Input, Button } from "antd";
import Layout from "../Layout";

class Login extends Component {
  constructor(props) {
    super(props);
    //console.log("props from child is", props);
  }
  render() {
    return (
      <Layout props={this.props}>
            <Row>
                <Col span={8}>
                    <Card title="Login Page">
                    <Form onSubmit={this.props.handleLogin}>
                        <Form.Item>
                        <p>{this.props.errmsg}</p>
                        <Input
                            placeholder="Email"
                            type="text"
                            onChange={this.props.handleEmail}
                        />
                        </Form.Item>
                        <Form.Item>
                        <Input
                            placeholder="Password"
                            type="password"
                            onChange={this.props.handlePassword}
                        />
                        </Form.Item>
                        <Button htmlType="submit" type="primary">
                        Login
                        </Button>
                    </Form>
                    </Card>
                </Col>
            </Row>
      </Layout>
    );
  }
}
export default Login;
