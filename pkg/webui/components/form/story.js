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
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Field from '../field'
import Button from '../button'
import Form from '.'

const handleSubmit = function (data, { setSubmitting }) {
  action('Submit')(data)
  setTimeout(() => setSubmitting(false), 1000)
}

const initialValues = {
  user_id: '',
  password: '',
}

const containerStyles = {
  maxWidth: '300px',
}


storiesOf('Form', module)
  .add('Login', () => (
    <div style={containerStyles}>
      <Form
        onSubmit={handleSubmit}
        initialValues={initialValues}
      >
        <Field
          title="Username or Email"
          name="user_id"
          type="text"
        />
        <Field
          title="Password"
          name="password"
          type="password"
        />
        <Button type="submit" message="Login" />
        <Button naked message="Create an account" />
      </Form>
    </div>
  ))