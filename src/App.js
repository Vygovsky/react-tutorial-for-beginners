import React from 'react';
import myLogo from './img/logo.png';
import './App.css'


export class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            buyItems: ['milk', 'bread', 'fruit'],
            message: ''
        }

    }

    addItem(e) {
        e.preventDefault();
        const {buyItems} = this.state;
        const newItem = this.newItem.value;
        const isOnTheList = buyItems.includes(newItem);

        if (isOnTheList) {
            this.setState({
                message: 'This item is exist!'
            })
        } else {
            newItem !== '' && this.setState({
                buyItems: [...this.state.buyItems, newItem],
                message: ''
            });
        }


        this.addForm.reset();
    }

    removeItem(item) {
        const newBuyItems = this.state.buyItems.filter(buyItem  => {
            return buyItem !== item;
        });

        this.setState({
            buyItems: [...newBuyItems]
        })
    }


    render() {
        const {buyItems, message} = this.state;

        return (
            <div className="container-item">
                <h1 className="title">Shopping list</h1>
                <header className="header">
                    <img src={myLogo} alt="logo"/>
                </header>
                <form ref={input => this.addForm = input} className="form-inline" onSubmit={(e) => this.addItem(e)}>
                    <div className="form-group">
                        <label className="sr-only" htmlFor="newItemInput">Add New Item</label>
                        <input ref={input => this.newItem = input} type="text" placeholder="Bread" className="form-control" id="newItemInput"/>
                        <div>
                            <button type="submit" className="btn btn-primary">Add</button>
                        </div>
                    </div>
                </form>
                <div className="container">
                    {
                        message !== '' && <p className="message text-danger">{message}</p>
                    }
                    <caption className="min-vw-100">Shopping list</caption>
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Item</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {buyItems.map(item => {
                                return (
                                    <tr key={item}>
                                        <th scope="row">1</th>
                                        <td>{item}</td>
                                        <td className="text-right">
                                            <button onClick={(e) => this.removeItem(item)} type="button" className="btn btn-default btn-sm">
                                                Remove
                                            </button>
                                        </td>
                                    </tr>)
                            }
                        )}
                        </tbody>
                    </table>

                </div>
            </div>
        )
    }
}

