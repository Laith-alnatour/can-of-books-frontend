import React from "react";
import { useAuth0 } from '@auth0/auth0-react';
import Card from 'react-bootstrap/Card';
import Header from "./Header";
import Footer from "./Footer";



function Profile () {
    const { isAuthenticated, user } = useAuth0();
    return (
        <>
            <Header />
            {isAuthenticated &&
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={`${user.picture}`} alt="profile" />
                    <Card.Body>
                        <Card.Title>{user.name}</Card.Title>
                        <Card.Text>
                            {user.email}
                        </Card.Text>
                    </Card.Body>
                </Card>
            }
            <Footer />
        </>

    );
}

export default Profile;