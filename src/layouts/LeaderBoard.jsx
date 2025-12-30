import React from 'react'

export default function LeaderBoard() {
  const leaders = [
    { rank: '01', text: 'Zaman sadece bir illüzyon.', time: '14s 22dk' },
    { rank: '02', text: 'Sessizlikte yankılanan...', time: '8s 05dk' },
    { rank: '03', text: 'Kısa ve öz.', time: '3s 12dk' },
  ];

  return (
    <div>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        fontSize: '0.7rem', 
        letterSpacing: '2px', 
        color: '#555',
        marginBottom: '30px'
      }}>
        <span>LİDERLER</span>
        <div style={{ width: '6px', height: '6px', background: '#4ade80', borderRadius: '50%', boxShadow: '0 0 10px #4ade80' }}></div>
      </div>

      {leaders.map((item, index) => (
        <div key={index} style={{ display: 'flex', gap: '15px', marginBottom: '25px', opacity: index === 0 ? 1 : 0.5 }}>
          <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#555' }}>{item.rank}</span>
          <div>
            <p style={{ fontSize: '0.9rem', margin: 0 }}>{item.text}</p>
            <small style={{ color: '#555', fontSize: '0.7rem' }}>{item.time}</small>
          </div>
        </div>
      ))}
    </div>
  )
}