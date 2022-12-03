import Kepeim from './App';
import React from 'react';
import App from './App';
import foKep from './Fokep';

function Kep(props) {
/*     clickOnImage = () => {
        console.log(this.props.kep.id)

    } */

    return (
        <div className="kep" /* onClick={this.clickOnImage} */>
            <img src={props.kepAdat.kep}></img>
        </div>
    );
}

export default Kep; 
/* 
class Kep extends React.Component {
    constructor(props) {
        super(props);
        this.clickOnImage = this.clickOnImage.bind(this);
    }
    clickOnImage() {
        console.log(this.props.kep.id)
    }
    render() {
        return (
            <div className="kep" onClick={this.clickOnImage}>
                <img src={props.kepAdat.kep}></img>
            </div>
        );
    }
}
export default Kep;
 */