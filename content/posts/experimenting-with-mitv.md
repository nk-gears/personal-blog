---
title: 'Experimenting with MiTV'
date: '2019-06-22'
path: '/experimenting-with-mitv'
template: post
thumbnail: '../thumbnails/mitv.png'
categories:
  - Experiments
  - Popular
tags:
  - xiaomi
  - tv
---

# Experimenting with MiTV

Last Edited: Jun 22, 2019 4:27 PM

Watching TV doesn't interests me. May be being in the field of Software Development, I feel i should have the control of what i want to watch than watching something telecasted on the TV. We have been using a OLD CRT TV for a long time and i had no plans to switch to LED or SmartTV. Last year around September 2018, , i have being looking for a LED Tv to consume courses, tutorials and Ted Talks from Online sources like Youtube. When XIAOMI Introduced the MITV, my attention went to the 43 Inch MiTV 4A Model and thought that will be a good for consuming Courses and Video Tutorials.

Xiaomi, one of the largest brand got their products to reach most of the users in India and i was also one of their customer with Mi Devices.. Primarily i recommend most of my relative s and neighbours to go wth the Mi Devices due to its simplicity, elegant and durability and of course the cost.

So far, i have purchased around 5 RedMi Mobile devices for my family and friends. One of the device which i bought for my famly earlier is the Redmi 3S which i bought 5 years back and it still working flawlessly with the same performance. With this goodwill with Xiaomi, i have decided to go with MiTv 4A 43. This is the first generation TV and to my surprise after 20 days the have released a second generation of Tv with some upgraded hardware which supports chromecast and voice over remote.

The first Gen TV was promised that the Oreo Update will be released early 2019. I was closely watching the Reviews and Updates from Tech Singh. And till now there is no official update on the Launch. One of the video from tech Singh was a eye opener that should i really need an update instead of living with what i have. Currently, I was happy with the Old Firmware of MiTV 1st generation and using this effectively. This is the living document of all my experiments with MiTV and using them productively. 

Installing .apk files

- Using USB Drive Port
- Using Shared Network Drive Folder
- Using MiRemote App (Local .apk file from Mobile folder)

Remotely Control using API ( IPAddress:6095)

- [http://mireco.hopto.org/](http://mireco.hopto.org/) - Web based remote App
- Custom Python Script to control [https://github.com/simse/pymitv](https://github.com/simse/pymitv)
- Remote API Controller : Supported API

    Sample Usage :

    http://<IPADDRESS:6095>/[controller?action=keyevent&keycode=home](http://192.168.1.4:6095/controller?action=keyevent&keycode=home)

    For more details, Please refer the GitHub source : [https://github.com/spocky/mireco](https://github.com/spocky/mireco)

Youtube

- Native Youtube Player
- Google's Youtube Player
- Smart Youtube Player - Open Source apk (Supports Quality and Speed Selection)

Media Casting 

- Native Casting - Miracast
- Cast from Mobile Youtube App (Cast Icon)
- Cast using AirScreen (Supports Airplay, Chromecast + Audio & Video)
- Cast any Video Source using [https://chromecast.link/](https://chromecast.link/)

Side Project Experimentation :

Working on a experiment to play favourite videos for my Mother when i a not there in the home.

Workflow

- Create a Playlist of Videos (which are favourites of my Mother) and save them to Youtube Playlist
- Create a Simple App to open a URI Scheme passed. This App will pull the favourite playlist from the Web
- Call the Smart Youtube App by passing the Playlist Name using URI Scheme
- Play them whenever she gives me a missed call to my Phone than 2 times. (Provided the TV is Switched On)

Reviews, Hacks on MiTV

Checkout TechSingh excellent youtube videos on MiTV hacks and reviews across all models released in India.

[10 Must have APPS on Mi TV 4/ 4A & ANDROID TV](https://www.youtube.com/watch?v=KwWYVRq-VM8&list=PLpyclvkvYfZa0JU-tEcTvbfjPxJULtpkt)