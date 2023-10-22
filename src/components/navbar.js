import { Link } from 'gatsby';
import React from 'react';

export default function Navbar() {
	return (
		<nav>
		<h2>exonbyte devblog</h2>
      	<div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/projects">github</Link>
      </div>
    </nav>
	);
}
