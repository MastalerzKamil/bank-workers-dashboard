import React, { useState } from 'react';
import * as api from 'common/api';

const AddApplication = (props) => {

  const [response, setResponse] = useState({});

  React.useEffect(() => {
    api.postApplication(props)
  }, [])

  return response;
}

export default AddApplication;