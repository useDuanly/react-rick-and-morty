import React from "react";

const Layout = ({ children, footer = false }) => {
  return (
    <section className="container">
      <header>
        <article className="logo">
          <h3>Logo</h3>
        </article>
        <h1>Rick and Morty Api</h1>
      </header>
      <main>{children}</main>
      {footer && (
        <footer className="footer">
          <h4>Made in Canarias</h4>
          <p>Developer Duanly</p>
        </footer>
      )}
    </section>
  );
};

export default Layout;
