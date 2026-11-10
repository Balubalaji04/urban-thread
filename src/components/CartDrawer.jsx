import { AnimatePresence, motion } from 'framer-motion'
import { X, Minus, Plus, Trash2, ArrowRight } from 'lucide-react'
import { money } from '../data/content'
export default function CartDrawer({ open, items, onClose, onQty, onRemove, onCheckout }) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0)
  return <AnimatePresence>{open && <div className="drawer-layer">
    <motion.div className="drawer-scrim" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={onClose}/>
    <motion.aside className="cart-drawer" initial={{x:'100%'}} animate={{x:0}} exit={{x:'100%'}} transition={{type:'spring', damping:28, stiffness:260}}>
      <div className="drawer-head"><div><p className="eyebrow">YOUR SELECTION</p><h2>Shopping bag <span>({items.length})</span></h2></div><button className="icon-button" onClick={onClose}><X/></button></div>
      <div className="cart-items">{items.length === 0 ? <div className="empty-cart"><span>✳</span><h3>Your bag is taking a breather.</h3><p>Add something good to get started.</p><button className="primary-button" onClick={onClose}>KEEP EXPLORING</button></div> : items.map(item => <div className="cart-item" key={`${item.id}-${item.size}`}><img src={item.image} alt={item.name}/><div className="cart-item-info"><strong>{item.name}</strong><small>{item.color} / Size {item.size}</small><b>{money(item.price)}</b><div className="qty-control"><button onClick={() => onQty(item.id,item.size,-1)} aria-label="Decrease"><Minus size={13}/></button><span>{item.qty}</span><button onClick={() => onQty(item.id,item.size,1)} aria-label="Increase"><Plus size={13}/></button></div></div><button className="remove-item" onClick={() => onRemove(item.id,item.size)} aria-label="Remove"><Trash2 size={16}/></button></div>)}</div>
      {items.length > 0 && <div className="drawer-bottom"><div className="subtotal-line"><span>Subtotal</span><strong>{money(subtotal)}</strong></div><p>Shipping and taxes calculated at checkout.</p><button className="primary-button full-button" onClick={onCheckout}>CONTINUE TO CHECKOUT <ArrowRight size={16}/></button><button className="continue-link" onClick={onClose}>Continue shopping</button></div>}
    </motion.aside>
  </div>}</AnimatePresence>
}
