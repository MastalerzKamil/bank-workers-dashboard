import React, { useState } from 'react'
import * as api from 'common/api';

const FetchExortions = () => {
  const [exortions, setExortions] = useState([]);

  React.useEffect(() => {
    api.getExortions()
      .then(fetchedExortions => setExortions(fetchedExortions))
  },[]);

  return exortions;
}

export default FetchExortions;