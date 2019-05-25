import React, {Component} from 'react';
import myJson from '../../data/fakeData.json';
import Item from '../../components/Item/Item.js';
import searchIcon from '../../assets/icons/SVG/Icon-search.svg';
import axios from 'axios';
import './styles.scss';

export default class Inventory extends Component{
    state={
        inventory: myJson
    }
    
    componentDidMount(){
        axios.get(`http://localhost:8080/inventory`)
            .then(result => console.log(result)
            )
    }

    removeItem = (id) =>{
        const filteredArray = this.state.inventory.filter(item => {return item.id !== id});
        
        this.setState({inventory: filteredArray});
    }

    render(){
        return(
            <div className="inventory__container">
                <h1 className="inventory__header">Inventory</h1>
                <div className="inventory__search">
                    <img className="inventory__search--icon" src={searchIcon} alt=""/>
                    <input className="inventory__search" type="text" name="serach" id="search"/>
                </div>
                <div className="inventory__items">
                    {this.state.inventory.map(product=>{
                        return (<Item item={product} removeItem={this.removeItem}/>)
                    })}
                </div>
            </div>
        )
    }
}