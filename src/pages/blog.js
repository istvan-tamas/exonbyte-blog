import * as React from 'react';
import Layout from '../components/layout';
import { graphql, useStaticQuery } from 'gatsby';

export default function Blog({ data }) {
	const { posts } = data.blog;
	return (
		<Layout>
			<div>
				<h1>My blog posts</h1>

				{posts.map((post) => (
					<article key={post.id}>
						<h3>{post.frontmatter.title}</h3>
						<small>
							{post.frontmatter.author}, {post.frontmatter.date}
						</small>
						<div dangerouslySetInnerHTML={{ __html: post.html }} />
					</article>
				))}
			</div>
		</Layout>
	);
}

export const pageQuery = graphql`
	query BlogPosts {
		blog: allMarkdownRemark {
			posts: nodes {
				frontmatter {
					date(fromNow: true)
					title
					author
				}
				html
			}
		}
	}
`;
