import { CTA, Navbar } from '../../components';
import CardFeatures from '../../components/cards/CardFeatures';
import { Footer, Blog, Possibility, WhatGPT3, Header } from '../../containers';
import React from "react";

export default function Home (){
    return (
        <div className="">
            <Navbar />
            <Header />
            <CardFeatures />
            <WhatGPT3 />
            <CTA />
            <Possibility />
            <Blog />
            <Footer />
        </div>
    )
}