import React from 'react'
import { useState } from 'react';

export default function AddTodo(props) {
    const[title, setTitle] = useState("");
    const [desc, setDesc] = useState(" ");    
    const submit =(e)=>{
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        }
     
        else{
            props.addTodo(title, desc);
        
        setTitle(" ");
        setDesc(" ");
        }
      
        
    }
    return (
        <div className="container my-3">
            <h3 className="text-center">Add a Todo</h3>
            <form onSubmit={submit}>
            <div className="mb-3 ">
                <label htmlFor="title" className="form-label"><h6>Todo Title</h6></label>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" placeholder="" />
            </div>

            <div className="mb-3">
                <label htmlFor="desc" className="form-label"><h6>Todo Description</h6></label>
                <textarea className="form-control" value={desc}  onChange={(e)=>setDesc(e.target.value)} id="desc" rows={3} defaultValue={""} />
            </div>
            
            <div className="col-12 ">
                    <button className="btn btn-success" type="submit">Add Todo</button>
            </div>
            </form>
            



        </div>
    )
}
