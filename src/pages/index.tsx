import React from 'react';

import Layout from '../components/Layout';
import { ExtLink } from '../components/Shared';

const HomePage: React.FC = () => {
	return (
		<Layout title="frontend starter">
			<h1>next.js, typescript &amp; styled-components</h1>
			<small>
				by <ExtLink href="https://github.com/zhoug0x">zhoug</ExtLink>{' '}
			</small>
		</Layout>
	);
};

export default HomePage;
