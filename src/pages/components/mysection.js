import React from "react"

import styled from 'styled-components'

import Waypoint  from 'react-waypoint';

const Section = styled.section`
  height: 800px;
  background: gray;
  margin: 20px;
`
const Delimiter = styled.div`
 
`

export class MySection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            background: 'gray', 
            status: 'Exited'
        };
        this.enterAnimation = this.enterAnimation.bind(this);
        this.exitAnimation = this.exitAnimation.bind(this);

    }

    enterAnimation() {
        if(this.state.status === 'Exited') {
            this.setState({background: 'blue', status: 'Entered'});
            setTimeout(() => this.setState({background: 'green', status: 'Entered'}), 2000);        
        }
       
    }

    exitAnimation() {
        if(this.state.status === 'Entered') {
            this.setState({background: 'blue', status: 'Exited'});
            setTimeout(() => this.setState({background: 'gray', status: 'Exited'}), 2000);
        }
    }

    render() {
        return (
            <div> 
                <Section id={this.props.id} style={{background: this.state.background}}>
                    <div style={{height: '100px'}}>{this.props.name}</div>
                    <Waypoint onEnter={() => this.enterAnimation()}>
                        <div style={{ height: '50px',
                                      background: 'black',
                                      width: '100%'}}></div>
                    </Waypoint>

                    <div style={{height: '500px'}}>{this.props.name}</div>
                    <Waypoint onEnter={() => this.enterAnimation()} onLeave={() => this.exitAnimation()}>
                        <div style={{ height: '50px',
                                      background: 'black',
                                      width: '100%'}}></div>
                    </Waypoint>
                    <div style={{height: '100px'}}>{this.props.name}</div>
                </Section>

            </div>
        )}
};