import React, { useState } from 'react'
import LastWordService from '../services/lastWordService';
import AuthService from '../services/authService';

const MIN = 10
const MAX = 180

export default function SendWord() {
    const [text, setText] = useState("");

    const handleClick = () => {
        let userData = localStorage.getItem('user');
        let lastWordService = new LastWordService()
        if (userData) {
            let user = JSON.parse(userData);
            lastWordService.save({ userProfileId: user.userProfileId, text: text }, user.accessToken)
                .then(() => {
                    window.location.reload()
                })
                .catch(error => {
                    if (error.response && error.response.status === 403) {
                        let authService = new AuthService()
                        authService.refreshToken(user.refreshToken).then(newUser => {
                            localStorage.setItem('user', JSON.stringify(newUser.data));

                            userData = localStorage.getItem('user');
                            user = JSON.parse(userData);
                            lastWordService.save({ userProfileId: user.userProfileId, text: text }, user.accessToken)
                                .then(() => {
                                    window.location.reload()
                                })
                        }).catch(error => {
                            localStorage.removeItem("user");
                            window.location.reload();
                        });
                    }
                });

        } else {
            lastWordService.saveAnon({ text: text }).then(() => {
                window.location.reload();
            })
        }


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
