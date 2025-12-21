import React from 'react';
import '../styles.css';

export default function Footer(){
  return (
    <footer className="container footer" role="contentinfo">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12}}>
        <div>
          <strong>Busy Bee Crochet</strong>
          <div style={{color:'var(--muted)'}}>Small-batch handmade goods — shipped with care.</div>
        </div>
        <div style={{textAlign:'right',color:'var(--muted)'}}>
          <div>Follow us</div>
          <a href="#" style={{color:'var(--accent-600')}} aria-label="Instagram">@busybeecrochet</a>
        </div>
      </div>
    </footer>
  );
}
