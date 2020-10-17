---
title: 'Reset Password on AWS EC2 Windows Instance without a Keypair'
date: '2020-10-16'
path: '/reset-password-aws-ec2-windows-without-key'
template: post
thumbnail: '../thumbnails/aws-unlock-ec2-windows.png'
slug: reset-password-aws-ec2-windows-without-key
categories:
  - eureka

---

In one of our Project, we lost the key pair which we used for the creation of Windows EC2 Instance. Without this we were unable to recover the password at its encrypted. The only way is to create a new instance using the existing AMI Image and login to the Instance.

Alternatively, we can reset the password using the AWS Systems Manager which provides a back door way to access the window

With this one line command we were able to unlock/reset our server password.

```
net user administrator <new-password>
```

