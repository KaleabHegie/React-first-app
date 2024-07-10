import { useState } from "react";
import { useHistory } from "react-router-dom";


const Create = () => {
    const [title , setTitle]= useState('')
    const [mainActor , setMainActor]= useState('')
    const [description , setDescription]= useState('')
    const history = useHistory()

    const handleSubmit = (e) =>{
        e.preventDefault();
        const movie = {title , mainActor , description}
        
        fetch('http://localhost:8000/movies' , {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(movie)
        })
        .then(() => {
           alert('New movie added')
           history.push('/')
        })

    }
    return (
        <div className="row justify-content-center">
        <div className="create col-lg-5 ml-5">
            <h2 className="text-info text-center"> Add new movie </h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input 
                className="form-control" 
                name="title" 
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)} />
                <label htmlFor="mainActor">Main Actor</label>
                <input
                 className="form-control" 
                 name="mainActor" 
                 type="text" 
                 value={mainActor}
                 onChange={(e) => setMainActor(e.target.value)}  />
                <label htmlFor="description">Description</label>
                <textarea 
                className="form-control"   
                name="description" id="" 
                rows={7}
                value={description}
                onChange={(e) => setDescription(e.target.value)}  ></textarea>
                <button className="btn btn-primary pl-4 pr-4 mt-3"> Save </button>
            </form>
        </div>
        </div>
    )
}

export default Create;