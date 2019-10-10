import { Component } from "react"
import { logout, isLogin } from "../../utils"
import { Link } from "react-router-dom"
import Background from "../../images/background.webp"

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: isLogin()
    }
  }

  handleLogout = () => {
    logout()
    this.setState({
      isLogin: false
    })
  }

  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundImage: `url(${Background})`
        }}
      >
        {/* eslint-disable-next-line react/react-in-jsx-scope */}
        <h1>This is Mountain</h1>
        {this.state.isLogin ? (
          <button onClick={() => this.handleLogout()}>Click here to log out</button>
        ) : (
          <Link to="/signin">Go to sign in page</Link>
        )}
      </div>
    )
  }
}

export default Home
