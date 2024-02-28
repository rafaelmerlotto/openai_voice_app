import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { apiService } from '../api'
import Button from './Button'
import Loading from './Loading'

interface Data {
    text: string
}


export default function Form() {
    const { register, handleSubmit } = useForm<Data>()
    const [text, setText] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)

    const onSubmit = async (data: Data) => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
             setText(data.text)
        }, 2000);
        
       return await apiService.getText(data.text)
    }

    return (
        <React.Fragment>
            <form className='w-2/4 h-2/4 flex d-flex flex-col justify-center items-center gap-3 ' onSubmit={handleSubmit(onSubmit)}>
                <input className='w-full h-[50px] rounded bg-gradient-to-r from-gradient_2 to-gradient_1  opacity-70 text-secondary' type="text"  {...register("text", {required: true}) } />
                {loading ?
                    <Loading /> :
                    <Button />
                }
                
            </form>
        <div className='w-2/4 h-auto mb-4'>
              <p className='text-sm  text-secondary text-center'>{text.toUpperCase()}</p>
        </div>
          
        </React.Fragment>
    )
}
