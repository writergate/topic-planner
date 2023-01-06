import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/Router'

function Templates() {
    const router = useRouter()

    return (

        <div className="bg-image-wrapper">
            <Image src="/templates.png"
                alt="Picture of the writing of Admins"
                layout="fill"
            />
            <div className='templatesbox'>
                <button className='CreateTemplateButton' active aria-pressed="true" onClick={() => router.push('/createTemplates')}>
                    Create New Topic Template
                </button>


                <button className='EditTemplateButton' onClick={() => router.push('/editTemplates')}>
                    Edit Topic Template
                </button>

            </div>
        </div>



    )
}

export default Templates


