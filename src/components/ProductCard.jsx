import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { money } from '../data/content'
export default function ProductCard({ product, onQuickView, onAdd }) {
  return <motion.article className="product-card" whileHover={{ y: -7 }} transition={{ duration: .25 }}>
    <button className="product-image-wrap" onClick={() => onQuickView(product)} aria-label={`Quick view ${product.name}`}>
      <img src={product.image} alt={product.name} loading="lazy"/>
      {product.tag && <span className="product-tag">{product.tag}</span>}
      <span className="quick-view">Quick view <Plus size={15}/></span>
    </button>
    <div className="product-meta">
      <div><p className="product-name">{product.name}</p><p className="product-color">{product.color} / {product.category}</p></div>
      <div className="price-stack"><strong>{money(product.price)}</strong>{product.oldPrice && <del>{money(product.oldPrice)}</del>}</div>
    </div>
    <button className="add-inline" onClick={() => onAdd(product)}><Plus size={15}/> Quick add</button>
  </motion.article>
}
