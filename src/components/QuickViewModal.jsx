import { useState } from 'react'
import { X, Minus, Plus } from 'lucide-react'
import { money } from '../data/content'
export default function QuickViewModal({ product, onClose, onAdd }) {
  const [size, setSize] = useState(product?.sizes?.[1] || product?.sizes?.[0])
  if (!product) return null
  return <div className="overlay" onMouseDown={e => e.target === e.currentTarget && onClose()}>
    <section className="quick-modal" role="dialog" aria-modal="true" aria-label="Product quick view">
      <button className="modal-close icon-button" onClick={onClose} aria-label="Close"><X/></button>
      <div className="modal-image"><img src={product.image} alt={product.name}/></div>
      <div className="modal-info"><p className="eyebrow">URBAN THREAD / NEW SEASON</p><h2>{product.name}</h2><strong className="modal-price">{money(product.price)}</strong>
        <p className="modal-description">A considered everyday essential. Easy proportions, premium-feel fabric and a fit designed to move with you.</p>
        <p className="filter-label">SELECT SIZE</p><div className="size-options">{product.sizes.map(s => <button key={s} className={size === s ? 'size-chip selected' : 'size-chip'} onClick={() => setSize(s)}>{s}</button>)}</div>
        <p className="filter-label">COLOUR <span>{product.color}</span></p><div className="color-dot large" style={{background: product.colorHex}}/>
        <button className="primary-button full-button" onClick={() => { onAdd(product, size); onClose() }}>ADD TO BAG — {money(product.price)}</button>
      </div>
    </section>
  </div>
}
