import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { SlidersHorizontal } from 'lucide-react'
import Reveal from '../components/Reveal'
import ProductCard from '../components/ProductCard'
import { products } from '../data/content'
export default function Products({ onQuickView, onAdd }) {
  const [category,setCategory] = useState('All')
  const [size,setSize] = useState('All')
  const [color,setColor] = useState('All')
  const [filters,setFilters] = useState(false)
  const shown = useMemo(() => products.filter(p => (category==='All'||p.category===category) && (size==='All'||p.sizes.includes(size)) && (color==='All'||p.color===color)),[category,size,color])
  return <section className="products-section section-pad" id="new-drop">
    <div className="section-top"><Reveal><p className="eyebrow">01 / THE LATEST</p><h2>FRESH OFF<br/>THE <span>STREET.</span></h2></Reveal><Reveal delay={.12}><p className="section-intro">The pieces you'll reach for on repeat. Thoughtfully cut, made to move, ready for whatever.</p></Reveal></div>
    <div className="collection-row" id="collections"><div className="category-tabs">{['All','Tops','Bottoms','Layers'].map(c=><button key={c} onClick={()=>setCategory(c)} className={category===c?'active':''}>{c}</button>)}</div><button className="filter-toggle" onClick={()=>setFilters(!filters)}><SlidersHorizontal size={15}/> FILTERS</button></div>
    {filters && <motion.div className="filter-panel" initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}}><label>SIZE <select value={size} onChange={e=>setSize(e.target.value)}>{['All','S','M','L','XL'].map(s=><option key={s}>{s}</option>)}</select></label><label>COLOUR <select value={color} onChange={e=>setColor(e.target.value)}>{['All','Black','Rose','Olive','Cream','Blue'].map(c=><option key={c}>{c}</option>)}</select></label><button onClick={()=>{setSize('All');setColor('All')}}>RESET</button></motion.div>}
    <motion.div className="product-grid" layout>{shown.map((p,i)=><motion.div key={p.id} layout initial={{opacity:0,y:22}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.45,delay:i*.06}}><ProductCard product={p} onQuickView={onQuickView} onAdd={onAdd}/></motion.div>)}</motion.div>
    {shown.length===0 && <p className="no-results">No pieces match those filters. Try another combination.</p>}
    <div className="view-all-row"><span>SHOWING {shown.length} / {products.length} PIECES</span><a href="#story">THE URBAN THREAD WAY <span>↗</span></a></div>
  </section>
}
