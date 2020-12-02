import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import 'font-awesome/css/font-awesome.min.css';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 1,
    },
});

export default function OutlinedCard() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <li className="clearfix">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_04.jpg" alt="avatar" />
        <div className="about">
          <div className="name">Erica Hughes</div>
          <div className="status">
            <i className="fa fa-circle online"></i> online
          </div>
        </div>
      </li>


    );
}
