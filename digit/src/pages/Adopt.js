import React, { Component } from 'react';
import AdoptCards from '../components/AdoptCards/AdoptCards'
import MenuSection from '../components/MenuSection/MenuSection'
export default function Adopt() {
    return(
        <div>
            <MenuSection/>
            <AdoptCards/>
        </div>
    );
}