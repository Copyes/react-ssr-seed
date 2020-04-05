import React from 'react';
import {
    Link
} from 'react-router-dom';
import {mockData} from './data';

export default class List extends React.Component {
        constructor(props) {
            super(props);
            let initialData = null;
            //得到初始化数据
            if(__SERVER__){
                //如果是当然是服务端执行
                initialData = props.staticContext.initialData||{};
            } else {
                //客户端渲染
                initialData = props.initialData || {};
            }
            this.state = initialData;
        }

        static async getInitialProps() {
            console.log('getInitialProps');
            const fetchData = () => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve({
                            status: 200,
                            data: mockData
                        })
                    }, 300);
                });
            }

            let result = await fetchData();
            return result;
        }

        componentDidMount(){
            if(!this.state.data){
                //如果没有数据，则进行数据请求
                List.getInitialProps().then(res=>{
                    this.setState({
                        data: res.data||[]
                    })
                })
            }
        }

        render() {
            const {data} = this.state
            return <div>
                {data && data.map((item,index)=>{
                    return <div key={index}>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                    </div>
                })}
                {!data&&<div>暂无数据</div>}
            </div>
        }
}