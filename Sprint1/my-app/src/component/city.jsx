import React, { useState } from 'react';
import {ListGroupItem, Collapse, Button, CardBody, Card } from 'reactstrap';
import Itineraries from "./itineraries.jsx"

// notar que no es una clase, por lo que no se usa this. que es una nocion de clase


const City = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (<div><ListGroupItem tag="a">
                <Button color="primary" onClick={toggle}  style={{ marginBottom: '1rem' }}>
                    {props.pais} - {props.ciudad}
                </Button>
                </ListGroupItem>
                <Collapse isOpen={isOpen}>
                    <Card>
                        <CardBody>
                            <Itineraries cityId={props.cityId}></Itineraries>
                        </CardBody>
                    </Card>
                </Collapse></div>)
}

export default City