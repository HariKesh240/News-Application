import React, { useEffect, useState } from 'react'
import Home from '../pages/Home';
import { Col, Container, Row } from 'react-bootstrap';

function News({category}) {
  const[article,setarticle] = useState([]);

    useEffect(()=>
    {
        fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=7a6547b4929c4d4f9999f5b6182c791e`)
        .then(res => res.json())
        .then(data => {
            setarticle(data.articles || []);
        })
    },[category]
)
  return (

      <Container className="mt-4">
        <h1 className="text-center mb-5 fw-bold fs-1"style={{color:"#FF4165"}}>Today’s News 🗞️</h1>
      <Row>
        {article.map((news, index) => (
          <Col md={3} className="mb-4" key={index}>
            <Home
              title={news.title}
              image={news.urlToImage}
              description={news.description}
              url={news.url}
            />
          </Col>
        ))}
      </Row>
    </Container>
     

  )
}

export default News