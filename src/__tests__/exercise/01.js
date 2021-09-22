// simple test with ReactDOM
// http://localhost:3000/counter

import * as React from 'react'
import ReactDOM from 'react-dom'
import Counter from '../../components/counter'

beforeEach(() => {
  document.body.innerHTML = ''
})

test('counter increments and decrements when the buttons are clicked', () => {
  const container = document.createElement('div')
  document.body.append(container)
  ReactDOM.render(<Counter />, container)
  const text = container.firstChild.querySelector('div')
  const btns = container.querySelectorAll('button')
  const increment = btns[1]
  const decrement = btns[0]
  expect(btns).toHaveLength(2)
  expect(text.textContent).toBe('Current count: 0')
  increment.click()
  expect(text.textContent).toBe('Current count: 1')
  decrement.click()
  expect(text.textContent).toBe('Current count: 0')

  const click = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    button: 0, // es el click izquierdo
  })
  increment.dispatchEvent(click)
  expect(text.textContent).toBe('Current count: 1')
})

/* eslint no-unused-vars:0 */
