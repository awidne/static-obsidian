import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

interface NavLink {
  label: string
  url: string
}

interface Options {
  links: NavLink[]
}

export default ((opts?: Options) => {
  const CustomNav: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    // Use frontmatter navLinks if present, otherwise fall back to static opts
    const frontmatterLinks = fileData.frontmatter?.navLinks as NavLink[] | undefined
    const links = frontmatterLinks ?? opts?.links ?? []

    if (links.length === 0) return null

    return (
      <div class="custom-nav">
        <h3>Navigation</h3>
        <ul>
          {links.map((link) => (
            <li>
              <a href={link.url}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  CustomNav.css = `
    .custom-nav h3 {
      font-size: 0.85rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 0.5rem;
      color: var(--gray);
    }
    .custom-nav ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .custom-nav li {
      margin: 0.3rem 0;
    }
    .custom-nav a {
      font-size: 0.9rem;
      color: var(--secondary);
      text-decoration: none;
    }
    .custom-nav a:hover {
      color: var(--tertiary);
    }

    @media all and (max-width: 800px) {
      .custom-nav {
        display: none;
      }
    }
  `

  return CustomNav
}) satisfies QuartzComponentConstructor