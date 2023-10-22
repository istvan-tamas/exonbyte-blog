import { Link } from "gatsby";
import * as React from 'react';
import Layout from '../components/layout';
import * as styles from '../css/home.module.css';

export default function Home() {
	return (
		<Layout>
			<section className={styles.header}>
		<div>
			<h1>Home</h1>
			<p>Welcome</p>
			<Link className={styles.btn} to="/projects">Current projects</Link>
		</div>
		</section>
		</Layout>
	);
}
