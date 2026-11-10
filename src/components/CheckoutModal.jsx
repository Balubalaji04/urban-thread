import { useState } from 'react'
import { X, ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { money } from '../data/content'
const steps = ['Details','Address','Payment']
export default function CheckoutModal({ open, onClose, total, onComplete }) {
  const [step,setStep] = useState(0)
  const [form,setForm] = useState({name:'',email:'',phone:'',address:'',city:'',pin:''})
  if (!open) return null
  const update = e => setForm({...form,[e.target.name]:e.target.value})
  const valid = step === 0 ? form.name && form.email && form.phone : step === 1 ? form.address && form.city && form.pin : true
  const next = () => step < 2 ? setStep(step+1) : onComplete()
  return <div className="overlay checkout-overlay"><section className="checkout-modal">
    <div className="checkout-head"><div><p className="eyebrow">URBAN THREAD / CHECKOUT</p><h2>Make it yours.</h2></div><button className="icon-button" onClick={onClose}><X/></button></div>
    <div className="stepper">{steps.map((s,i)=><div className={i===step?'step active':i<step?'step done':'step'} key={s}><span>{i<step?<Check size={13}/>:`0${i+1}`}</span>{s}</div>)}</div>
    {step===0 && <div className="checkout-fields"><h3>Your details</h3><label>Full name<input name="name" value={form.name} onChange={update} placeholder="Name"/></label><label>Email address<input name="email" type="email" value={form.email} onChange={update} placeholder="you@example.com"/></label><label>Phone number<input name="phone" value={form.phone} onChange={update} placeholder="+91"/></label></div>}
    {step===1 && <div className="checkout-fields"><h3>Where should we send it?</h3><label>Address<input name="address" value={form.address} onChange={update} placeholder="House no., street, area"/></label><div className="field-row"><label>City<input name="city" value={form.city} onChange={update} placeholder="City"/></label><label>PIN code<input name="pin" value={form.pin} onChange={update} placeholder="6-digit PIN"/></label></div></div>}
    {step===2 && <div className="payment-placeholder"><span>✳</span><h3>Payment, your way.</h3><p>This demo checkout does not collect or process payments. A payment gateway can be connected here.</p><div className="payment-total"><span>Order total</span><strong>{money(total)}</strong></div><div className="payment-method">UPI&nbsp;&nbsp; · &nbsp;&nbsp;Cards&nbsp;&nbsp; · &nbsp;&nbsp;Net banking</div></div>}
    <div className="checkout-actions"><button className="back-button" onClick={() => step===0?onClose():setStep(step-1)}><ArrowLeft size={15}/> {step===0?'Back to bag':'Back'}</button><button className="primary-button" disabled={!valid} onClick={next}>{step===2?'PLACE DEMO ORDER':'CONTINUE'} <ArrowRight size={15}/></button></div>
  </section></div>
}
