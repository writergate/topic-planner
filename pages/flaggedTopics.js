import Image from 'next/legacy/image'
import Link from 'next/Link'
function flaggedTopics() {
  return (
    <div className="bg-image-wrapper">

     <Image src="/writing.png.jpg"
        alt="Picture of the writing of Admins"
        layout="fill"
      />
      
      <div className='text-box'>flagged t</div>
    </div>
  );
}
export default flaggedTopics 
