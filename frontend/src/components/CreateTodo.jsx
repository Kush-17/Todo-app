import { useState } from "react"


function CreateTodo(props){
    // react-query
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")

    return(
        <div>
            <input type="text" placeholder="title" 
            style={{padding:10 , margin:10}} 
            onChange = {(val)=>{
                const value = val.target.value
                setTitle(value)
            }}/> <br></br>
            <input type="text" placeholder="description" 
            style={{padding:10 , margin:10}}
            onChange = {(val)=>{
                const value = val.target.value
                setDescription(value)
            }}/> <br></br>
            <button style={{padding:10 , margin:10}}
            onClick={()=>{
                fetch('http://localhost:3000/todo',{
                    method: "POST",
                    body : JSON.stringify({
                        title : title,
                        description : description
                    }),
                    headers : {
                        "Content-type" : "application/json"
                    }
                })
                .then(async (res)=>{
                    const data = await res.json();
                    alert("Todo added")
                })
            }}>Add a Todo </button>
        </div>
    )
}

export default CreateTodo