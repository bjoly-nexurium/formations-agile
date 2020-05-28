$  curl http://localhost:8001/api/  


$ kubectl get pods    
$ kubectl get svc    
$ kubectl get replicasets    
$ k get deployments

## on déploie encore un pod ?

Créer un fichier shell.yml, mettez y l'intégralité de [shell-demo.yml](./shell-demo.yml)
changez le name en shell-demo-FABIEN.
    
### On applique le changement

$ kubectl apply -f ./shell.yml

_on applique sur le cluster les modifications qui sont dans le shell.yml_

$ kubectl get pod shell-demo-FABIEN

$ kubectl exec -it shell-demo -- /bin/bash      

    # cd /usr/share/nginx/html
    # echo HELLO > ./index.html
    # echo "salut" > index.html
    
    # apt-get update
    # apt-get install curl
    # curl localhost
    
    
## pour runner des commandes dans des conteneurs : 

$ kubectl exec shell-demo env

    PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
    HOSTNAME=gke-cluster-formation-default-pool-2d186d41-n253
    KUBERNETES_SERVICE_PORT=443
    KUBERNETES_SERVICE_PORT_HTTPS=443
    KUBERNETES_PORT=tcp://10.40.0.1:443
    KUBERNETES_PORT_443_TCP=tcp://10.40.0.1:443
    KUBERNETES_PORT_443_TCP_PROTO=tcp
    KUBERNETES_PORT_443_TCP_PORT=443
    KUBERNETES_PORT_443_TCP_ADDR=10.40.0.1
    KUBERNETES_SERVICE_HOST=10.40.0.1
    NGINX_VERSION=1.17.10
    NJS_VERSION=0.3.9
    PKG_RELEASE=1~buster
    HOME=/root
    
    






