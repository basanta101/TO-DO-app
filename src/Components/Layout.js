import React from 'react';
import Header from './Header'
const Layout =(props)=>{
   // console.log('props fro layout is',props)
    return(
        <>
          <Header/>
          {props.children}
        </>
    )

}

export default Layout;