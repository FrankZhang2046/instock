import React, {Component} from 'react';
import dottedMenu from '../../assets/icons/SVG/Icon-kebab-default.svg';
import { Link } from 'react-router-dom';
import './styles.scss'

class Item extends Component{
    state={
        toggled: false
    }
    
    clickHandler=(id)=>{
        this.props.removeItem(id);
    }

    toggleButton=()=>{
        this.setState({toggled: !this.state.toggled});
    }
    dottedButton = React.createRef(); 
    
    render(){
        const {id, name, description, lastOrdered, location, quantity, isInstock} = this.props.item;

        return(
            <Link to={{pathname:`/product/${id}`, state:{test: this.props.item}}}>
            <div className="item__container">
                <div className="item__removeButton">
                    <img ref={this.dottedButton} className="item__removeButton" src={dottedMenu} alt="" onClick={()=>{(this.toggleButton())}}/>
                    <div className={this.state.toggled===false? 'item__removeButton--popUp-folded' : 'item__removeButton--popUp-clicked'} onClick={()=>this.clickHandler(id)}>Remove</div>
                </div>
                    <h4 className="item__header">ITEM</h4>
                <div className="item__description">
                    <h2 className="item__description--header">{name}</h2>
                    <p className="item__description--content">{description}</p>
                </div>
                <div className="item__date">
                    <h4 className="item__date--header">LAST ORDERED</h4>
                    <p className="item__date--content">{lastOrdered}</p>
                </div>
                <div className="item__location">
                    <h4 className="item__location--header">LOCATION</h4>
                    <p className="item__location--content">{location}</p>
                </div>
                <div className="item__quantity">
                    <h4 className="item__quantity--header">QUANTITY</h4>
                    <p className="item__quantity--content">{quantity}</p>
                </div>
                <div className="item__status">
                    <h4 className="item__status--header">STATUS</h4>
                    <p className="item__status--content">{isInstock ? 'In Stock' : 'Out of Stock'}</p>
                </div>
            </div>
            </Link>
        )
    }
}

export default Item;