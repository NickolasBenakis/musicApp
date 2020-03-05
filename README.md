# simpleMusic

<p align="center">
  <img width="128" height="128" src="https://res.cloudinary.com/nickolasben/image/upload/v1583446773/music/gjkicgawjijo34ofwezw.png">
</p>

## Table of Contents

- [Intro](#intro)
- [Install](#install)
- [Build](#build)
- [Deploy](#deploy)
- [Run](#run)
- [Optimizations](#Optimizations)

## Intro

Production built is deployed : https://simplemusic.surge.sh/

simpleMusic is a single page application that updates users.
It is built in React with hooks and Context Api.[React.js](https://reactjs.org/).

## Features

- Built with bundler (create-react-app)
- Mobile-first design
- MediaPlayer
- Persist state on refresh

## Install

To install, `cd` to project root and run:

```
$ npm install
```

## Build

To build for production, `cd` to project root and run:

```
$ npm run build
```

## Run

To run the app in development, `cd` to project root and run:

```
$ npm start
```

## Deploy

Deploy this application with

```
$ npm run deploy
```

### Optimizations

A few optimizations have been implemented to help improve the performance of the app, including:

- Global State with React Hooks ,Context Api with redux pattern [Action,Reducer,State].
- React.memo and useMemo for Optimal re-rendering
