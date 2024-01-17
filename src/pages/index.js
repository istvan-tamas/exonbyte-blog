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
					<h3>Welcome</h3>
					<h3>
						{title} - {description}
					</h3>
					<p>Welcome to exonybte.dev!</p>
					<Link className={styles.btn} to="/projects">
						Current projects
					</Link>
				</div>
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
