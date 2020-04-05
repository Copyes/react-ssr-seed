import React from 'react';
import {
    Link
} from 'react-router-dom';
import {mockData} from './data';

export default class Index extends React.Component {
        constructor(props) {
            super(props);
        }

        static async getIntialProps() {
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

        render() {
            return <dvi>文章页面1</dvi>
        }
}