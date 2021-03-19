import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const Response = ({response}) => {
    return (
        <div>
            <h1>Form data</h1>
            <Card style={{ width: '18rem', color: "black" }}>
                <Card.Body>
                    <Card.Title>{response.name}</Card.Title>
                    <Card.Text>
                    {response.email}
                    </Card.Text>
                    <Card.Text>
                    {response.text}
                    </Card.Text>
                    <Card.Text>
                    { response.preference ? 'The user would like to be updated by email': 'The user would not like to be updated by email' }
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
     
    )
}

export default Response
