/*
 * @Author: zhangluying 
 * @Date: 2018-10-31 20:57:59 
 * @Last Modified by: zhangluying
 * @Last Modified time: 2018-11-06 11:28:14
 */

import React, { Component } from 'react'

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr:["首页","员工管理","员工考勤","工作计划","客户管理","亚太学院","级别考核","管理助手","积分管理"]
        };
    }
    hover(){
        
    }
    render () {
        let {arr} =this.state;
        return (
            <div>
                <header className="header">
                    <div className="img"><img src="/img/1.jpg" alt=""/></div>
                    <ul className="list">
                          {
                            arr && arr.map((val,ind) => {
                                return <li>{val}</li>
                            })
                          }
                        
                    </ul>
                    <div className="info">
                        <p>jim阳光</p><p>通知栏</p>
                    </div>
                </header>
            </div>
        )
    }
}

export default Index;