# install environment

install gcloud : 


https://cloud.google.com/sdk/docs/quickstarts



Install kubectl

https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl-on-linux


#### pour linux 
$ curl -LO https://storage.googleapis.com/kubernetes-release/release/`curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt`/bin/linux/amd64/kubectl

##pour tester : 

$ kubectl version --client

## pour dire à kubectl de se connecter au cluster google cloud

https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-access-for-kubectl


$ kubectl get nodes

_pour récupérer les noeuds, vous devriez en voir 3 s'afficher_

$ kubectl cluster-info

_pour récupérer des infos de cluster_





