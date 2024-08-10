import Image from "next/image"

function Header() {
  return (
    <header>
      <div className="flex items-center bg-amazon_blue"> 
        <div>
            <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40} 
            objectFit= "contain"
            className="cursor-pointer"/>
        </div>
     </div> 

     <div>

     </div>
    </header>
    
    

    
  )
}

export default Header