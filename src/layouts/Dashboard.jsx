import React from 'react'
import { Grid } from 'semantic-ui-react'
import LeaderBoard from './LeaderBoard'
import Content from './Content'
import Nav from './Nav'

export default function Dashboard() {
  return (
    <Grid className="main-layout" columns={2}>
      <Grid.Row>
        <Grid.Column width={4}>
          <div className="glass-panel">
            <LeaderBoard />
          </div>
        </Grid.Column>
        <Grid.Column width={12} style={{ display: 'flex', flexDirection: 'column' }}>
          <Nav />
          <Content />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}