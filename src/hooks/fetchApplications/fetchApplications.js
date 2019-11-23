import React, { useState } from 'react'
import * as api from 'common/api';

const FetchApplications = () => {
  const [applicants, setApplicants] = useState([]);

  React.useEffect(() => {
    api.getApplications()
      .then(fetchedApplicants => setApplicants(fetchedApplicants))
  },[]);

  return applicants;
}

export default FetchApplications;