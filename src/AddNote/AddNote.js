import React from 'react'
import ValidationError from '../ValidationError'
import NotefulContext from '../NotefulContext'
import config from '../config'

class AddNote extends React.Component {
  
    static contextType = NotefulContext
  
    constructor() {
        super()
        this.state={
            title: {
                value: '',
                touched: false
            },
            content: {
                value: '',
                touched: false
            },
            folder: {
                value: '',
                touched: false
            }
        }
    }
    updateNoteName(name) {
        this.setState({title: {value: name, touched: true}})
    }
    updateNoteContent(content) {
        this.setState({content: {value:content, touched: true}})
    }
    render() {
        return(
            <div>
                <form>
                    <h2>Create Note</h2>
                </form>
            </div>
        )
    }

}

export default AddNote