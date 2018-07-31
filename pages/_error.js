import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { withRouter } from 'next/router'

class Error extends React.Component {
  static getInitialProps({res, xhr}) {
    const errorCode = res ? res.statusCode : (xhr ? xhr.status : null)
    return {errorCode}
  }

  render() {
    var response
    switch (this.props.errorCode) {
      case 200:
      case 404:
        response = (
          <div>
            <div>
              <h1>Page Not Found</h1>
              <p>The page { this.props.router.pathname } does not exist.</p>
              <p><Link href="/"><a>Home</a></Link></p>
            </div>
          </div>
        )
        break
      case 500:
        response = (
          <div>
            <div>
              <h1>Internal Server Error</h1>
              <p>An internal server error occurred.</p>
            </div>
          </div>
        )
        break
      default:
        response = (
          <div>
            <div>
              <h1>HTTP { this.props.errorCode } Error</h1>
              <p>An HTTP { this.props.errorCode } error occurred.</p>
            </div>
          </div>
        )
    }
    return response
  }
}

export default withRouter(Error)
