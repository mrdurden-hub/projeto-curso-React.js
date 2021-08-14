import './styles.css'

import { Component } from "react";

export class Button extends Component {
    render(){
        const {text, loadPostsFunction, disabled} = this.props

        return(
            <button 
            disabled={disabled}
            className="button" 
            onClick={loadPostsFunction}>{text}</button>
        )

    }
}