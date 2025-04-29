import Image from "next/image"
export default function Header() {
    return (
        <div className="header">
            <div className="title">
                <h1>Deborah Tsavousis</h1>
                <h2>Ceramics</h2>
                </div>
            <div className='title-image'>
                <Image 
                    src="/title1.png" 
                    alt="logo" 
                    width={500} 
                    height={250}
                    // style={{ objectFit: "contain" }}
                />    
            </div>
            </div>
            )}