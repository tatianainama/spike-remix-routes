import type { FC, PropsWithChildren } from 'react';

const Root: FC<PropsWithChildren<any>> = ({ children, ...props }) => (
  <div className="root" {...props}>
    {children}
  </div>
);

const Main: FC<PropsWithChildren> = ({ children, ...props }) => (
  <div className="main" {...props}>
    {children}
  </div>
);

const Sidebar: FC<PropsWithChildren> = ({ children, ...props }) => (
  <aside className="sidebar" {...props}>
    <nav>
      <a href="/prisma/overview">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="32" height="32" rx="6" fill="#4A5568" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.12611 17.8841C8.95554 18.1624 8.95818 18.5134 9.13291 18.7891L12.2955 23.7779C12.5008 24.1017 12.8964 24.2494 13.2636 24.1392L22.3901 21.4013C22.8882 21.2518 23.1388 20.6963 22.9211 20.224L17.0541 7.49724C16.768 6.87658 15.9055 6.82564 15.5483 7.40829L9.12611 17.8841ZM16.8982 10.4067C16.7735 10.1182 16.3513 10.1626 16.2894 10.4708L14.0306 21.7175C13.983 21.9546 14.205 22.1572 14.4368 22.088L20.7425 20.2057C20.9265 20.1507 21.0214 19.9474 20.9452 19.7711L16.8982 10.4067Z"
            fill="white"
          />
        </svg>
      </a>
    </nav>
    {children}
  </aside>
);

const Navbar: FC<PropsWithChildren> = ({ children, ...props }) => (
  <div className="navbar" {...props}>
    {children}
  </div>
);

export const Layout = {
  Root,
  Main,
  Sidebar,
  Navbar,
};
