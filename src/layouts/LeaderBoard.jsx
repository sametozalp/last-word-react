import React, { useEffect, useState } from 'react'
import LastWordService from '../services/lastWordService'

export default function LeaderBoard() {

  const [leaders, setLeaders] = useState([])

  useEffect(() => {
    let lastWordService = new LastWordService()
    lastWordService.getLeaderBoard().then(result => setLeaders(result.data))
  }, [])

  //  const leaders = [
  //    { rank: '01', text: 'Zaman sadece bir illüzyon.', time: '14s 22dk' },
  //    { rank: '02', text: 'Sessizlikte yankılanan...', time: '8s 05dk' },
  //    { rank: '03', text: 'Kısa ve öz.', time: '3s 12dk' },
  //  ];

  return (
    <div>
      <div className="lb-header">
        <span>LİDERLER</span>
        <div className="status-dot"></div>
      </div>

      {leaders.map((item, index) => (
        <div key={index} className={`lb-item ${index === 0 ? 'active' : ''}`}>
          <span className="lb-rank">{index + 1}</span>
          <div>
            <p className="lb-text">{item.text}</p>
            <small className="lb-time">{item.timeElapsed}</small>
          </div>
        </div>
      ))}
    </div>
  )
}