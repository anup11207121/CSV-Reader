import React from 'react'
const ShowTable=(props)=>{
    const {files}=props
    return(
        <div>
            <table className="table table-striped table-hover">
                <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Duration</th>
                        </tr>    
                </thead>
                <tbody>
                    {files.map((ele,i)=>{
                        return(
                        <tr key={i}>
                            <td>{ele['Name (Original Name)']}</td>
                            <td>{ele['User Email']}</td>
                            <td>{ele['Total Duration (Minutes)']}</td>
                        </tr>
                        )    
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ShowTable