import React, { MouseEventHandler } from "react";
import classes from "./Button.module.scss";


interface PropTypes {
  text: string,
  icon: any,
  onClick: MouseEventHandler,
}

const Button = (props: PropTypes) => {
    if(props.icon !== '' && props.icon !== undefined && props.icon !== null){
        return (
            <button className={classes.button} onClick={props.onClick}>
            {props.icon}
            <p>{props.text}</p>
          </button>       
        )
    }

    return (
        <button className={classes.button} onClick={props.onClick}>
            {props.text}
        </button>       
    )
}

export default Button;
