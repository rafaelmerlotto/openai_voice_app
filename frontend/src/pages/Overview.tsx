import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import audioFile from "../audio/speech.mp3"
import Form from '../components/Form';
import picture from "../images/voice.png"


export default function Overview() {

    return (
        <div className='w-full h-screen d-flex flex flex-col justify-center items-center bg-no-repeat bg-cover bg-center bg-primary'
         /* style={{backgroundImage: `url(${picture})`}} */ >
             <div>
      <h1 className='text-6xl text-text mb-5 p-3 max-md:text-3xl  '>Generate AI Voices</h1>
      <p className='text-text p-3 max-md:text-sm '>Create ultra realistic Text to Speech (TTS) using PlayHT’s AI Voice Generator. Our Voice AI 
        instantly converts text in to natural sounding humanlike voice performances across any language and accent.</p>
    </div>
           <Form/>
            <ReactAudioPlayer className='w-2/3 max-md:w-[90%]' controls  src={audioFile}  />
        </div>

    )
}
