import React from 'react'

export default function LastWordContainer() {
  return (
    <div className="last-word-container">
      <span className="status-label">Şu an hüküm süren söz</span>
      
      <h1 className="main-word-title">
        "Kelimelerin bittiği yerdeyiz."
      </h1>

      <div className="word-meta">
        — Atakan <span className="meta-divider">|</span> 2dk önce
      </div>

      <div className="input-wrapper-responsive">
        <input 
          type="text" 
          placeholder="Son sözünü buraya bırak..." 
        />
        <button>→</button>
      </div>
    </div>
  )
}