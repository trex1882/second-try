import React from 'react';
import { link, Link } from "react-router-dom";

export default function() {
    return (
    <div>
        <h2>Blog</h2>

        <div>
            <Link to="About-me">Read more</Link>
        </div>
    </div>
    );
}