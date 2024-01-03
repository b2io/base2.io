const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

(async () => {
  const { globby } = await import('globby');
  
  const pages = await globby([
    'src/pages/**/*{.js,.jsx,.ts,.tsx}',
    '!src/pages/_*{.js,.jsx,.ts,.tsx}',
    '!src/pages/api',
  ]);

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) =>
          page
            .replace(/^src\/pages/, '')
            .replace(/\.[jt]sx?$/, '')
            .replace(/\/index$/, ''),
        )
        .filter((slug) => !/\d+/.test(slug))
        .map((slug) => {
          return `
            <url>
              <loc>https://www.base2.io${slug}</loc>
            </url>
          `.trim();
        })
        .join('\n')}
    </urlset>
  `.trim();

  const prettierConfig = await prettier.resolveConfig(
    path.join(process.cwd(), '.prettierrc'),
  );

  fs.writeFileSync(
    'public/sitemap.xml',
    prettier.format(sitemap, { ...prettierConfig, parser: 'html' }),
  );
})();
