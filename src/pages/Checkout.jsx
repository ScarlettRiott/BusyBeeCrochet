import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/format';

export default function Checkout() {
  const { items, getSubtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name:'', email:'', notes:'' });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState('');
  const endpoint = process.env.REACT_APP_FORMSPREE_ENDPOINT || 'https://formspree.io/f/your-form-id';

  function buildOrderText(){ return items.map(it=>`${it.qty} x ${it.title} — $${(it.price*it.qty).toFixed(2)}`).join('\n'); }

  async function handleSubmit(e){
    e.preventDefault();
    if(!form.name||!form.email){ setStatus('Please provide name & email'); return; }
    if(items.length===0){ setStatus('Cart is empty'); return; }
    setSending(true); setStatus('');
    try {
      const payload = { name: form.name, email: form.email, message: `Order:\n${buildOrderText()}\n\nNotes:\n${form.notes}` };
      const res = await fetch(endpoint, { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(payload) });
      if(res.ok){ setStatus('Order sent!'); clearCart(); setTimeout(()=>navigate('/'),2000); } else { setStatus('Failed to send order'); }
    } catch(err){ setStatus(`Error: ${err.message}`); } finally { setSending(false); }
  }

  return (
    <div className="container">
      <h2>Checkout</h2>
      <div style={{display:'grid',gridTemplateColumns:'1fr 360px',gap:16}}>
        <form className="form" onSubmit={handleSubmit}>
          <label>Name<input className="input" value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} required /></label>
          <label>Email<input className="input" type="email" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} required /></label>
          <label>Notes<textarea className="input" rows="6" value={form.notes} onChange={(e)=>setForm({...form,notes:e.target.value})} /></label>
          <div style={{marginTop:12}}>
            <button className="btn btn-primary" type="submit" disabled={sending}>{sending ? 'Sending…' : `Send Order — ${formatCurrency(getSubtotal())}`}</button>
          </div>
          {status && <p style={{marginTop:12,color: status.startsWith('Order sent') ? 'green' : 'crimson'}}>{status}</p>}
        </form>

        <aside>
          <div className="form">
            <h3>Order summary</h3>
            {items.length===0 ? <p>Your cart is empty.</p> : items.map((it,i)=>(
              <div key={i} style={{display:'flex',justifyContent:'space-between',padding:'6px 0'}}>{it.qty} × {it.title}<div>{formatCurrency(it.price*it.qty)}</div></div>
            ))}
            <hr />
            <div style={{display:'flex',justifyContent:'space-between',fontWeight:700}}>Subtotal<div>{formatCurrency(getSubtotal())}</div></div>
          </div>
        </aside>
      </div>
    </div>
  );
}
