import React, { Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0};
    }
    toggleCategories() {
        

        if(this.state.activeTab === 0) {
            return(
                <div className="projects-grid">

                {/*Project 1 */}
                <Card shadow={5} style={{minWidth: '450' , margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background:
                'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXZTWQroHrI-9VQgH7KlhSwsKYOqptVb3tBdyBi5fUQONuWiuM) center / cover'}}>
                    PHP Project #1</CardTitle>
                <CardText style={{color: 'black'}}>Website for searching the available bakery items and placing the order online.</CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"></IconButton>
                </CardMenu>        

                </Card>

                {/*Project 2 */}
                <Card shadow={5} style={{minWidth: '450' , margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background:
                'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXZTWQroHrI-9VQgH7KlhSwsKYOqptVb3tBdyBi5fUQONuWiuM) center / cover'}}>
                    PHP Project #2</CardTitle>
                <CardText style={{color: 'black'}}>Main objective of the site is searching houses for buying, selling and renting.</CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"></IconButton>
                </CardMenu>        

                </Card>

                
                </div>
            )
        }
        else if(this.state.activeTab===1){
            return(
                <div className="projects-grid">

                {/*Project 1 */}
                <Card shadow={5} style={{minWidth: '450' , margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:
                'url(https://i.pinimg.com/originals/69/16/e2/6916e2b11f37661b5ba69a422c49460c.png) center / cover'}}>
                    React Project #1</CardTitle>
                <CardText style={{color:'black'}}>Created an online portfolio in React</CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"></IconButton>
                </CardMenu>        

                </Card>
                </div>
            )
        }
        else if(this.state.activeTab===2){
            return(
                <div className="projects-grid">

                {/*Project 1 */}
                <Card shadow={5} style={{minWidth: '450' , margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:
                'url(https://www.codeforest.net/wp-content/uploads/2013/04/laravel-logo-big-570x398.png) center / cover'}}>
                    </CardTitle>
                <CardText style={{color:'black'}}>Online Bike Resale Site, where we can have an account and start buying and selling bikes.</CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"></IconButton>
                </CardMenu>        

                </Card>
                </div>
            )
        }
        else if(this.state.activeTab===3){
            return(
                <div className="projects-grid">

                {/*Project 1 */}
                <Card shadow={5} style={{minWidth: '450' , margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:
                'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQB2ndVjvEZ1_8LUCdxLF7GeVbRnJwlwh6dMCIT-abcX7QpinIn) center / cover'}}>
                    </CardTitle>
                <CardText style={{color:'black'}}>WEBSITE HACKING USING GRABBER AND SQLMAP :- Grabber is a web application scanner which can
perform scans and tells where the vulnerability
exists and Sqlmap is a tool that penetrates, detects
and exploits SQL injection flaws providing its
user interface in the terminal. In addition to
mapping and detecting vulnerabilities, the
software enables access to the database, viewing
data in tables such as users, passwords, phone
numbers, e-mail addresses, credit cards, backups
and other confidential and sensitive information.</CardText>

                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"></IconButton>
                </CardMenu>        

                </Card>
                </div>
            )
        }

    }
    

    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                <Tab>PHP</Tab>
                <Tab>REACT</Tab>
                <Tab>LARAVEL</Tab>
                <Tab>RESEARCH</Tab>
                </Tabs>
                    <Grid>
                        <Cell col={12}>

                            <div className="content">{this.toggleCategories()}</div>

                        </Cell>

                    </Grid>
                 </div>
        )
    }
}
export default Projects;