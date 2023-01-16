/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "RealHub DAO",
  titleTemplate: "%s | RealHub DAO",
  defaultTitle: "RealHub DAO",
  description: "RealHub DAO",
  canonical: "https://realhub.finance",
  openGraph: {
    url: "https://realhub.finance",
    title: "RealHub DAO",
    description: "RealHub DAO",
    images: [
      {
        // @TODO change this to your own image
        // url: "https://og-image.sznm.dev/**nextarter-chakra**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250",
        alt: "realhub.finance og-image",
      },
    ],
    site_name: "nextarter-chakra",
  },
  twitter: {
    handle: "@RealHubDAO",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
