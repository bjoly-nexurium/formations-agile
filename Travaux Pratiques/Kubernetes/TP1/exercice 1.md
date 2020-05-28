Premier déploiement d'une app


$ kubectl create deployment kubernetes-bootcamp-FABIEN --image=gcr.io/google-samples/kubernetes-bootcamp:v1

_ remplacez FABIEN par votre prénom_

$ kubectl get deployments

$ kubectl get pods


## on va faire un proxy sur le cloud

$ kubectl proxy

$ curl localhost:8001/version

_à changer par le port de votre proxy_

### récupérons le nom de notre pod 

    $ export POD_NAME=$(kubectl get pods -o go-template --template '{{range .items}}{{.metadata.name}}{{"\n"}}{{end}}')
    $ echo Name of the Pod: $POD_NAME

    $  curl http://localhost:8001/api/v1/namespaces/default/pods/kubernetes-bootcamp-FABIEN-8dc4b977d-dthfn


