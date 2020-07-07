import React, {Component} from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoding: false,
            data: [
                { title: "Quip", category: "eCommerce" },
                { title: "EventBright", category: "Scheuduling" },
                { title: "Ministry Safe", category: "Enterprise" },
                { title: "Swing Away", category: "eCommerce" }
            ]
        };

        this.handleFiler=this.handleFiler.bind(this);
    }

    handleFiler(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
         })
    }

    PortfolioItems(){
           return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={"google.com"} />;
        })
    }


    render() {
        if (this.state.isLoding) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                <button onClick={() => this.handleFiler('eCommerce')}>eCommerce
                </button>
                <button onClick={() => this.handleFiler('Scheuduling')}>Scheuduling
                </button>
                <button onClick={() => this.handleFiler('Enterprise')}>Enterprise
                </button>

                {this.PortfolioItems()}

            </div>

            
        )
    }
}