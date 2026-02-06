import BlogsList from "../components/BlogsList";

export default function Home() {
  return <BlogsList />;
}

// // <!-- Every Problem is An Opportunity to Show Which Super Hero You Are  -->

// // In SSR, components run on the server and on the client also but in this case this is unnecessary as there is no interactiveness associated with those components. React SSR fixed this issue by omitting these components code from sending and running in the browser and reducing the bundle size.

// // API Calls / file reading / db calls → generate HTML → download JS (only client components, excluded generated HTML (Thanks to server components)) → hydration

// // API Calls / file reading / db calls → generate HTML → download JS (all components including generated HTML JS code also) → hydration

// // Another thing: In SSR, db or API calls happens outside components and then injected into the components in the server but db or API calls happens inside components in Server component.
