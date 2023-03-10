
import { Box } from '@mui/material'
import Image from 'next/legacy/image'
import { useRouter } from 'next/router'

function Templates() {
    const router = useRouter()

    return (

        <div className="bg-image-TemplateWrapper">
            
            <Image src="/templates.png"
                alt="Picture of the writing of Admins"
                layout="fill"
            />

            <Box className='templatesBox'> 
                <button className='CreateTemplateButton' type='button' onClick={() => router.push('/createTemplates')}>
                    Create New Topic Template
                </button>

                <button className='EditTemplateButton' onClick={() => router.push('/editTemplates')}>
                    Edit Topic Template
                </button>
                </Box>

        </div>

    )
    
}

export default Templates

