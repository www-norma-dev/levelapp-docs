# LevelApp Documentation

This repository contains the official documentation for LevelApp, an AI evaluation framework for continuous testing. The documentation is built using [Next.js](https://nextjs.org) and [Nextra](https://nextra.site), a documentation framework on top of Next.js.

## Documentation Structure

```
levelapp-docs/
├── pages/                      # Root content folder for Nextra
│   ├── index.mdx               # Homepage
│   ├── _meta.js                # Navigation configuration
│   ├── getting-started/        # Getting started guides
│   ├── core-concepts/          # Core concepts explanation
│   ├── evaluators/             # Documentation for evaluators
│   ├── api-reference/          # API documentation
│   ├── guides/                 # How-to guides
│   ├── examples/               # Example use cases
│   └── contributing/           # Contribution guidelines
├── public/                     # Static assets
│   ├── images/                 # Images for documentation
│   ├── diagrams/               # Architecture diagrams
│   └── assets/                 # Other assets
├── components/                 # Custom React components
├── styles/                     # CSS styles
├── theme.config.jsx            # Nextra theme configuration
├── next.config.mjs             # Next.js configuration
└── package.json                # Project dependencies
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the content by modifying files in the `pages` directory. The site auto-updates as you edit the files.

## Content Structure

Each main section is organized as follows:

### Getting Started
- Overview
- Installation
- Configuration
- First Evaluation
- Understanding Results

### Core Concepts
- Overview
- Architecture
- Test Batches
- Simulators
- Evaluators
- Scoring

### Evaluators
- Overview
- Common Input/Output Format
- OpenAI Evaluator
- IONOS Evaluator
- Custom Evaluators
- Comparison

### API Reference
- Overview
- Authentication
- Endpoints
- Error Handling
- Schemas

### Guides
- Creating Test Batches
- Running Evaluations
- Analyzing Results
- CI/CD Integration
- GitHub Action Integration
- Advanced Topics

### Examples
- Chatbot Evaluation
- RAG System Testing
- Multi-turn Conversations
- Comparative Testing

### Contributing
- Development Setup
- Code Standards
- Documentation Guidelines
- Testing Guidelines

## Deployment

The documentation site can be deployed on any platform that supports Next.js applications, such as:

- [Vercel](https://vercel.com) (recommended)
- [Netlify](https://netlify.com)
- [GitHub Pages](https://pages.github.com)

For the easiest deployment experience, we recommend using Vercel:

```bash
npm run build
# Deploy using Vercel CLI
vercel
```
