import React, { useState, useEffect } from 'react'
import { fetchInfos } from '../../../api/ibge';


function DropdownInfos() {

  const [infos, setInfos] = useState([]);

  useEffect(() => {
    fetchInfos().then(console.log)
    setInfos(infos);
  }, [infos]);

  return (
    <div>
      {infos.map((info) => {
        return (console.log(infos.nome))
      })}
    </div>
  );
}
export default DropdownInfos;