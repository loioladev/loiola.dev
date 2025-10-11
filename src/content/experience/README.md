# Experience Content Collection

This folder contains your work experience entries in Markdown format.

## Adding a New Experience

Create a new `.md` file in this directory with the following structure:

```markdown
---
title: "Your Job Title"
company: "Company Name"
period: "Start Date - End Date (or Present)"
order: 1
---

First paragraph describing your role and responsibilities.

Second paragraph with additional achievements or details.

You can add as many paragraphs as needed.
```

## Frontmatter Fields

- **title**: Your job title or role
- **company**: The company or organization name
- **period**: The time period you worked there (e.g., "June 2022 - December 2022")
- **order**: A number to control the display order (1 = first/most recent, 2 = second, etc.)

## Example

See the existing files (`ml-engineer.md`, `software-intern.md`, etc.) for examples.

## How It Works

The `experience.astro` page automatically:
1. Reads all `.md` files from this directory
2. Sorts them by the `order` field
3. Renders them in the timeline view

No need to manually edit the experience page - just add or update your markdown files!
