import React from "react";

import Img from "./hamburguer-removebg-preview.png"

import "./main.css"

export default () => {
    return (
        <main>
            <section className="home">
                <div className="home-text">
                    <h4 className="text-h4">
                        Bem vindo ao FoodPeak
                    </h4>

                    <h1 className="text-h1">
                        Diferentes hamburgues para diferentes gostos
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem doloribus placeat ipsa provident pariatur? Nisi
                        voluptates quasi quo! Earum nobis libero nulla eveniet,
                        placeat provident dolor esse alias dignissimos reprehenderit
                    </p>

                    <a href="#" className="home-btn">Faça seu pedido</a>

                </div>

                <div className="home-img">
                    <img src= { Img } alt="imagem de um hamburguer" />
                </div>
            </section>
        </main>
    )
}