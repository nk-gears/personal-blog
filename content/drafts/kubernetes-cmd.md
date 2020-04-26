Apr 1 2020 : Frazer Kubernetes 



Then i will delete the OLD Disk. 
What i did : 

- Created a new 20GB Disk
- Copied the old data of 10GB to this
- Attached the new Disk to the Server
- Need to delete the OLD Disk once you confim

```shell
kubectl exec -it my-pod --container main-app -- /bin/bash
```

- Get the PVC Claim Storage
- kubectl -n default exec warehouse-978d9dc75-tdlsv df
-  gcloud container clusters get-credentials warehouse --zone us-central1-a --project sapient-ground-134123  && kubectl exec warehouse-978d9dc75-bbmml -c warehouse -- ls

kubectl exec -it warehouse-5546ccbcf-wg9q5 -- /bin/bash

```
kubectl patch deployment warehouse -p '{ "spec": { "replicas": 0 }}'
```

```
kubectl patch pvc warehouse-pv-claim -p '{ "spec": { "resources": { "requests": { "storage": "15Gi" }}}}'
```

```
kubectl describe pvc warehouse-pv-claim
```

```
kubectl patch deployment warehouse -p '{ "spec": { "replicas": 1 }}'
```

kubectl patch sc fast -p '{"allowVolumeExpansion": true}'