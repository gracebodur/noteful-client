import React from 'react'
import ReactDOM from 'react-dom'
import AddFolder from './AddFolder'

it(`renders without crashing`, () => {
    const form = document.createElement('form')
    ReactDOM.render(<AddFolder />, form)
    ReactDOM.unmountComponentAtNode(form)
})