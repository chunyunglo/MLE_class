# Maximum Likelihood Estimation (MLE) Interactive Visualization Tool

## Project Overview

This project provides an intuitive and interactive web interface designed to help students and data scientists **visually understand the core concepts of Maximum Likelihood Estimation (MLE)**.

By instantly adjusting parameters and observed data, users can experience firsthand how the likelihood function fluctuates based on data and underlying assumptions, thereby grasping the mathematical intuition behind MLE.

## Key Features

  * **Dynamic Binomial Likelihood Function:**
    The application instantly plots the likelihood function, $L(p|\text{data})$, for the Binomial distribution $\text{Binomial}(n, p)$.
  * **Interactive Parameter Adjustment:**
      * **Successes ($k$) and Trials ($n$):** Adjust the observed data using sliders or input fields.
      * **Likelihood Parameter ($p$):** Observe how the probability of the current data (the likelihood value) changes as the parameter $p$ is varied.
  * **MLE Value Indication:**
    The chart automatically highlights the peak of the likelihood function, visually indicating the Maximum Likelihood Estimate ($p_{MLE}$) for the given observations.
  * **Build Mathematical Intuition:** The visualization helps users understand why MLE identifies the parameter value that is "most likely to have produced the observed data."

## Live Demo

Click the link below to immediately access the interactive tool:

**[View Live Site (GitHub Pages Deployment)](https://chunyunglo.github.io/MLE_class/)**

-----

## Development and Deployment Guide

### 1\. Local Setup

To clone and run the project locally:

```bash
# Clone the repository
git clone https://github.com/chunyunglo/MLE_class.git
cd MLE_class
```

### 2\. Install Dependencies

Install the required packages:

```bash
npm install
# or
# yarn install
```

### 3\. Run Locally

The application will start on `http://localhost:5173`.

```bash
npm run dev
```

### 4\. GitHub Pages Deployment

The application is configured for automated deployment to GitHub Pages using the `gh-pages` package.

To update the live site after making changes:

```bash
# Ensure your changes are committed to the main branch first
npm run deploy 
```

This command runs the build process and pushes the static assets to the `gh-pages` branch for publishing.

-----
