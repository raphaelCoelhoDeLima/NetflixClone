import React, { useEffect } from 'react'
import Tmbd from './Tmbd';


export default () => {

  useEffect(() =>{
    const loadAll = async () => {
      //pegando a lista total
      let list = await Tmbd.getHomeList()
      console.log(list)
    }

    loadAll()
  },[])

  return (
    <div>Teste</div>
  );
}
