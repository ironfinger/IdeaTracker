
// Import Styles:
import '../Styles/Home.css';

// Import React:
import React, { Component } from 'react';

import { VictoryPie, VictoryAnimation, VictoryLabel } from 'victory';

// Import Bootstrap components:
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

class DashCard extends Component {
    
    constructor() {
        super();
        this.state = {
            percent: 25, data: this.getData(0)
        };
    }
    
    componentDidMount() {
    let percent = 25;
    this.setStateInterval = window.setInterval(() => {
        percent += (Math.random() * 25);
        percent = (percent > 100) ? 0 : percent;
        this.setState({
        percent, data: this.getData(percent)
        });
    }, 2000);
    }
    
    componentWillUnmount() {
        window.clearInterval(this.setStateInterval);
    }
    
    getData(percent) {
        return [{ x: 1, y: percent }, { x: 2, y: 100 - percent }];
    }

    render() {
        return(
            <Container>
                <Row>
                    <Col>
                    <div>
                        <svg viewBox="0 0 400 400" width="100%" height="100%">
                        <VictoryPie
                            standalone={false}
                            animate={{ duration: 1000 }}
                            width={400} height={400}
                            data={this.state.data}
                            innerRadius={120}
                            cornerRadius={25}
                            labels={() => null}
                            style={{
                            data: { fill: ({ datum }) => {
                                const color = datum.y > 30 ? "green" : "red";
                                return datum.x === 1 ? color : "transparent";
                            }
                            }
                            }}
                        />
                        <VictoryAnimation duration={1000} data={this.state}>
                            {(newProps) => {
                            return (
                                <VictoryLabel
                                textAnchor="middle" verticalAnchor="middle"
                                x={200} y={200}
                                text={`${Math.round(newProps.percent)}%`}
                                style={{ fontSize: 45 }}
                                />
                            );
                            }}
                        </VictoryAnimation>
                        </svg>
                    </div>
                        
                    </Col>
                    <Col>
                        <VictoryPie
                            data={[
                                { x: "Cats", y: 35 },
                                { x: "Dogs", y: 40 },
                                { x: "Birds", y: 55 }
                            ]}
                        />
                    </Col>
                </Row>
            </Container>        
        )
    }
}

export default DashCard;