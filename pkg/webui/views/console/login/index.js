// Copyright © 2018 The Things Network Foundation, The Things Industries B.V.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import bind from 'autobind-decorator'

import Button from '../../../components/button'

@withRouter
@connect(state => ({
  user: state.user.user,
}))
@bind
export default class Login extends React.PureComponent {
  redirectToLogin () {
    window.location = `/console/api/auth/login?path=${window.location.pathname}`
  }

  logout () {
    this.props.dispatch({ type: 'LOGOUT' })
  }

  render () {
    return (
      <div>
        {!this.props.user
          ? <Button message="Login via TTN Account" onClick={this.redirectToLogin} />
          : <Button message="Logout" onClick={this.logout} />}
      </div>
    )
  }
}