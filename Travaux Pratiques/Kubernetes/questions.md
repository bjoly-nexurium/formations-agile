#Comment sauvegarder/partager nos volumes ?

Il n'y a pas de manière intégrée de déplacer des volumes docker


Donc on fait 

imaginons que t'aies un conteneur qui utilise le volume datastore

$ docker volume inspect Datastore 

    [
        {
            "CreatedAt": "2020-05-29T15:24:08+02:00",
            "Driver": "local",
            "Labels": {},
            "Mountpoint": "/var/lib/docker/volumes/Datastore/_data",
            "Name": "Datastore",
            "Options": {},
            "Scope": "local"
        }
    ]
     
on stoppe le conteneur : 

$ docker stop myphp


Puis on compresse:

>$docker run --rm --volumes-from myphp -v ~/backup:/backup ubuntu bash -c “cd /data/content && tar cvf /backup/datastore.tar .”



# comment on push des images dans le registry docker


$ gcloud auth configure-docker       


$ docket tag phpapp:123 gcr.io/minecraft-273116/tp1_appphp:latest

(ici, phpapp:123 est l'image d'hier)

minecraft-273 est le nom du projet; et on lui donne le nom qu'on veut

$ docker push gcr.io/minecraft-273116/tp1_appphp

