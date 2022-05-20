import React from 'react'

import { Tab, Tabs } from '@material-ui/core'

export default function Platform({value, handlePlatform}) {

  return (
    <Tabs
      onChange={handlePlatform}
      value={value}
      aria-label="Tabs where selection follows focus"
      selectionFollowsFocus
    >
      <Tab label = "전체" />
      <Tab label = "백준" />
      <Tab label = "릿코드" />
      <Tab label = "프로그래머스" />
    </Tabs>
  )
}
