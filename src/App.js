import React from 'react';
import myLogo from './img/logo.png';
import './App.css'


export class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            buyItem: ['milk', 'bread', 'fruit']
        }

    }

    addItem(e){
        e.preventDefault();
        const {buyItem}=this.state;
        const newItem=this.newItem.value;

        this.setState({
            buyItem:[...this.state.buyItem,newItem]
        });
        this.addForm.reset();
    }


    render() {
        const {buyItem} = this.state;

        return (
        <div className="container-item">
            <h1 className="title">Shopping list</h1>
            <header className="header">
                <img src={myLogo} alt="logo"/>
            </header>
            <form  ref ={input=>this.addForm=input} className="form-inline" onSubmit={(e)=>this.addItem(e)}>
                <div className="form-group">
                    <label className="sr-only" htmlFor="newItemInput">Add New Item</label>
                    <input ref ={input=>this.newItem=input} type="text" placeholder="Bread" className="form-control" id="newItemInput"/>
                    <div>
                        <button type="submit" className="btn btn-primary">Add</button>
                    </div>
                </div>
            </form>
            <div className="container">
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
                    {buyItem.map(item => {
                            return (
                                <tr key={item}>
                                    <th scope="row">1</th>
                                    <td>{item}</td>
                                    <td>Button</td>
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

