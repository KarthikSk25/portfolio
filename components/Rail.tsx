"use client";

import { useEffect, useState } from "react";
import { nav, profile } from "@/lib/profile";

export function Rail() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#about");

  useEffect(() => {
    const sections = nav
      .map((item) => document.querySelector(item.href))
      .filter((node): node is HTMLElement => node instanceof HTMLElement);

    const mark = () => {
      const line = window.scrollY + 140;
      let current: string = nav[0].href;
      for (const section of sections) {
        const top = section.getBoundingClientRect().top + window.scrollY;
        if (top <= line) current = `#${section.id}`;
      }
      setActive(current);
    };

    mark();
    window.addEventListener("scroll", mark, { passive: true });
    window.addEventListener("hashchange", mark);
    return () => {
      window.removeEventListener("scroll", mark);
      window.removeEventListener("hashchange", mark);
    };
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const close = () => setOpen(false);

  return (
    <aside className="rail">
      <div className="rail-top">
        <a className="mark" href="#top" aria-label="Karthikeyan R, home" onClick={close}>
          KR
        </a>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="nav-toggle-label">{open ? "Close" : "Menu"}</span>
          <span className="nav-toggle-bars" aria-hidden="true" />
        </button>
      </div>
      <p className="eyebrow">Portfolio · Coimbatore</p>
      <p className="rail-name">
        {profile.given} <em>{profile.initial}</em>
      </p>
      <p className="rail-role">{profile.role}</p>
      <nav id="site-nav" className={open ? "site-nav is-open" : "site-nav"} aria-label="Sections">
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            aria-current={active === item.href ? "true" : undefined}
            onClick={close}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <div className="rail-foot">
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <a href={`tel:${profile.phoneHref}`}>{profile.phoneDisplay}</a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </aside>
  );
}
