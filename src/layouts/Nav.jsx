import React from 'react'
import { MenuItem, Menu } from 'semantic-ui-react'

export default function Nav() {
  return (
    <Menu>
        <MenuItem
          name='editorials'
        >
          Editorials
        </MenuItem>

        <MenuItem
          name='reviews'
        >
          Reviews
        </MenuItem>

        <MenuItem
          name='upcomingEvents'
        >
          Upcoming Events
        </MenuItem>
      </Menu>
  )
}
