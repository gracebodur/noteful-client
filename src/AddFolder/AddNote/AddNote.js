import React from 'react'
import ValidationError from './ValidationError'
import NotefulContext from './NotefulContext'
import config from './config'

class AddNote extends React.Component {
    static contextType = NotefulContext
}

export default AddNote