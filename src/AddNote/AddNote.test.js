import React from 'react'
import ReactDOM from 'react-dom'
import AddNote from './AddNote'

it (`renders without crashing`, () => {
    const form = document.createElement('form')
    ReactDOM.render(<AddNote />, form)
    ReactDOM.unmountComponentAtNode(form)
})