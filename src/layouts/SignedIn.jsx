import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

export default function SignedIn() {

    function handleLogout() {
        localStorage.removeItem('user')
        window.location.reload()
    }

    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://1k-cdn.com/resimler/uyeler/662076_1719308947_QLvUO.jpg" />
                <Dropdown pointing="top left" text='Samet'>
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info" />
                        <Dropdown.Item text="Çıkış Yap" icon="sign-out" onClick={handleLogout} />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
