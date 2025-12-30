import React from 'react'
import { GridRow, GridColumn, Grid } from 'semantic-ui-react'
import LeaderBoard from './LeaderBoard'
import Content from './Content'
import Nav from './Nav'

export default function Dashboard() {
  return (
    <Grid columns={2} divided>
      <GridRow>
        <GridColumn width={4}>
          <LeaderBoard />
        </GridColumn>
        <GridColumn width={12}>
          <Nav />
          <Content />
        </GridColumn>
      </GridRow>
    </Grid>
  )
}
