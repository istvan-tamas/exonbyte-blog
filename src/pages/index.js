import { Link, graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../components/layout';
import * as styles from '../css/home.module.css';

export default function Home({ data }) {
	const { title, description } = data.site.siteMetadata;

	return (
		<Layout>
			<section className={styles.header}>
				<div>
					<h1>Home</h1>
					<p>Welcome</p>
					<Link className={styles.btn} to="/projects">
						Current projects
					</Link>
				</div>
				<p>
					{title} - {description}
				</p>
			</section>
		</Layout>
	);
}

export const query = graphql`
	query SiteInfo {
		site {
			siteMetadata {
				copyright
				description
				title
			}
		}
	}
`;
