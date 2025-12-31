import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

export default function SignedOut() {
    return (
        <div>
            <Button content='Giriş Yap' as={Link} to="/login" primary />
            <Button content='Kayıt Ol' as={Link} to="/register" secondary />
        </div>
    )
}
