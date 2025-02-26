import Image from "next/image"

export default function Contact() {
    return (

        <div className='contact'>   


                <h1>Contact</h1>
<div className="contact-container">

            <div className='leftside'>
                <p>Deborah Tsarvousis is a ceramic artist working out of Sheffield, Canterbury, New Zealand</p>
            <Image
                src="/debs.jpg"
                alt="Deborah Tsarvousis"
                width={200}
                height={200}
                objectFit="contain">
                    </Image>
                </div>


            <div className='rightside'>
                <p>To contact Deborah: 
                    email: <a href="mailto:debs@ceramic1.com">debs@ceramic1.com</a>
                </p>
                </div>
                  
                        </div>
                        </div>
    )}
    