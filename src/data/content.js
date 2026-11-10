export const navLinks = [
  { label: 'New drop', href: '#new-drop' },
  { label: 'Collections', href: '#collections' },
  { label: 'Our story', href: '#story' }
]

export const products = [
  { id: 1, name: 'Everyday Heavy Tee', category: 'Tops', price: 1299, oldPrice: 1599, color: 'Black', colorHex: '#171717', sizes: ['S','M','L','XL'], tag: 'BESTSELLER', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&q=85' },
  { id: 2, name: 'Rose Boxy Tee', category: 'Tops', price: 1499, oldPrice: null, color: 'Rose', colorHex: '#c75c70', sizes: ['S','M','L'], tag: 'NEW', image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=900&q=85' },
  { id: 3, name: 'Utility Cargo Pants', category: 'Bottoms', price: 2499, oldPrice: 2999, color: 'Olive', colorHex: '#6b705c', sizes: ['M','L','XL'], tag: 'LIMITED', image: 'https://images.unsplash.com/photo-1517438476312-10d79c077509?w=900&q=85' },
  { id: 4, name: 'Off-Duty Overshirt', category: 'Layers', price: 2899, oldPrice: null, color: 'Cream', colorHex: '#d8d0bd', sizes: ['S','M','L','XL'], tag: '', image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=900&q=85' },
  { id: 5, name: 'Street Form Hoodie', category: 'Layers', price: 3299, oldPrice: 3799, color: 'Black', colorHex: '#171717', sizes: ['M','L','XL'], tag: 'LOW STOCK', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=900&q=85' },
  { id: 6, name: 'Relaxed Denim', category: 'Bottoms', price: 2799, oldPrice: null, color: 'Blue', colorHex: '#536b83', sizes: ['S','M','L','XL'], tag: '', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=900&q=85' }
]

export const highlights = [
  { number: '01', title: 'Built to move', copy: 'Relaxed silhouettes, considered details and comfort that keeps up.' },
  { number: '02', title: 'Less, but better', copy: 'A tight edit of pieces that work harder and stay in rotation.' },
  { number: '03', title: 'Made for now', copy: 'Street-led essentials with a point of view, never a loud logo.' }
]

export const footerLinks = ['Instagram', 'Shipping & returns', 'Contact']
export const money = value => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value)
