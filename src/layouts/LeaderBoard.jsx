import React, { useEffect, useState } from 'react'
import LastWordService from '../services/lastWordService'

export default function LeaderBoard() {

  const [leaders, setLeaders] = useState([])

  useEffect(() => {
    let lastWordService = new LastWordService()
    lastWordService.getLeaderBoard().then(result => setLeaders(result.data))
  }, [])

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
            <p className="lb-user">{item.personFullName}
            {item.country && <img src={item.country.flagUrl} alt={item.country.name} width={15} height={10} style={{marginLeft:10}} />}</p>
            <small className="lb-time">{item.timeElapsed}</small>
          </div>
        </div>
      ))}
    </div>
  )
}