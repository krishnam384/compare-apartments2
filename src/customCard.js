import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 100,
    padding: 0
  },
  title: {
    fontSize: 14,

  },
  pos: {
    marginBottom: 12,
  },
});
const CustomCard = (props) => {

    const classes = useStyles();
    
    return (
        <div>

            {/* <h4>Apartment Name</h4>
        
            <span style={{ color: 'red' }}>price</span><Button style={{ float: 'right' }} variant="outlined">Book</Button>

            <h6> <Button variant="outlined">{isSelected}</Button></h6>
            <a href="#">More Details</a> */}

            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textPrimary" gutterBottom>
                        Apartment 
                    </Typography>
                    <Typography variant="body2" component="p">
                    <img src="https://robohash.org/1?set=set2&size=150x150" /><br />
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" variant="outlined">Book</Button>
                </CardActions>
            </Card>
        </div>    
    )
};

export default CustomCard;