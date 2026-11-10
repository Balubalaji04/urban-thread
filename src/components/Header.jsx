import { useState } from 'react'
import { Menu, X, ShoppingBag, ArrowUpRight } from 'lucide-react'
import { navLinks } from '../data/content'

export default function Header({ cartCount, onCart }) {
  const [open, setOpen] = useState(false)
  return <header className="site-header">
    <a className="wordmark" href="#top">URBAN<span>THREAD</span><i>®</i></a>
    <nav className={open ? 'main-nav nav-open' : 'main-nav'}>
      {navLinks.map(link => <a key={link.label} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
      <a className="nav-mobile-cta" href="#new-drop" onClick={() => setOpen(false)}>Shop the drop <ArrowUpRight size={15}/></a>
    </nav>
    <div className="header-actions">
      <a className="shop-link" href="#new-drop">Shop now <ArrowUpRight size={15}/></a>
      <button className="icon-button cart-trigger" onClick={onCart} aria-label="Open cart"><ShoppingBag size={19}/><span>{cartCount}</span></button>
      <button className="icon-button menu-trigger" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button>
    </div>
  </header>
}
