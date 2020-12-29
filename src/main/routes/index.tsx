import React from 'react'
import { Switch, Route, BrowserRouter} from 'react-router-dom'

import Dashboard from '@/presentation/pages/dashboard';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
