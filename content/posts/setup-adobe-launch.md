---
title: 'Adobe Launch Extension   - Development Setup'
date: '2019-02-02'
path: '/adobe-launch-extension-notes'
template: post
thumbnail: '../thumbnails/launch.png'
slug: playing-cctv-xvr-dav-files
categories:
  - Analytics

tags:
  - adobe-launch
  - setup
---

# Launch Extension

Adobe released Launch Extension which is the next Generation Platform for Tag management. It simplifies the workflow involved in the development, testing and deployment of tags to website. Launch Extension is a platform where multiple external third party tag services can be easily integrated through Extension Catalog Store.

# Development

The entire development and tooling for the Launch Extension uses the Web Development stack of NodeJS HTML and Javascript.

Extension Components

- Data Elements : Create new DataElements and share the data across extensions
- Rules -> Rules are at the logical core of your implementation and control the what, when, where, and how of all the tags on your site. Create a New Rule using the Events,Conditions and Actions
- Events : Click, Swipe
- Condition : Apply the Action only for specific condition. e.g A, BODY, DIV.
- Action : ShowAlert, SendAnalyticsToThirdParty

# Scaffolding a New Extension

Scaffolding cli helps developers to generate the necessary boilerplates for the events,actions and conditions. By default it includes the entries in the manifest extension.json file

```
npx @adobe/reactor-scaffold
```

# Sandbox : Local Development Environment

```
npx @adobe/reactor-sandbox
```

# Create a Build Package for uploading

```
npx @adobe/reactor-packager
```

# Uploading the package to Adobe Catalog Store

```
npx @adobe/reactor-uploader
```

# Debug from Console

```
_satellite.setDebug(true)

```

# Extension UI Them :

Adobe uses Coral Theme. While designing the extension UI forms, we can use this theme so its consistent acorss all extensions.

### Coral UI Links :

- [Adobe Coral UI](https://helpx.adobe.com/experience-manager/6-3/sites/developing/using/reference-materials/coral-ui/coralui3/styles.html)
- [Adobe Coral Components](https://helpx.adobe.com/experience-manager/6-3/sites/developing/using/reference-materials/coral-ui/coralui3/components.html)

I would like to thank @aaronhardy for his enormous contribution on the Launch Platform concepts through various videos, articles and support via slack.

### Slack Community

Join the Launch Extension slack community form here : https://docs.google.com/forms/d/e/1FAIpQLScq1m63YkDrRpvPLhzUqtfoleWiDDTTXZsSivIXRfFdlSMzpQ/viewform Slack Channel: https://launch-developers.slack.com/

Reference Links


- [Adobe Launch Walkthrough](https://www.youtube.com/watch?v=rxjtC9o4rl0)
- [Getting Started](https://webanalyticsfordevelopers.com/2017/12/05/launch-launch/)

