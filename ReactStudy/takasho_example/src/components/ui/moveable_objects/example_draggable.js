import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import Moveable from 'react-moveable';

const useStyles = makeStyles((theme) => ({
   root: {
        width: "200px",
        lineHeight: "150px",
        textAlign: "center",
        margin: "50px",
        display: "inline-block",
        position:"absolute"
   },
}))

export const ExampleDraggable = (props) => {
    const classes = useStyles();
    const [target, setTarget] = useState(null);

    useEffect(() => {
        setTarget(document.querySelector('.mix'));
    }, []);

    return (
        <React.Fragment className={classes.root}>
            <div className={'moveable mix'}>Object1</div>
            <Moveable
                target={target}
                draggable={true}
                scalable={true}
                rotatable={true}
                origin={false}
                throttleRotate={0}
                onDrag={e => {
                    e.target.style.transform = e.transform;
                }}
                onScale={e => {
                    e.target.style.transform = e.transform;
                }}
                onRotate={e => {
                    e.target.style.transform = e.transform;
                }}
            />
        </React.Fragment>
    );
};