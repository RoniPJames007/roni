import React, { Component} from 'react';

class Resume extends Component {
    render(){
        return(

<div className="resume-body">
    <img
    src={process.env.PUBLIC_URL +"/resume.jpg"}
    alt="avatar"
    style={{height: '100%',width: '60%'}}
                        
        />
    </div>       
     )
    }
}
export default Resume;