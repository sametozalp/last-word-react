import React, { useEffect, useState } from 'react'
import LastWordService from '../services/lastWordService'

export default function LastWordContainer() {
  const [lastWord, setLastWord] = useState("")

  useEffect(() => {
    let lastWordService = new LastWordService()
    lastWordService.getLastWord().then(result => setLastWord(result.data))
  }, [])

  return (
    <div className="last-word-container">
      <span className="status-label">Şu an hüküm süren söz</span>

      <h1 className="main-word-title">
        {lastWord.text}
      </h1>

      <div className="word-meta">
        — {lastWord.user} <span className="meta-divider">|</span> {lastWord.timeElapsed}
        {lastWord.country && <img src={lastWord.country.flagUrl} alt={lastWord.country.name} width={15} height={10} style={{marginLeft:10}} />}
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