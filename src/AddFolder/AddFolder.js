import React, {Component} from 'react'
import NotefulForm from '../NotefulForm/NotefulForm'
import NotefulContext from '../NotefulContext';
import config from '../config';
import './AddFolder.css'


export default class AddFolder extends Component {
    static defaultProps = {
        history: {
            push: () => { }
        }
    }

 static contextType = NotefulContext

handleSubmit = e => {
    e.preventDefault()
    const folder = {
      folder_name: e.target['folder-name'].value
    }
    fetch(`${config.API_ENDPOINT}/folders`, {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(folder)
    })
    .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
    })
    .then(folder => {
        this.context.addFolder(folder)
        this.props.history.push(`/folders/${folder.id}`)
      })
      .catch(error => {
        console.error({ error })
      })
  }

render() { 
return (
    <section className="Add-folder">
    <h2>Create Folder</h2>
    <NotefulForm  onSubmit={e => this.handleSubmit(e)}>
    <div className="form-group">
        <label htmlFor="Add-folder-name">
            Name
        </label>
        <br />
            
        <input 
            type="text" 
            className="Add-folder-input" 
            name="folder-name" 
            id= "Add-folder-name" />
        <br />

        <button type="submit">Add Folder</button>
    </div>
    </NotefulForm>
    </section>
)}
}
