import React from 'react';
// import image from '../../assets/images/wesley-tingey-1500706-unsplash.jpg';
import './styles.scss';

class MissingPage extends React.Component {
    render () {
        return (
            <div className="missing">
                {/* <img src="https://images.unsplash.com/photo-1499988921418-b7df40ff03f9" alt="nothing" className="missing__image"/> */}
                {/* <img src={image} alt="nothing" className="missing__image"/> */}
                <div className="missing__content">
                    <h1 className="missing__title">404</h1>
                    <h2 className="missing__message">Awwwh!...The requested page is not found...</h2>
                </div>
            </div>
        )
    }
}

export default MissingPage;