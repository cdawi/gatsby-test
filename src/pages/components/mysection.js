import React from "react"

import styled from 'styled-components'

import Waypoint  from 'react-waypoint';

const Section = styled.section`
  height: 800px;
//   background: gray;
  margin: 20px;
`
export class MySection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contentVisible: false
        };
        this.enterAnimation = this.enterAnimation.bind(this);
        this.exitAnimation = this.exitAnimation.bind(this);
    }

    enterAnimation() {
        this.setState({contentVisible: true});
    }

    exitAnimation() {
        this.setState({contentVisible: false});
    }

    render() {
        return (
            <div> 
                <Section id={this.props.id} style={{background: this.state.background}}>

                    <Waypoint topOffset="200px" bottomOffset="200px" onEnter={() => this.enterAnimation()} onLeave={() => this.exitAnimation()}>
                    <div style={{height: "800px"}}>                       
                        <div className={this.state.contentVisible ? "fadeInLeft animated" : "fadeOutRight animated delay-1s"} style={{height: '800px', background: "yellow"}}>
                            <span className={this.state.contentVisible ? "bounceInLeft animated delay-1s" : "bounceOutRight animated"}>Content Visible {this.props.name}</span>
                        </div> 
                            {
                            // <div className="slideOutLeft animated">
                            //         <div style={{height: '100px',
                            //                         background: 'green'}}>{this.props.name}</div>
                            //         <div style={{ height: '50px',
                            //                         background: 'black'}}></div>
            
                            //         <div style={{height: '500px',
                            //                         background: 'green'}}>{this.props.name}</div>
            
                            //         <div style={{ height: '50px',
                            //                         background: 'black'}}></div>
                            //         <div style={{height: '100px',
                            //                         background: 'green'}}>{this.props.name}</div>
                            //     </div>
                            }   
                    </div>                    
                    </Waypoint>
                </Section>

            </div>
        )}
};