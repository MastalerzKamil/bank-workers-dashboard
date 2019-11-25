import React, { useState } from 'react'
import * as api from 'common/api';

const FetchSingleApplication = (props) => {
  const { applicationId } = props;
  const [application, setApplication] = useState([]);

  React.useEffect(() => {
    api.getSingleApplication({ applicationId })
      .then(fetchedApplication => setApplication(fetchedApplication))
  },[]);

  return application;
}

export default FetchSingleApplication;