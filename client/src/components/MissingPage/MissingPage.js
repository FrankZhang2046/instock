import React from 'react';
import image from '../../assets/images/wesley-tingey-1511140-unsplash.jpg';
import './styles.scss';

class MissingPage extends React.Component {
    render () {
        return (
            <div className="missing">
                <img src={image} alt="nothing" className="missing__image"/>
                <div className="missing__content">
                    <h1 className="missing__content--title">404</h1>
                    <h2 className="missing__content--message">Awwwh!...The requested page is not found...</h2>
                </div>
            </div>
        )
    }
}

export default MissingPage;