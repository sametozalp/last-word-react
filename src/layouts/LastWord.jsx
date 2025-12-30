import React from 'react'

export default function LastWordContainer() {
  return (
    <div style={{ padding: '0 20px', width: '100%' }}>
      <span style={{ 
        fontSize: '0.7rem', 
        color: '#888', 
        textTransform: 'uppercase', 
        letterSpacing: '2px',
        display: 'block',
        marginBottom: '10px'
      }}>
        Şu an hüküm süren söz
      </span>
      
      <h1 style={{ 
        fontFamily: "'Playfair Display', serif", 
        fontSize: '4.5rem', 
        fontStyle: 'italic',
        lineHeight: '1.1',
        margin: '0 0 20px 0',
        background: 'linear-gradient(to bottom, #fff 0%, #666 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}>
        "Kelimelerin bittiği yerdeyiz."
      </h1>

      <div style={{ color: '#555', fontSize: '0.9rem', marginBottom: '60px' }}>
        — Atakan <span style={{ margin: '0 10px', opacity: 0.3 }}>|</span> 2dk önce
      </div>

      {/* Input Alanı */}
      <div className="input-wrapper" style={{
        display: 'flex',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
        padding: '8px 8px 8px 25px',
        borderRadius: '100px',
        backdropFilter: 'blur(10px)'
      }}>
        <input 
          type="text" 
          placeholder="Son sözünü buraya bırak..." 
          style={{
            flex: 1,
            background: 'transparent',
            border: 'none',
            outline: 'none',
            color: 'white',
            fontSize: '1rem'
          }}
        />
        <button style={{
          background: 'white',
          border: 'none',
          width: '45px',
          height: '45px',
          borderRadius: '50%',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}>
          →
        </button>
      </div>
    </div>
  )
}