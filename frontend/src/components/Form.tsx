import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { apiService } from '../api'
import Button from './Button'
import Loading from './Loading'


interface Data {
    text: string
    voices: string
}



export default function Form() {
    const { register, handleSubmit } = useForm<Data>()
    const [text, setText] = useState<string>("")
    const [voice, setVoice] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)

    const onSubmit = async (data: Data) => {
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
            setText(data.text)
        }, 2000);
        console.log(data)
        return await apiService.getText(data.text, data.voices)
    }

    console.log(voice)

    return (
        <React.Fragment>
            <form className='w-2/4 h-2/4 flex d-flex flex-col justify-center items-center gap-3 max-md:w-full ' onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-4 flex flex-col justify-center items-center gap-5'>
                    <p className='text-text-2'>Experiment with different voices:</p>
                    <select className='bg-text-2 h-[25px] rounded' id="voices" {...register("voices", { required: true })}>
                        <option value="alloy"></option>
                        <option value="alloy">Alloy</option>
                        <option value="echo">Echo</option>
                        <option value="fable">Fable</option>
                        <option value="onyx">Onyx</option>
                        <option value="nova">Nova</option>
                        <option value="shimmer">Shimmer</option>
                    </select>
                </div>
                <input className='w-full h-[50px] rounded bg-transparent opacity-90 border-solid border-2 border-secondary text-secondary max-md:w-[90%]' type="text"  {...register("text", { required: true })} />
                {loading ?
                    <Loading /> :
                    <Button />
                }

            </form>
            <div className='w-2/4 h-[50px] mb-4 max-md:w-[90%]'>
                <p className='text-sm text-text text-center '>{text.toUpperCase()}</p>
            </div>

        </React.Fragment>
    )
}
