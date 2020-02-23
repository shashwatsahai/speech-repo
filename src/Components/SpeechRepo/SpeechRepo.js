import React, { Component } from 'react';
import 'react-dom'
import './SpeechRepo.css'

class SpeechRepo extends Component{

    state = {
        
    };
    
    render(){
        var retVal = 
        (<div className='speechButtons'><button id="mySpeeches">View my Speeches</button>
            <button id="submitSpeech">Submit a New Speech</button>
        </div>)
        return (<div>{retVal}</div>)
    }
}

export default SpeechRepo;