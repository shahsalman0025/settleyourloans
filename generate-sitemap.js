import { createWriteStream } from 'fs';
import { SitemapStream, streamToPromise } from 'sitemap';
import { request, gql } from 'graphql-request';

const fetchPages = async () => {
  const query = gql`
    query {
      services {
        id
        slug
      }
      posts {
        id
        slug
      }
    }
  `;

  const endpoint = 'https://api-us-west-2.hygraph.com/v2/cloo3nbhlfwtk01t7fn3qh7vy/master';
  const data = await request(endpoint, query);
  console.log(data);
  return data;
};

const generateSitemap = async (hostname, outputPath) => {
  const data = await fetchPages();

  const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'daily', priority: 1.0 },
    { url: '/faq', changefreq: 'daily', priority: 1.0 },
    { url: '/contact', changefreq: 'daily', priority: 1.0 },
    { url: '/404', changefreq: 'daily', priority: 1.0 },
    { url: '/blogs', changefreq: 'daily', priority: 1.0 },
    ...data.services.map(service => ({
      url: `/services/${service.slug}`,
      changefreq: 'weekly',
      priority: 0.8,
    })),
    ...data.posts.map(post => ({
      url: `/blogs/${post.slug}`,
      changefreq: 'weekly',
      priority: 0.8,
    })),
    // Add more dynamic routes as necessary
  ];

  const sitemap = new SitemapStream({ hostname });
  const writeStream = createWriteStream(outputPath);

  sitemap.pipe(writeStream);

  links.forEach(link => {
    sitemap.write(link);
  });

  sitemap.end();

  await streamToPromise(sitemap);
  console.log(`Sitemap generated successfully for ${hostname}!`);
};

// Define your domains and their respective output paths
const domains = [
  { hostname: 'https://settle.loans', outputPath: './public/sitemap_settle.loans.xml' },
  { hostname: 'https://settleloan.com', outputPath: './public/sitemap_settleloan.com.xml' },
  { hostname: 'https://settleloans.in', outputPath: './public/sitemap_settleloans.in.xml' },
];

// Generate sitemaps for each domain
domains.forEach(({ hostname, outputPath }) => {
  generateSitemap(hostname, outputPath).catch(console.error);
});
