import React, { useState } from 'react'
import LastWordService from '../services/lastWordService';

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
                onChange={(e) => setText(e.target.value)}
                placeholder="Son sözünü buraya bırak..."
            />
            <button onClick={handleClick}>→</button>
        </div>
    )
}
