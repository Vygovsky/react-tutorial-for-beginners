import React from 'react';
import './App.css';


export class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            buyItem: ['milk', 'bread', 'fruit']
        }
    }

    render() {
        const {buyItem}=this.state;
        return <div>
            <h1>Shopping list</h1>
            {buyItem.map(item => {
                    return <p key={item}>{item}</p>
                }
            )}
        </div>
    }
}

