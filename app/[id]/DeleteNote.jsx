'use client'
import {useRouter, usePathname} from 'next/navigation'
export default function DeleteButton() {
    const router = useRouter()
    const pathname = usePathname()
    async function deleteNote(){
        try {
            const res = await fetch(`http://localhost:3000/api/notes/${pathname}`, {
                method: "DELETE"
            })
            router.push("/")
        } catch (error) {
            console.log(error)
        }

        
    }
    return(
        <button onClick={deleteNote} className='font-bold hover:text-neutral-700 text-2xl relative left-32 border-2 border-solid p-2 bg-white border-white rounded-lg hover:bg-slate-300 hover:border-slate-300'>Delete note</button>
    )
}