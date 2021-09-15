import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Error404 from './pages/Error404'
import Junior from './pages/Junior'
import JuniorPlus from './pages/JuniorPlus'
import PreJunior from './pages/PreJunior'

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus'
}

function Routes() {
    return (
        <div>
            <Switch>

                <Route path={'/'} exact render={() => <Redirect to={PATH.PRE_JUNIOR} />} />

                <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior />} />
                <Route path={PATH.JUNIOR} render={() => <Junior />} />
                <Route path={PATH.JUNIOR_PLUS} render={() => <JuniorPlus />} />

                <Route render={() => <Error404 />} />

            </Switch>
        </div>
    )
}

export default Routes
