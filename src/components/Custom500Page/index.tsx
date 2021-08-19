import { css } from '@emotion/react';
import type { FC } from 'react';

import { Heading, Layout } from '~/components';
import { atMinXL, spacing } from '~/theme';

export const Custom500Page: FC = () => {
  return (
    <Layout description="500 Error" title="Custom500ErrorPage">
			<div
				css={css`
				${atMinXL} {
					margin-left: ${spacing.marginXl};
					margin-right: ${spacing.marginXl};
				}
			`}
			>
				<Heading as="h2" variant="h1"
					css={css`
					${atMinXL} {
						margin-bottom: ${spacing.xs};
					}
				`}
				>
					Oh no! An error!
				</Heading>
				<Heading as="h3" variant="h2"
					css={css`
					${atMinXL} {
						margin-bottom: ${spacing.xs};
					}
				`}
				>
					Error Code: 500
				</Heading>
			</div>
    </Layout>
  );
};