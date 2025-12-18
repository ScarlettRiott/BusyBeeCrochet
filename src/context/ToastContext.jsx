/*
  Toast provider (simple): provides addToast that supports an undo callback.
*/
import React, { createContext, useContext, useState } from 'react';

const ToastContext = createContext();
export function useToast() { return useContext(ToastContext); }

let idCounter = 1;
export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  function addToast({ title = '', message = '', type = 'info', duration = 3500, undo = null }) {
    const id = idCounter++;
    const t = { id, title, message, type, undo };
    setToasts((arr) => [...arr, t]);
    if (duration > 0) setTimeout(() => removeToast(id), duration);
    return id;
  }
  function removeToast(id) { setToasts((arr) => arr.filter((x) => x.id !== id)); }
  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <div className="toast-container" role="status" aria-live="polite">
        {toasts.map((t) => (
          <div key={t.id} className={`toast toast-${t.type}`}>
            <div>
              {t.title && <div className="toast-title">{t.title}</div>}
              <div className="toast-message">{t.message}</div>
              {t.undo && <div style="margin-top:8px"><button className="btn btn-outline" onclick="{() => { t.undo(); removeToast(t.id); }}">Undo</button></div>}
            </div>
            <button className="toast-close" onClick={() => removeToast(t.id)} aria-label="Dismiss">✕</button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
