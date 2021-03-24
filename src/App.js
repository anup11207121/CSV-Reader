import React,{useState} from 'react'
import {parse} from 'papaparse'
import 'bootstrap/dist/css/bootstrap.min.css'
import List from './List'

const App=(props)=>{
  const [input,setInput]=useState([])
  const [isFilePicked,setIsFilePicked]=useState(false)
  const [files,setFiles]=useState([])

  const handleInput=(e)=>{
    setInput(e.target.files[0])
    //console.log(e.target.files[0])
    // setIsFilePicked(true)
  }

  const handleSubmission=(e)=>{
    setIsFilePicked(!isFilePicked)
    //console.log(setIsFilePicked)

    parse(input, {
      download:true,
      header:true,
      complete: function(result){
        //console.log(result.data)
        setFiles(result.data)
      }
    })
  }
  return (
    <div className="container">
      <div className="col mt-2cmd-2">
      <h2>File Upload + CSV parser</h2>
      <br />
      <input type='file' name='file' onChange={handleInput}/>
      <button onClick={handleSubmission}>Upload file</button><br/>
      {files.length > 0 && <List files={files}/>}
      </div>       
    </div>
  )
}

export default App