import { Row, Spin } from 'antd';
import * as React from 'react';
import './App.css';


class App extends React.Component {
    public render() {
        return (
            <div>
                <Row type="flex" justify="space-around" align="middle">
                    <Spin size="large" />
                    <Spin size="large" />
                    <Spin size="large" />
                </Row>
            </div>
        );
    }
}

export default App;
