import * as React from 'react';
import Layout from '../components/layout';
import * as styles from '../css/projects.module.css';

export default function Home() {
	return (
		<Layout>
		<div className={styles.portfolio}>
			<h1>Current projects</h1>
			<p>Projects I'm working on</p>
		</div>
		</Layout>
	);
}
