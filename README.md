<p align="center">
  <img src="./public/assets/news.svg" alt="KaiOS News" width="125" />
</p>

<div align="center">

![stability-wip](https://img.shields.io/badge/stability-work_in_progress-lightgrey.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

</div>

# NextJS News App

A News App built using NextJS, utilizing [Guardian API](https://open-platform.theguardian.com/) to fetch the article data.

> **NOTE:** This is ***not*** an official website, just for experiment purpose.

## User Stories

- [ ] The user can browse the latest news from the Guardian API and see the articles collated together.
- [ ] The user can sort all news based on their sorting strategy (`Newest First` or `Oldest First`).
- [ ] Allow users to search for articles by entering a search term.
- [ ] Progressively load more articles by scrolling down the list.

## App Details


### Instructions

1. Clone the project repository: `git clone git@github.com:ytliuSVN/next-news-app.git`
2. Navigate to the project folder: `cd next-news-app`
3. Install the dependencies: `npm install`
4. Start the app in the development mode: `npm run dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Loading Environment Variables

Copy and setup environment. An example `.env.local`:

```
GUARDIAN_API_KEY=
GUARDIAN_API_URL=https://content.guardianapis.com/
```