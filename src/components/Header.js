        import React, { useState } from 'react'
        import Container from 'react-bootstrap/Container';
        import Nav from 'react-bootstrap/Nav';
        import Navbar from 'react-bootstrap/Navbar';
        import News from './News';

        function Header() {
            const [category,setCategory] = useState("general");
        return (
            <div>
            <Navbar expand="lg" style={{backgroundColor : "#ff123eff"}}>
                <Container fluid>
                <Navbar.Brand className="fw-bold text-light">Hari's Daily Ping</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-nav" />

                <Navbar.Collapse id='navbar-nav'>
                <Nav className="ms-auto">
                    <Nav.Link className='text-light' onClick={()=>setCategory("general")}>Home</Nav.Link>
                    <Nav.Link className='text-light' onClick={()=>setCategory("business")}>Business</Nav.Link>
                    <Nav.Link className='text-light' onClick={()=>setCategory("entertainment")}>Entertainment</Nav.Link>
                    <Nav.Link className='text-light' onClick={()=>setCategory("health")}>Health</Nav.Link>
                    <Nav.Link className='text-light' onClick={()=>setCategory("science")}>Science</Nav.Link>
                    <Nav.Link className='text-light' onClick={()=>setCategory("sports")}>Sports</Nav.Link>
                    <Nav.Link className='text-light' onClick={()=>setCategory("technology")}>Technology</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar> 

            {/* Passing the category to Home.js */}
            {<News category={category}/>}
            </div>
        )
        }

        export default Header