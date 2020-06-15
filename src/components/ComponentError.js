import React , {Component} from 'react';

class ComponentError extends Component {
    constructor(props) {
        super();
        this.state ={
            hasError: false
        }
    }

    componentDidCatch(error,info) {
        this.setState({hasError: true})
    }

    render(){
        if (this.state.hasError){
            return <h1>Oooppss. That is not good</h1>
        }
        return this.props.children
    }
}


export default ComponentError
