import React from 'react';
import myLogo from './App.css'


export class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            buyItem: ['milk', 'bread', 'fruit']
        }
    }

    render() {
        const {buyItem} = this.state;
        return <div>
            <h1>Shopping list</h1>
            <header className={myLogo.test}>
                <img src={myLogo} alt="logo"/>
            </header>
            <div className="container">
                {buyItem.map(item => {
                        return <p key={item}>{item}</p>
                    }
                )}
            </div>
        </div>
    }
}

