import React from 'react';
import Navbar from './navbar';
import '../css/global.css'

export default function Layout({children}) {
	return (
		<div className="layout">
			<Navbar />
			<div className="content">
				{ children }
			</div>
			<footer>
				- 2023 -
			</footer>
		</div>
	);
}
