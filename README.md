# react-inactive-tab

Use react-inactive-tab to detects when the user switches to another tab.

## Install

```
npm install react-inactive-tab
```

```

import InactiveTab from 'react-inactive-tab'

function App(){
  return(
    <div>
      <InactiveTab handleInactive={handleInactive} time={time}/>
    </div>
  )
}

```

## Props

|    params    |   value  |             default value            |   description    |
|:------------:|:--------:|:------------------------------------:|:----------------:|
| handleInactive  |  function  |               REQUIRED               | Will be called when user switches to another tab |
|    time  |  number  |               60              | Value in seconds |
