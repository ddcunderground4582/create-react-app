// LazyRouter
import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';

const LazyRouter = (props) => {
        const FallbackObject = props.fallbackObject;
        const RouteObject = props.routeObject;
        return (
            <Route exact path={ props.path } render={() => (
                <Suspense fallback={ <FallbackObject />}>
                  <RouteObject />
                </Suspense>
              ) } {...props}/>
        )
}

export default LazyRouter;