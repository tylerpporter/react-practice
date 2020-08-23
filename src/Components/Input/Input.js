import React from 'react'
import { useForm } from 'react-hook-form' 

const Input = ({ getPokemon }) => {
    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        getPokemon(data.limit)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder='How many pokemon?' name='limit' ref={register} />
            <input type='submit' />
        </form>
    )
}

export default Input