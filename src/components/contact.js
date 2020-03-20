import React, { Component} from 'react';
import { Grid, Cell , List, ListItem, ListItemContent} from 'react-mdl';


class Contact extends Component {
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Roni P James</h2>
                        <img
                             src={process.env.PUBLIC_URL +"/roni.png"}
                             alt="avatar"
                        style={{height: '250px'}}
                        
                        />
                      </Cell>
                    
                    
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                        <List>
  <ListItem>
    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
        <i className="fa fa-phone-square" aria-hidden="true"/>
        {+91} -85471 64550</ListItemContent>
  </ListItem>


  <ListItem>
    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
        <i className="fa fa-envelope" aria-hidden="true"/>
         ronipjames111@gmail.com</ListItemContent>
  </ListItem>


  
  
    
</List>

                        </div>
                        
                        
                        </Cell> 
 
                </Grid>
            </div>
        )
    }
}
export default Contact;
