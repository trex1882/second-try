import React, {Component} from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        console.log("Redered")
    }

    PortfolioItems(){
        const data = ["Quip", "EventBright", "Ministry Safe"];

        return data.map(item => {
            return <PortfolioItem />;
        })
    }

    render() {
        return (
            <div>
                <h2>Portfolio items go here...</h2>
            </div>

            
        )
    }
}