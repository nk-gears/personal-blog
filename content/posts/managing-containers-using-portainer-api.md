---
title: 'Managing containers using Portainer API'
date: '2019-01-31'
path: '/managing-containers-using-portainer-api'
template: post
thumbnail: '../thumbnails/portainer.png'
slug: portainer
categories:
  - Container
  - Popular
tags:
  - docker
  - management
---
[Portainer](https://www.portainer.io) provides a sleek interface to swift through Docker environments It allows you to manage your containers, images, networks and volumes. Portainer itself will run in another container of your docker environment.

Setting up a Portainer

```
sudo mkdir /data
sudo mkdir /data/portainer_data

docker run -d -p 9000:9000 --name portainer --restart always -v /var/run/docker.sock:/var/run/docker.sock -v /data/portainer_data:/data portainer/portainer

```

# Image Registry

Portainer, is not restricted to just docker registry hub. It can talk to any image registry which follows the image registry protocol definition. I have been primarily using the Google Cloud registry and with few Auth configuration, i can able to connect to gcr.io to pull and push images.

# Web Interface & API

The web interface provides ui to quickly create and manage the images and containers. Portainer also exposes REST Api to acheive the same through which any one can automate the container infrastructure provisioning.

API End Points

## Get Auth Token

POST /api/auth

Sample Usage

```
curl -X POST http://192.168.1.6:9000/api/auth --data '{"username":"port-admin","password":""}'
```

## Create Image

POST /api/endpoints/1/docker/images/create?fromImage=IMAGE_NAME&tag=TAG_NAME

```
POST :9000/api/endpoints/1/docker/containers/create \ "Authorization: Bearer <TOKEN>" \ name=="web01" Image="nginx:latest" \ ExposedPorts:='{ "80/tcp": {} }' \ HostConfig:='{ "PortBindings": { "80/tcp": [{ "HostPort": "8080" }] } }'

```

## Create Container

POST /api/endpoints/1/docker/containers/create?name=CONT_NAME

## Start a Container

POST /api/endpoints/1/docker/containers/CONT_ID/start

## Stop a Container

POST /api/endpoints/1/docker/containers/CONT_ID/stop

## Remove a Container

DELETE /api/endpoints/1/docker/containers/CONT_ID?force=true&v=1

Reference Links :

- https://gist.github.com/deviantony/77026d402366b4b43fa5918d41bc42f8
