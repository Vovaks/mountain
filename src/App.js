import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { Layout, Menu, Icon, Button } from "antd"

import Dashboard from "./containers/Dashboard"
import Index from "./containers/Meseros"
import { logout } from "./utils"

const { Header, Content, Footer, Sider } = Layout
const SubMenu = Menu.SubMenu

class App extends Component {
  state = {
    collapsed: false
  }

  onCollapse = (collapsed) => {
    this.setState({ collapsed })
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  logout = () => {
    logout()
    this.props.history.push(`/`)
  }

  render() {
    return (
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1">
                <Icon type="pie-chart" />
                <span>Dashboard</span>
                <Link to="/dashboard" />
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="desktop" />
                <span>Meseros</span>
                <Link to="/dashboard/meseros" />
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: "#fff", padding: 0, paddingLeft: 16 }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                style={{ cursor: "pointer" }}
                onClick={this.toggle}
              />
              <Button onClick={this.logout}>logout</Button>
            </Header>

            <Content
              style={{
                margin: "24px 16px",
                padding: 24,
                background: "#fff",
                minHeight: 280
              }}
            >
              <Route exact path="/dashboard" component={Dashboard} />
              <Route path="/dashboard/meseros" component={Index} />
            </Content>

            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2016 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </Router>
    )
  }
}

export default App
