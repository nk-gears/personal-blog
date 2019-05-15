---
title: 'Setup SSL Process'
date: '2019-01-15'
path: '/ssl-setup-process'
---

Installing SSL in a server involves generating the CSR file getting the certificate by uploading the CSR file to the SSL Vendor

In this post i will share how to setup SSL using comodo SSL certificate.

unzip ss.com.zip

cat domainName.crt COMODORSADomainValidationSecureServerCA.crt COMODO RSAAddTrustCA.crt AddTrustExternalCARoot.crt > ssl-bundle.crt
