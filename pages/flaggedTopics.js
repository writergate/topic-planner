import Image from 'next/image'
function FlaggedTopics(){
    return(
    <div>
      <Image src="/writing.png.jpg"
        alt="Picture of the writing og Admins"
        
        width={1098}
        height={829}
        
        background-repeat='no-repeat'
        background-size='100% 100%'    

      />
    <h1>Flagged Topics</h1>
    </div>
    );
 }
 export default FlaggedTopics 
