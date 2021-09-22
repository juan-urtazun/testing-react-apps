// form testing
// http://localhost:3000/login

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import faker from 'faker'
import {build, fake} from '@jackfranklin/test-data-bot'
import Login from '../../components/login'
// exercise 04.js
// test('submitting the form calls onSubmit with username and password', () => {
//   let submittedData
//   const username = 'foo'
//   const password = 'foo'
//   const handleSubmit = data => (submittedData = data)
//   render(<Login onSubmit={handleSubmit} />)
//   userEvent.type(screen.getByLabelText(/username/i), username)
//   userEvent.type(screen.getByLabelText(/password/i), password)
//   userEvent.click(screen.getByRole('button', {name: /submit/i}))
//   expect(submittedData).toEqual({username, password})
// })

// exercise 04-extra-1.js
/* test('submitting the form calls onSubmit with username and password', () => {
  let submittedData
  const username = 'foo'
  const password = 'foo'
  const handleSubmit = jest.fn()
  render(<Login onSubmit={handleSubmit} />)
  userEvent.type(screen.getByLabelText(/username/i), username)
  userEvent.type(screen.getByLabelText(/password/i), password)
  userEvent.click(screen.getByRole('button', {name: /submit/i}))
  expect(handleSubmit).toHaveBeenCalledWith({username, password})
  expect(handleSubmit).toBeCalledTimes(1)
}) */

// exercise 04-extra-2: use faker for generated data
/* function buildLoginForm() {
  const username = faker.internet.userName()
  const password = faker.internet.password()
  return {
    username,
    password,
  }
}
test('submitting the form calls onSubmit with username and password', () => {
  const handleSubmit = jest.fn()

  render(<Login onSubmit={handleSubmit} />)
  const {username, password} = buildLoginForm()
  userEvent.type(screen.getByLabelText(/username/i), username)
  userEvent.type(screen.getByLabelText(/password/i), password)
  userEvent.click(screen.getByRole('button', {name: /submit/i}))

  expect(handleSubmit).toHaveBeenCalledWith({username, password})
  expect(handleSubmit).toBeCalledTimes(1)
}) */

// exercise 04-extra-3:  allow for overrides
/* function buildLoginForm(overrides) {
  const username = faker.internet.userName()
  const password = faker.internet.password()
  return {
    username,
    password,
    ...overrides,
  }
}
test('submitting the form calls onSubmit with username and password', () => {
  const handleSubmit = jest.fn()

  render(<Login onSubmit={handleSubmit} />)
  const {username, password} = buildLoginForm({password: 'abc'})
  userEvent.type(screen.getByLabelText(/username/i), username)
  userEvent.type(screen.getByLabelText(/password/i), password)
  userEvent.click(screen.getByRole('button', {name: /submit/i}))

  expect(handleSubmit).toHaveBeenCalledWith({username, password})
  expect(handleSubmit).toBeCalledTimes(1)
})
*/

//exercise 04-extra-4: use Test Data Bot
const buildLoginForm = build({
  fields: {
    username: fake(f => f.internet.userName()),
    password: fake(f => f.internet.password()),
  },
})

test('submitting the form calls onSubmit with username and password', () => {
  const handleSubmit = jest.fn()

  render(<Login onSubmit={handleSubmit} />)
  const {username, password} = buildLoginForm({password: 'abc'})
  userEvent.type(screen.getByLabelText(/username/i), username)
  userEvent.type(screen.getByLabelText(/password/i), password)
  userEvent.click(screen.getByRole('button', {name: /submit/i}))

  expect(handleSubmit).toHaveBeenCalledWith({username, password})
  expect(handleSubmit).toBeCalledTimes(1)
})

/*
eslint
  no-unused-vars: "off",
*/
