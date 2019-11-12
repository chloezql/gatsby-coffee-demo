import React from 'react'
import {Link} from 'gatsby'
import Title from "../globals/Title"
export default function Info() {
    return (
        <section className="py-5">
            <div className="container">
                <Title title="our story"></Title>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                    <p className="lead text-muted mb-5">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe tenetur velit mollitia magnam iure ducimus, eum optio odio perferendis iste, corporis facere fuga praesentium soluta repellat veritatis non nihil adipisci consequuntur? Eveniet nemo provident impedit excepturi, dolore, atque voluptates assumenda omnis, voluptatum deserunt aliquam earum. Harum explicabo officiis iusto distinctio?
                    </p>
                    <Link to= "/about">
                        <button className="btn text-uppercase btn-yellow">
                            about page
                        </button>
                    </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
