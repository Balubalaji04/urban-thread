import { useMemo, useState } from 'react'
import TopBanner from './components/TopBanner'
import Header from './components/Header'
import QuickViewModal from './components/QuickViewModal'
import CartDrawer from './components/CartDrawer'
import CheckoutModal from './components/CheckoutModal'
import Hero from './sections/Hero'
import Products from './sections/Products'
import Story from './sections/Story'
import Marquee from './sections/Marquee'
import Footer from './sections/Footer'
import { products } from './data/content'

export default function App() {
  const [cart,setCart] = useState([])
  const [quick,setQuick] = useState(null)
  const [cartOpen,setCartOpen] = useState(false)
  const [checkout,setCheckout] = useState(false)
  const cartCount = cart.reduce((n,item)=>n+item.qty,0)
  const total = useMemo(()=>cart.reduce((n,item)=>n+item.price*item.qty,0),[cart])
  const add = (product,size=product.sizes[1]||product.sizes[0]) => {
    setCart(current => {
      const found = current.find(item=>item.id===product.id && item.size===size)
      return found ? current.map(item=>item===found?{...item,qty:item.qty+1}:item) : [...current,{...product,size,qty:1}]
    })
    setCartOpen(true)
  }
  const qty = (id,size,delta) => setCart(current=>current.map(i=>i.id===id&&i.size===size?{...i,qty:i.qty+delta}:i).filter(i=>i.qty>0))
  const remove = (id,size) => setCart(current=>current.filter(i=>!(i.id===id&&i.size===size)))
  const startCheckout = () => { setCartOpen(false); setCheckout(true) }
  const complete = () => { alert('Demo order placed! No payment has been processed.'); setCart([]); setCheckout(false) }
  return <div className="app-shell">
    <TopBanner/><Header cartCount={cartCount} onCart={()=>setCartOpen(true)}/>
    <main><Hero/><Products onQuickView={setQuick} onAdd={add}/><Marquee/><Story/></main>
    <Footer/>
    <QuickViewModal product={quick} onClose={()=>setQuick(null)} onAdd={add}/>
    <CartDrawer open={cartOpen} items={cart} onClose={()=>setCartOpen(false)} onQty={qty} onRemove={remove} onCheckout={startCheckout}/>
    <CheckoutModal open={checkout} onClose={()=>setCheckout(false)} total={total} onComplete={complete}/>
  </div>
}
