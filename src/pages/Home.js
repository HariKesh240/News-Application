import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Home({title, description, image, url}) {

    
  return (
    <>
        <Card className='border border-2 p-1' style={{ width: '18rem'}}>
      <Card.Img variant="top" src={image||'https://dummyimage.com/300x180/000/fff'} />
      <Card.Body>
        <Card.Title style={{color:'#e81d42ff'}}>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button onClick={()=>window.open(url, "_blank")} style={{color:'#fff', backgroundColor:'#FF4165', border:'none'}}>Explore More</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default Home