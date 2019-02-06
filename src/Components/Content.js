import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Content = (props) => (
<div className='content'>
    <Grid container spacing={24}>
            <Grid item xs={6} style={{padding: 20}}>
                <img alt="" style={{width: '100%', height: '380px', objectFit: "cover"}} src={props.img} />
            </Grid>
            <Grid item xs={6} style={{padding: 20}}>
                <Typography component="h2" variant="display1" gutterBottom>
                    <a href={props.url}>{props.title}</a>
                </Typography>
                <Typography component="h2" variant="headline" gutterBottom>
                    {props.des}
                </Typography>

                <Typography variant="subheading" gutterBottom>
                    Author: {props.author}
                </Typography>
                
            </Grid>
    </Grid>
</div>

)

export default Content;