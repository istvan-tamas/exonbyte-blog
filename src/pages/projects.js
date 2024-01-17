import * as React from 'react';
import Layout from '../components/layout';
import * as styles from '../css/projects.module.css';

export default function Home() {
	return (
		<Layout>
			<div className={styles.portfolio}>
				<h3>Current projects</h3>
				<p>
					<ul>
						<li>Student organizer</li>
						<li>Petty cash</li>
					</ul>
				</p>
			</div>
		</Layout>
	);
}
