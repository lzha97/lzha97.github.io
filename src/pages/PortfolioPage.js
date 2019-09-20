import React, {Component} from 'react'
//import image_data from '../assets/images'
//import image1 from '../assets/1.jpeg'
//import image2 from '../assets/2.jpeg'
import Header from '../Header'

function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../assets', false, /[0-9].(jpeg)$/))


class PortfolioPage extends Component {

    constructor(props){
        super(props);
        this.state= {currentImage: 0};
    }
   
    componentDidMount() {
        this.timerID = setInterval(
            () => this.switch(),
            3000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    switch(){
        if(this.state.currentImage == 5){
            this.setState(
                {currentImage: 0}
            );
        }
        else{
            this.setState(
                {currentImage: this.state.currentImage +1}
        );
        }
        
    }

    render(){
        return (
            <div className="container" style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>

                <Header></Header>
                
                <img style={{ width:600, verticalAlign:'middle'}} src = {images[this.state.currentImage]}></img>
                
            </div>
        );
    }
}

export default PortfolioPage