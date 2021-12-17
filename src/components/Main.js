import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { mainLayout, title } from '../styles/mainLayout.module.css';

const Main = () => {
	return (
		<StaticQuery
			query={graphql`
				query MyLetter {
					allContentfulPersonalLetter {
						nodes {
							id
							userPersonal {
								userPersonal
							}
						}
					}
				}
			`}
			render={(data) => (
				<section className={mainLayout}>
					{data.allContentfulPersonalLetter.nodes.map((node, id) => (
						<div key={id}>
							<h1 className={title}>Personal Letter</h1>
							<p>{node.userPersonal.userPersonal} </p>
						</div>
					))}
				</section>
			)}
		/>
	);
};

export default Main;
