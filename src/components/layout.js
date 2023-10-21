import React from 'react';
import Navbar from './navbar';

export default function Layout({children}) {
	return (
		<div className="layout">
			<Navbar />
			<div className="content">
				{ children }
			</div>
			<footer>
				Copyright 2023
			</footer>
		</div>
	);
}
