
    import Image from 'next/image'


function FlaggedTopics() {
  return (
    <div className="bg-image-wrapper">
 <Image src="/writing.png.jpg"
        alt="Picture of the writing of Admins" 
      
        layout="fill"
        
     
      />
      <div className='text-box'>flagged</div>
       </div>
  );
}
export default FlaggedTopics 
