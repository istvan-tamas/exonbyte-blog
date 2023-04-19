import { Link } from 'gatsby';
import React from 'react';

export default function Navbar() {
	return (
		<nav>
			<h2>exonbyte devblog</h2>
			<ul>
				<li>
					<Link to="/">home</Link>
				</li>
				<li>
					<Link to="/about">about</Link>
				</li>
				<li>
					<Link to="/projects">projects</Link>
				</li>
				<li>
					<Link to="/blog">blog</Link>
				</li>
				<li>
					<Link to="/projects">github</Link>
				</li>
			</ul>
		</nav>
	);
}
