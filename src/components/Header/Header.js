import React, { useContext } from "react";
import {TestContext} from '../../context/context'

function Basic(props) {
    const test = useContext(TestContext)
    console.log('test',test);
  return (
    <h1>Test</h1>
  )
}

export default Basic;