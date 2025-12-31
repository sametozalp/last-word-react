import React, { useState } from 'react'
import LastWordService from '../services/lastWordService';

const MIN = 10
const MAX = 180

export default function SendWord() {
    const [text, setText] = useState("");

    const handleClick = () => {
        let lastWordService = new LastWordService()
        lastWordService.saveAnon({ text: text }).then(() => {
            window.location.reload();
        })
    };
    return (
        <div className="input-wrapper-responsive">
            <input
                type="text"
                value={text}
                minLength={MIN}
                maxLength={MAX}
                onChange={(e) => setText(e.target.value)}
                placeholder="Son sözünü buraya bırak..."
            />
            <div className="char-info">
                {text.length}/{MAX} karakter
            </div>
            <button
                disabled={text.length < MIN || text.length > MAX}
                onClick={handleClick}>→</button>
        </div>
    )
}
