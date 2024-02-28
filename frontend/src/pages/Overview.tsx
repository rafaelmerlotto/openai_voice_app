import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import audioFile from "../audio/speech.mp3"
import Form from '../components/Form';
import picture from "../images/voice.png"


export default function Overview() {

    return (
        <div className='w-full h-screen d-flex flex flex-col justify-center items-center bg-no-repeat bg-cover bg-center bg-primary'
         /* style={{backgroundImage: `url(${picture})`}} */ >
           <Form/>
            <ReactAudioPlayer className='w-2/3' controls  src={audioFile}  />
        </div>

    )
}
