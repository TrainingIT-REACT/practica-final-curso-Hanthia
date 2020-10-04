import React, { Suspense } from "react";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function (Component) {
    return props => (
      <Suspense fallback={
      <div>
        Cargando... 
        <FontAwesomeIcon icon={faHome} />
       </div>
      }>
        <Component {...props} />
      </Suspense>
    );
  }
