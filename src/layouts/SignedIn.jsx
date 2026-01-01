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
                <Image avatar spaced="right" src="https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1906669723.jpg" />
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
