import React, {Component} from 'react'
import ValidationError from '../ValidationError'
import config from '../config';
import NotefulContext from '../NotefulContext';
import PropTypes from 'prop-types'
import './AddFolder.css'


export default class AddFolder extends Component {
    static defaultProps = {
        history: {
            push: () => { }
        }
    }

 static contextType = NotefulContext

constructor(props) {
    super(props)
    this.state={
        folderName: {
        value: '',
        touched: false
    }
    }
}

updateFolderName(name) {
    this.setState({folderName: {value: name, touched: true}})
}

handleSubmit = e => {
    e.preventDefault();
    const { folderName } = this.state;
    const folderToAdd = {
    name: folderName.value
    }
    fetch(`${config.API_ENDPOINT}/folders`, {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(folderToAdd)
    })
    .then(response => {
    if(!response.ok){
        return response.json().then(e=>Promise.reject(e))
    }
    return response.json()
    })
    .then((res) => {
    const newArray = this.context.folders
    newArray.push(res)
    this.context.folders = newArray
    this.props.history.push('/')
    })
    .catch(error => {
    console.error(error)
    })
}

validateFolderName() {
    const name = this.state.folderName.value.trim();
    // console.log(name)
    if(name.length === 0) {
    return 'Folder name is required'
    } else if (name.length > 20) {
    return 'Folder name must be less 20 characters'
    }
}

render() {
    const folderNameError = this.validateFolderName();
    return (
    <section>
        <form className="Add-folder" onSubmit={event => this.handleSubmit(event)}>
        <h2>Create Folder</h2>
        <div className="form-group">
            <label htmlFor="Add-folder-name">Name</label><br />
            <input 
                type="text" 
                className="Add-folder-input" 
                name="folder-name" 
                id= "folder-name" 
                onChange={e => this.updateFolderName(e.target.value)}
                aria-required='true'
                aria-describedby= {folderNameError}
                aria-label= 'Enter folder name'>
            </input>
            {this.state.folderName.touched && 
            <ValidationError 
                message={folderNameError} />}
            <br />
            <button 
                type="submit" 
                className="Add-folder-button" 
                disabled={this.validateFolderName()}>Add Folder</button>
        </div>
        </form>
    </section>
    )
}
}

AddFolder.prototypes = {
    folderName: PropTypes.string.isRequired
}