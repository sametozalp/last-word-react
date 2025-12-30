import React from 'react'

export default function LeaderBoard() {
  const leaders = [
    { rank: '01', text: 'Zaman sadece bir illüzyon.', time: '14s 22dk' },
    { rank: '02', text: 'Sessizlikte yankılanan...', time: '8s 05dk' },
    { rank: '03', text: 'Kısa ve öz.', time: '3s 12dk' },
  ];

  return (
    <div>
      <div className="lb-header">
        <span>LİDERLER</span>
        <div className="status-dot"></div>
      </div>

      {leaders.map((item, index) => (
        <div key={index} className={`lb-item ${index === 0 ? 'active' : ''}`}>
          <span className="lb-rank">{item.rank}</span>
          <div>
            <p className="lb-text">{item.text}</p>
            <small className="lb-time">{item.time}</small>
          </div>
        </div>
      ))}
    </div>
  )
}