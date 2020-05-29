#Comment sauvegarder/partager nos volumes ?




# comment on push des images dans le registry docker


$ gcloud auth configure-docker       


$ docket tag phpapp:123 gcr.io/minecraft-273116/tp1_appphp:latest

(ici, phpapp:123 est l'image d'hier)

minecraft-273 est le nom du projet; et on lui donne le nom qu'on veut

$ docker push gcr.io/minecraft-273116/tp1_appphp

