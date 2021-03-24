import React,{useState} from 'react'
import Search from './Search'
import ShowTable from './ShowTable'
import ExampleChart from './ExampleChart'

const List=(props)=>{
    const {files}=props
    const [term,setTerm]=useState('')

    const result=files.find((ele)=>{
        return ele.Guest==='No'
    })
   // console.log(result)

     const hours=Math.floor(result['Total Duration (Minutes)']/60)
     const  mins=((result['Total Duration (Minutes)']) % 60)
    //  console.log(hours)
    //  console.log(mins)

    const handleChange=(e)=>{
        const term=e.target.value
        setTerm(term)
      }

      const filteredList=()=>{
        const result=files.filter((ele)=>{
          return ele['Name (Original Name)'].toLowerCase().includes(term)
        })
        return result
    }
    return (
        <div>
            <hr/>
            <h2>Report</h2>
            <h3>Post - {result['Name (Original Name)']} </h3>
            <h3>Total Participants - {files.length}</h3>
            <h3>Duration- {result['Total Duration (Minutes)']} minutes ({hours}hours : {mins}minutes)</h3>
            <Search term={term} handleChange={handleChange}/>
            <ShowTable files={filteredList()}/>
            <ExampleChart files={files} />            
        </div>
    )
}
export default List