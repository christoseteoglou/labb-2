import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const Main = () => {
	return (
		<StaticQuery
			query={graphql`
				query MyEducationQuery {
					allContentfulEducation {
						nodes {
							education
							date
							school
							id
						}
					}
				}
			`}
			render={(data) => (
				<div>
					{data.allContentfulEducation.nodes.map((node, id) => (
						<div key={id}>
							<h2>{node.education}</h2>
							<h4>{node.school}</h4>
							<h4>{node.date}</h4>
						</div>
					))}
				</div>
			)}
		/>
	);
};

export default Main;
