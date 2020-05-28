# voici les commandes de base

    kubectl get - list resources
    kubectl describe - show detailed information about a resource
    kubectl logs - print the logs from a container in a pod
    kubectl exec - execute a command on a container in a pod
    
...

$ k describe pods kubernetes-bootcamp-8dc4b977d-dthfn

    
        
    Name:           kubernetes-bootcamp-8dc4b977d-dthfn
    Namespace:      default
    Priority:       0
    Node:           gke-cluster-formation-default-pool-2d186d41-4m44/10.132.0.5
    Start Time:     Thu, 28 May 2020 18:13:24 +0200
    Labels:         app=kubernetes-bootcamp
                    pod-template-hash=8dc4b977d
    Annotations:    kubernetes.io/limit-ranger: LimitRanger plugin set: cpu request for container kubernetes-bootcamp
    Status:         Running
    IP:             10.36.0.6
    IPs:            <none>
    Controlled By:  ReplicaSet/kubernetes-bootcamp-8dc4b977d
    Containers:
      kubernetes-bootcamp:
        Container ID:   docker://67ea1454e6af0bb9623f54c2372fb73d3add56b788c5b9f3ba446b90fc84d04e
        Image:          gcr.io/google-samples/kubernetes-bootcamp:v1
        Image ID:       docker-pullable://gcr.io/google-samples/kubernetes-bootcamp@sha256:0d6b8ee63bb57c5f5b6156f446b3bc3b3c143d233037f3a2f00e279c8fcc64af
        Port:           <none>
        Host Port:      <none>
        State:          Running
          Started:      Thu, 28 May 2020 18:13:36 +0200
        Ready:          True
        Restart Count:  0
        Requests:
          cpu:        100m
        Environment:  <none>
        Mounts:
          /var/run/secrets/kubernetes.io/serviceaccount from default-token-cf5fs (ro)
    Conditions:
      Type              Status
      Initialized       True 
      Ready             True 
      ContainersReady   True 
      PodScheduled      True 
    Volumes:
      default-token-cf5fs:
        Type:        Secret (a volume populated by a Secret)
        SecretName:  default-token-cf5fs
        Optional:    false
    QoS Class:       Burstable
    Node-Selectors:  <none>
    Tolerations:     node.kubernetes.io/not-ready:NoExecute for 300s
                     node.kubernetes.io/unreachable:NoExecute for 300s
    Events:          <none>
