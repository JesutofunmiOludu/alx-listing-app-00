📌 ALX Listing App — Milestone 00

Responsive Property Listing Page with Layout, Hero, Filters, and Dynamic Listings

📖 Overview

This milestone focuses on converting a UI mockup into a fully structured responsive listing page using Next.js and Tailwind CSS.
You will build reusable layout components (Header, Footer, Layout), implement a Hero section, create a filter system, and dynamically render property listings using the provided dataset.

By the end of this milestone, you will have:

A complete responsive layout structure

Reusable Header, Footer, and Layout components

A functional Hero section with a background image

Interactive property filters with Pill components

A populated listing section using REAL sample property data

🚀 Project Setup
1️⃣ Duplicate the Repository

Create a copy of the original project:

cp -r alx-listing-app alx-listing-app-00


This new folder will serve as your working project.

📁 2️⃣ Folder Structure Setup

Inside your project, create the following directories:

components/
  layout/
    Header.tsx
    Footer.tsx
    Layout.tsx

constants/
  index.ts

interfaces/
  index.ts

🏠 3️⃣ Add Property Listing Data

Inside constants/index.ts, export a constant named:

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [ ... ];


Use the full dataset provided in the task.
This dataset includes:

name

address

rating

category

price

offers

image

discount

These will be used to dynamically build the property listing page.

🔧 4️⃣ Create Interface for Property Data

Inside interfaces/index.ts, define the PropertyProps interface:

export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}


This ensures type safety when rendering listings.

🧩 5️⃣ Implement Layout Components
Header Component

File: components/layout/Header.tsx

Your Header should include:

Logo

Search bar

Authentication buttons (sign in, sign up)

Categories (Rooms, Mansion, Countryside, etc.)

Use Tailwind CSS for responsive UI.

Footer Component

File: components/layout/Footer.tsx

Include:

Copyright

Links (help, support, policies, etc.)

Social media icons (optional)

Layout Component

File: components/layout/Layout.tsx

This wraps all pages with a shared Header + Footer:

import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

🌍 6️⃣ Wrap App With Layout

In pages/_app.tsx, wrap all pages:

import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}


This makes Header and Footer globally visible.

🖼️ 7️⃣ Implement the Hero Section

In pages/index.tsx:

Import your background image from constants/

Add a large hero banner

Include:

“Find your favorite place here!”
“The best prices for over 2 million properties worldwide.”

Use Tailwind to center text and ensure responsiveness.

🎛️ 8️⃣ Build Filter Section

Create a reusable Pill Component:

Accepts text props

Renders filters like:

Top Villa | Self Checkin | Mountain View | Free Parking | Beachfront ...


Map through an array:

{filters.map((item) => <Pill label={item} key={item} />)}


Filters should appear horizontally scrollable on small screens.

🏡 9️⃣ Implement Listing Section

Still in pages/index.tsx:

Import PROPERTYLISTINGSAMPLE

Map over the array to render property cards:

Each card displays:

Property Image

Name

Rating

Price

Category Tags (optional)

Discount Badge (if any)

Use Tailwind CSS grid for responsiveness:

1 column on mobile

2 columns on tablets

3–4 columns on large screens

Example:

{PROPERTYLISTINGSAMPLE.map((property) => (
  <PropertyCard key={property.name} {...property} />
))}

✔️ Final Outcome

By completing this milestone, you will have:

✨ A fully responsive listing page
✨ Dynamic rendering of real property data
✨ Clean reusable layout components
✨ A functional hero + filter interface
✨ Strong understanding of component structure in Next.js

📦 Tech Stack

Next.js 14

TypeScript

Tailwind CSS

React Components

Responsive Design Principles

📚 Additional Notes

Ensure mobile-first design

Use Tailwind utility classes for spacing, flex, grids, etc.

Keep components modular and reusable

Follow the DRY principle

Validate data using TypeScript interfaces
