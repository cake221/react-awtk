import { Component } from 'react';
import * as React from "react"
import { AwtkRender } from "../../src"
import {App} from "../target1"

describe("test target1", ()=>{

  it("toMatchSnapshot", ()=>{
    AwtkRender(<App />, () => {
      console.log(' 渲染成功 AWTK ');
    });
    expect(__AwtkSnapshot).toMatchSnapshot()
  })
})

