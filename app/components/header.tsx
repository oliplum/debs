import Image from "next/image"
export default function Header() {
    return (
        <div >
            <div className="title">
                <h1>Deborah Tsarvousis</h1>
                <h2>Coil Ceramics</h2>
                </div>
            <div className='title-image'>
                <Image 
                    src="/title1.png" 
                    alt="logo" 
                    width={500} 
                    height={250}
                    style={{ objectFit: "contain" }}
                />    
            </div>
            </div>
            )}