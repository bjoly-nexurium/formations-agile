>Les ConfigMaps lient les fichiers de configuration, les arguments de ligne de commande, les variables d'environnement, les numéros de port et d'autres artefacts de configuration aux conteneurs et aux composants système des pods au moment de l'exécution. Grâce aux ConfigMaps, vous pouvez séparer les configurations des pods et des composants, et préserver ainsi la portabilité des charges de travail. Cela facilite la modification et la gestion de leurs configurations, et évite le codage en dur des données de configuration dans les spécifications des pods.

>Les ConfigMaps sont utiles pour stocker et partager des informations de configuration non chiffrées et non sensibles. Pour utiliser des informations sensibles dans les clusters, vous devez vous servir de secrets.
>


__ y a des commandes pour générer une config map à partir d'un fichier de propriété__

    $ kubectl create configmap game-config --from-file=game.properties
    
    
...
    
    $k get cm
    
    
...

    k describe cm game-config         
    
...



$ kubectl create configmap special-config --from-literal=special.how=very


$ k create -f pod-utilisant-uneconfig-map.yaml    


$ k logs dapi-test-pod