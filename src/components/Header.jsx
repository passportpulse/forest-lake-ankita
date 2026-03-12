import React from "react";
import { Link, useLocation } from "react-router-dom";
import Section from "./layout/Section";
import Container from "./layout/Container";
import { ChevronRight, HomeIcon } from "lucide-react";

export default function CommonHeader({
  title,
  subtitle,
  category,
  image = "/images/header-decor.jpg",
}) {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Section className="relative pt-28 pb-18 md:pt-32 md:pb-20 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-secondary-dark/80"></div>

      {/* Decorative Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary-dark/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl"></div>

      <Container className="relative z-10">
        {/* Breadcrumbs */}
        <nav className="flex items-center flex-wrap gap-1 text-primary-light/70 text-[11px] tracking-wider uppercase mb-5">
          <Link
            to="/"
            className="flex items-center hover:text-white transition font-semibold group"
          >
            <HomeIcon size={13} className="mr-1.5" />
            Home
          </Link>

          {pathnames.map((name, index) => (
            <React.Fragment key={index}>
              <ChevronRight size={13} />
              <span className="text-primary-light capitalize">{name}</span>
            </React.Fragment>
          ))}
        </nav>

        {/* Header Content */}
        <div className="max-w-3xl">
          {/* Category */}
          <span className="inline-block mb-3 px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-primary-dark/20 text-primary-light rounded-full">
            {category || "Forest Lake"}
          </span>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="mt-3 text-sm md:text-base text-slate-100 max-w-xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </Container>
    </Section>
  );
}
