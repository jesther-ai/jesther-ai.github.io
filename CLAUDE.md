# Project Structure - jesther-ai.github.io

## Overview
This is a professional portfolio website for Jesther Silvestre, a Mobile App Developer. The site is designed as a single-page application showcasing personal projects, professional work, and open-source contributions. It's hosted on GitHub Pages and features a modern, responsive design with multiple theme options.

## Directory Structure

```
jesther-ai.github.io/
├── index.html              # Main single-page portfolio website
├── assets/                 # All static assets
│   ├── css/               # Compiled CSS files
│   │   ├── fontawesome-all.min.css
│   │   └── main.css
│   ├── js/                # JavaScript libraries and scripts
│   │   ├── breakpoints.min.js
│   │   ├── browser.min.js
│   │   ├── jquery.min.js
│   │   ├── jquery.scrolly.min.js
│   │   ├── main.js
│   │   └── util.js
│   ├── sass/              # SCSS source files
│   │   ├── base/          # Base styles
│   │   │   ├── _page.scss
│   │   │   ├── _reset.scss
│   │   │   └── _typography.scss
│   │   ├── components/    # Component styles
│   │   │   ├── _actions.scss
│   │   │   ├── _arrow.scss
│   │   │   ├── _box.scss
│   │   │   ├── _button.scss
│   │   │   ├── _feature-icons.scss
│   │   │   ├── _form.scss
│   │   │   ├── _gallery.scss
│   │   │   ├── _icon.scss
│   │   │   ├── _icons.scss
│   │   │   ├── _image.scss
│   │   │   ├── _list.scss
│   │   │   ├── _row.scss
│   │   │   └── _table.scss
│   │   ├── layout/        # Layout styles
│   │   │   └── _wrapper.scss
│   │   ├── libs/          # Library utilities
│   │   │   ├── _breakpoints.scss
│   │   │   ├── _functions.scss
│   │   │   ├── _html-grid.scss
│   │   │   ├── _mixins.scss
│   │   │   ├── _vars.scss
│   │   │   └── _vendor.scss
│   │   └── main.scss      # Main SCSS entry point
│   └── webfonts/          # Font Awesome web fonts
├── images/                 # Image assets
│   ├── gallery/           # Gallery images
│   │   ├── fulls/        # Full-size images (WebP format)
│   │   └── thumbs/       # Thumbnail images (WebP format)
│   └── [project images]   # Various project screenshots (WebP format)
└── src/                   # Source directory (currently minimal)
    └── html/             # HTML source files

```

## Technology Stack

### Frontend
- **HTML5** - Semantic markup with SEO optimization
- **CSS/SCSS** - Modular SASS architecture based on HTML5 UP's "Paradigm Shift" template
- **JavaScript** - Vanilla JS with jQuery for DOM manipulation
- **Font Awesome 5.x** - Icon library
- **Lightbox2** - Image gallery functionality

### Key Features
- **Multi-theme System** - 5 themes: Light, Dark, Ocean, Forest, Sunset
- **Responsive Design** - Mobile-first approach
- **Smooth Animations** - Intersection Observer API for scroll effects
- **WebP Images** - Optimized image format for better performance

## Key Files

### index.html
The main portfolio page containing:
- Hero section with introduction
- Skills section (categorized by Languages, Frameworks, Databases, Tooling)
- Projects section (Personal, Professional, Open Source categories)
- Gallery section with project screenshots
- Contact section

### assets/css/main.css
Compiled CSS from SCSS sources, includes:
- Custom CSS variables for theming
- Responsive grid system
- Component styles
- Animation definitions

### assets/js/main.js
Main JavaScript file handling:
- Theme switching and persistence
- Smooth scrolling
- Responsive navigation
- Intersection Observer animations

## Theme System

The site features 5 distinct themes controlled via CSS custom properties:

1. **Light Theme** (default) - Clean, bright design
2. **Dark Theme** - Dark mode with reduced eye strain
3. **Ocean Theme** - Blue color palette
4. **Forest Theme** - Green nature-inspired colors
5. **Sunset Theme** - Warm orange/pink tones

Themes are:
- Stored in localStorage for persistence
- System preference aware (prefers-color-scheme)
- Smoothly transitioned with CSS animations

## Development Notes

### Conventions
- **BEM-like CSS naming** for components (e.g., `.project-card`, `.project-title`)
- **CSS Custom Properties** for dynamic theming
- **Semantic HTML** for accessibility
- **Mobile-first** responsive design

### Performance Optimizations
- All images converted to **WebP format**
- **Critical CSS** inlined in HTML
- **Minimal dependencies** (jQuery being the main library)
- **Lazy loading** potential with Intersection Observer

### Project Categories
- **Personal Projects** - Individual side projects
- **Professional Work** - Client/company projects
- **Open Source** - Community contributions

## Asset Organization

### Images
- `/images/gallery/fulls/` - Full resolution project screenshots
- `/images/gallery/thumbs/` - Thumbnail versions for gallery
- `/images/` - Project feature images and screenshots
- All images optimized as WebP for better compression

### Fonts
- Font Awesome webfonts in multiple formats (eot, svg, ttf, woff, woff2)
- Supports brands, regular, and solid icon styles

## Build Process
This is a static website with no build process required. The SCSS files are pre-compiled to CSS. To modify styles:
1. Edit SCSS files in `/assets/sass/`
2. Compile `main.scss` to generate new `main.css`
3. No bundler or task runner currently configured

## Deployment
The site is deployed via GitHub Pages:
- Push changes to the main branch
- GitHub automatically serves the site at https://jesther-ai.github.io

## Future Enhancements
Consider adding:
- Build process for SCSS compilation
- Image optimization pipeline
- JavaScript bundling/minification
- Progressive Web App features
- Analytics integration