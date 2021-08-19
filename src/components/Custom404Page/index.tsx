import { css } from '@emotion/react';
import type { FC } from 'react';

import { Heading, Link, Text, Layout } from '~/components';
import { atMinXL, spacing } from '~/theme';

export const Custom404Page: FC = () => {
  return (
    <Layout description="400 Error" title="Custom404Page">
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
					Oops!
				</Heading>
				<Heading as="h3" variant="h2"
					css={css`
					${atMinXL} {
						margin-bottom: ${spacing.xs};
					}
				`}
				>
					We can&apos;t seem to find what you&apos;re looking for.
				</Heading>
				<Text as="p" variant="h3"
					css={css`
					${atMinXL} {
						margin-bottom: ${spacing.xs};
					}
				`}
				>
					Here are some helpful links instead:
				</Text>
				<ul
					css={css`
					list-style: none;
					padding-left: 0;
					
				`}
				>
					<Text as="li" variant="li"><Link href="/" variant="CTA">Home</Link></Text>
					<Text as="li" variant="li"><Link href="/contact" variant="CTA">Contact</Link></Text>
				</ul>
			</div>
    </Layout>
  );
};