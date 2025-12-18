import React from 'react';
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container" style={{display:'flex', justifyContent:'space-between', gap:'1rem', flexWrap:'wrap'}}>
        <div>&copy; {new Date().getFullYear()} Busy Bee Crochet — Handmade</div>
        <div><a href="mailto:busybeecrochet@example.com">Email</a> · <a href="#">Instagram</a> · <a href="#">Etsy</a></div>
      </div>
    </footer>
  );
}
