import Link from "next/link";

export default function Nav() {
  return (
    <div className='nav'>
<Link href="/" className='nav-item'>
  <div className="button-text" >Home</div>
</Link>
<Link href="https://deborahceramics.etsy.com" target="_blank" rel="noopener noreferrer" className='nav-item'>
<div className="button-text"> Shop </div>
</Link>
<Link href="/contact" className='nav-item'>
  <div className="button-text">Contact</div>
</Link>
 
    </div>
  );
}