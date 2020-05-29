# kubectl apply est idempotent

On déploit une application purement stateless

$ kubectl apply -f config.yml (changer le nom du deployment avec votre prénom)

 $ kubectl describe deployment nginx-deployment-FABIEN
 
 
$  kubectl get pods -l app=nginx
 
 __affiche moi tous les pods qui ont le label app=nginx__
 
 
 ##mettez à jour votre fichier de config : 
 
    apiVersion: apps/v1 # for versions before 1.9.0 use apps/v1beta2
    kind: Deployment
    metadata:
      name: nginx-deployment
    spec:
      selector:
        matchLabels:
          app: nginx
      replicas: 2
      template:
        metadata:
          labels:
            app: nginx
        spec:
          containers:
          - name: nginx
            image: nginx:1.16.1 # CETTE LIGNE LA A CHANGE
            ports:
            - containerPort: 80

 $ kubectl apply....
 
 $ watch kubectl get pods -l app=nginx
 
 ou 
 
 $ kubectl get -w pods
 
 
 ### changez le nombre de réplicats :
 
 
 par exemple replica = 5
 
 $  kubectl get -w pods -l app=nginx
 
 ## on nettoie tout 
 
 
 $ kubectl delete pods -l app=nginx -l origin=fabien
 
 __ ça delete tous les pods que j'ai__
 
 
...


...


...


...


...

...

#### wait ?


il faut delete de deploymentset : 

$ kubectl delete deployment nginx-deployment
 
 
 
