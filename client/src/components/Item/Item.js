import React, {Component} from 'react';
import dottedMenu from '../../assets/icons/SVG/Icon-kebab-default.svg';
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
            <div className="item__container">
                <div className="item__removeButton">
                    <img ref={this.dottedButton} className="item__removeButton" src={dottedMenu} alt="" onClick={()=>{(this.toggleButton())}}/>
                    <div className={this.state.toggled===false? 'item__removeButton--popUp-folded' : 'item__removeButton--popUp-clicked'} onClick={()=>this.clickHandler(id)}>Remove</div>
                </div>
                <h4 className="item__header">ITEM</h4>
                <h2 className="item__name">{name}</h2>
                <p className="item__description">{description}</p>
                <h4 className="item__date--header">LAST ORDERED</h4>
                <p className="item__date">{lastOrdered}</p>
                <h4 className="item__location--header">LOCATION</h4>
                <p className="item__location">{location}</p>
                <h4 className="item__quantity--header">QUANTITY</h4>
                <p className="item__quantity">{quantity}</p>
                <h4 className="item__status--header">STATUS</h4>
                <p className="item__status">{isInstock}</p>
            </div>
        )
    }
}

export default Item;