import { ArrowUpRight, Instagram } from 'lucide-react'
import { footerLinks } from '../data/content'
export default function Footer() {
  return <footer className="footer"><div className="footer-main"><div><a className="footer-logo" href="#top">URBAN<br/><span>THREAD.</span></a><p>Everyday pieces. Your own frequency.</p></div><div className="footer-cta"><p>GET FIRST ACCESS<br/>TO THE NEXT DROP.</p><form onSubmit={e=>{e.preventDefault();e.currentTarget.reset();alert('Thanks — this is a demo signup.')}}><input type="email" required placeholder="Your email address"/><button aria-label="Subscribe"><ArrowUpRight/></button></form><small>By subscribing, you agree to receive occasional updates.</small></div></div><div className="footer-bottom"><span>© 2026 URBAN THREAD. DEMO STORE.</span><div>{footerLinks.map(link=><a key={link} href="#top">{link}{link==='Instagram'&&<Instagram size={12}/>}</a>)}</div><a href="#top">BACK TO TOP ↑</a></div></footer>
}
