import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Asha Rao",
  DESCRIPTION: "A portfolio and blog for Asha Rao, a student building thoughtful web projects.",
  AUTHOR: "Asha Rao",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "hello@example.com",
    HREF: "mailto:hello@example.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "asha-rao",
    HREF: "https://github.com/asha-rao/astro-sphere"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "asha-rao",
    HREF: "https://www.linkedin.com/in/asha-rao/",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "asha_rao",
    HREF: "https://twitter.com/asha_rao",
  },
]
