https://cloud.google.com/kubernetes-engine/docs/concepts/service?hl=fr


##Service

>Cette page décrit les services Kubernetes et leur utilisation dans Google Kubernetes Engine. Pour apprendre à créer un service, consultez la page Exposer des applications à l'aide de services.
Qu'est-ce qu'un service ?

>Dans l'idée, un service consiste à regrouper un ensemble de points de terminaison de pods dans une seule ressource. Vous pouvez configurer différents types d'accès à ce regroupement. Par défaut, vous obtenez une adresse IP de cluster stable que les clients du cluster peuvent utiliser afin de contacter les pods du service. Un client envoie une requête à l'adresse IP stable, et la requête est acheminée vers l'un des pods du service.

>Un service identifie ses pods membres à l'aide d'un sélecteur. Pour qu'un pod soit membre du service, il doit comporter tous les libellés spécifiés dans le sélecteur. Un libellé est une paire clé/valeur arbitraire associée à un objet.

>Le fichier manifeste du service ci-dessous a un sélecteur qui spécifie deux libellés. Le champ selector indique que tous les pods comportant les libellés app: metrics et department:engineering sont membres de ce service.
>



Types de services

Il existe cinq types de services :

    ClusterIP (valeur par défaut) : les clients internes envoient des requêtes à une adresse IP interne stable.

    NodePort : les clients envoient des requêtes à l'adresse IP d'un nœud sur une ou plusieurs valeurs nodePort spécifiées par le service.

    LoadBalancer : les clients envoient des requêtes à l'adresse IP d'un équilibreur de charge réseau.

    ExternalName : les clients internes utilisent le nom DNS d'un service comme alias pour un nom DNS externe.

    Sans adresse IP de cluster : un service sans adresse IP de cluster vous permet de regrouper des pods sans disposer d'une adresse IP stable.



$ k apply -f .

$ k get svc my-nginx

$ kubectl describe svc my-nginx


$ kubectl run -i --tty busybox --image=busybox -- sh  # Run pod as interactive shell

__run un conteneur busybox avec un shell interactif dans notre cluster__

    \# wget -qO- 10.40.0.152:80    
    \# nslookup my-nginx