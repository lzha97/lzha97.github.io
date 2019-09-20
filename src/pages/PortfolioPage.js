import React, {Component} from 'react'
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
                <p style={{fontFamily: 'Open Sans Condensed'}}> For more work go <a href="https://lillianzha.wixsite.com/artportfolio"> here</a></p>
                <img style={{ width:600, verticalAlign:'middle'}} src = {images[this.state.currentImage]}></img>
                
            </div>
        );
    }
}

export default PortfolioPage