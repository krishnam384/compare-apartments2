import React from 'react';
import {Link} from 'react-router-dom';
import MaterialTable from 'material-table';
import { Button } from '@material-ui/core';
import { BsFillFunnelFill } from "react-icons/bs";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


import './Table.css';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));




export const Table = () => {

    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();
    const data = [
        {name:'sai',age:12},
        {name:'krishnam',age:23},
        {name:'raju',age:24}
    ]

    const columns = [
        {
            title: 'Name',field:'name'
        },
        {
            title: 'Age', field:'age'
        }
    ]
    return (
        <div>

        <Link to={`/compare`}>

            Click here to navigate to Grid page
        
        </Link>

        <Link to={`/practise`}>

Click here to Practise Material UI

</Link>



        <Link to={`/compareTable`}>
            Click here to use compare table
        </Link>

        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={spacing}>
                    <Grid key={0} item>
                        <Paper className={classes.paper} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
            <Button variant="outlined">This is Button</Button>
            
            <Button disableElevation>This is Button</Button>
            
            <Button disableFocusRipple>This is Button</Button>

            <Button size='small'>This is Button</Button>
            
            <Button startIcon>This is Button</Button>

            <Button color="primary" variant="outlined">This is Button</Button>

            
            <Button color="primary" size='large' variant="contained" style={{height:'40px',borderRadius:'50%'}}><BsFillFunnelFill color="white"/></Button>

            <MaterialTable title='Material Table'
            data={data}
            columns={columns}
            options={{
                search:true,
                paging:false,
                filtering:true,
                exportButton:true
            }}
            />
        </div>
    )
}