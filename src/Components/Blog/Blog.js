import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Card } from "react-bootstrap";
import Data from './../../Data';
import './Blog.css'

function Blog(){
    const itemBlog = Data.blog.map((itembox) => {
        return(
            <div className="col-md-4">
                <Card>
                    <Card.Img variant="top" src={itembox.img} />
                    <Card.Body>
                        <p className="job">{itembox.job}</p>
                        <Card.Title>{itembox.title}</Card.Title>
                        <Card.Text>{itembox.desc}</Card.Text>
                    </Card.Body>
                    <Card.Body className="pt-0">
                        <Card.Link href={itembox.link}>Read More <FontAwesomeIcon icon={faArrowRight} /></Card.Link>
                    </Card.Body>
                </Card>
            </div>
        )
    })
    return(
        <section className="blog">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Blog</h2>
                        <p>Contrary to popular belief, Lorem Ipsum is Latin literature classical Latin literature from <br/> 45 BC Latin literature classical Latin literature from 45 BC.</p>
                    </div>
                    {itemBlog}
                </div>
            </div>
        </section>
    )
}

export default Blog;