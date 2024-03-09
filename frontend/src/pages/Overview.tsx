import React, { useEffect, useState } from 'react'
import ReactAudioPlayer from 'react-audio-player';
import audioFile from "../audio/speech.mp3"
import Form from '../components/Form';
import aiLogo from "../images/logo-ai.png"


export default function Overview() {

    // const [darkMode, setDarkMode] = useState<boolean>(false)

    // const onClick = () => {
    //     setDarkMode(!darkMode)
    // }
    // useEffect(() => {
    //     if (darkMode) {
    //         setDarkMode(true)
    //     } else {
    //         setDarkMode(false)
    //     }
    // })





    return (
        <React.Fragment>
                <div className='w-full h-screen d-flex flex flex-col justify-center items-center '>
                    <div className='w-full h-full flex max-md:flex-col'>
                        <div className=' w-1/3 flex flex-col items-center justify-center m-5 max-md:h-1/3 max-md:w-full max-md:m-0'>
                            <div className='w-full flex justify-center'>
                                <img src={aiLogo} alt="" className='max-md:h-[50px]' />
                            </div>
                            
                            <h1 className='text-5xl text-text mb-5 p-3 max-md:text-3xl '>Generate AI Voices</h1>
                            <p className='text-text p-3 max-md:text-sm '>Create ultra realistic Text to Speech (TTS) using PlayHT’s AI Voice Generator. Our Voice AI
                                instantly converts text in to natural sounding humanlike voice performances across any language and accent.</p>
                        </div>
                        <div className='w-2/3 flex flex-col items-center justify-center bg-primary max-md:h-2/3 max-md:w-full'>
                           <Form />
                        <ReactAudioPlayer className='w-2/3 max-md:w-[90%]' controls src={audioFile} />  
                        </div>                  
                    </div>
                </div>
         
        </React.Fragment>

    )
}
