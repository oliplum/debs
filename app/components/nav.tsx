import Link from "next/link";

export default function Nav() {
  return (
    <div className='nav'>
<Link href="/" className='nav-item'>
  <div >Home</div>
</Link>
<Link href="http://oligaff.etsy.com" target="_blank" rel="noopener noreferrer" className='nav-item'>
<div > Shop </div>
</Link>
<Link href="/contact" className='nav-item'>
  <div >Contact</div>
</Link>
 
    </div>
  );
}