# KMAP Working Group Website

## Project Overview
- **URL**: https://kmapgroup.github.io
- **GitHub**: https://github.com/kmapgroup/kmapgroup.github.io
- **Template**: Allan Lab academic website template
- **Framework**: Jekyll (GitHub Pages)

## Site Structure
- **Menu**: Home, Members, Research, Publications, Events
- **KMAP**: Korean Migration And Politics Working Group
- **Affiliation**: Korea University, Department of Political Science

## Key Files
- `_config.yml` - Site configuration
- `_data/pi.yml` - Principal Investigator info (Woo Chang Kang)
- `_data/team_members.yml` - Graduate students (empty, ready for data)
- `_data/alumni.yml` - Alumni (empty, ready for data)
- `_pages/` - Main pages (home.md, members.md, research.md, publications.md, events.md)

## Technical Notes
- GitHub Pages does NOT support `jekyll-scholar` plugin
- Use only `jekyll-sitemap` plugin
- Do not use `{% bibliography %}` tags

## Session Log (2024-12-25)
- Created KMAP Working Group website using Allan Lab template
- Set up GitHub Organization: kmapgroup
- Configured menu: Home, Members, Research, Publications, Events
- Added PI information (Woo Chang Kang)
- Fixed build error: removed jekyll-scholar plugin references
- Website successfully deployed
