https://kubernetes.io/docs/tutorials/stateless-application/guestbook/

$ k get svc

trouver l'adresse IP de notre loadbalancer

$ curl 34.76.236.167

$ kubectl scale deployment frontend --replicas=5

#### tout nettoyer

    kubectl delete deployment -l app=redis
    kubectl delete service -l app=redis
    kubectl delete deployment -l app=guestbook
    kubectl delete service -l app=guestbook


