---
title: 'Docker Commands'
date: '2019-01-15'
path: '/docker-commands'
---

docker logs <container-ID-or-name>

docker exec -it <container-ID-or-name> bash

Docker Images

Docker Reverse Image
Image Name : assaflavie/runlike

Usage : docker run --rm -v /var/run/docker.sock:/var/run/docker.sock assaflavie/runlike cf8

docker build -t gcr.io/{Project Id}/{App Id}:$USER .
gcloud docker -- push gcr.io/{Project Id}/{App Id}:$USER
gcloud app deploy — no-promote — image-url gcr.io/{Project Id}/{App Id}:\$USER

.dockerignore file
List all files and directories that should be ignored when building, mine has:

Reference Links :
https://lugassy.net/accelerate-optimize-your-google-app-engine-deployments-9358414f80f6
