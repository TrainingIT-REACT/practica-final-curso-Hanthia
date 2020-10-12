import React, { Suspense } from "react";
import CircularProgress from '@material-ui/core/CircularProgress';


export default function (Component) {
    return props => (
      <Suspense fallback={
        <div>
          Cargando... 
          <CircularProgress color="secondary" />
        </div>
      }>
        <Component {...props} />
      </Suspense>
    );
  }
