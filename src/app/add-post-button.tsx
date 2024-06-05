'use client'

import { useFormStatus } from "react-dom"

export function AddPostButton() {

    const {pending} = useFormStatus()

    return(
        <button 
        type="submit"
        disabled={pending}
        >
         {pending ? 'Carregando...' : 'Enviar'}   
        </button>
    )

}