>Un objet StatefulSet représente un ensemble de pods dotés d'identités uniques persistantes et de noms d'hôtes stables que K8S conserve, quel que soit l'endroit où ils sont planifiés. Les informations d'état et autres données résilientes relatives à un pod d'un objet StatefulSet donné sont conservées dans un stockage sur disque persistant associé à l'objet StatefulSet.



$ kubectl apply -f .   

__pour apply tous les fichiers de config du répertoire courant__
__attention le fichier est pas fonctionnel en l'état_

> Où :

* statefulset-name est le nom de l'objet StatefulSet.
* service-name est le nom du Service.
* app-name est le nom de l'application exécutée dans les pods.
* container-name est le nom des conteneurs dans les pods.
* port-name est le nom du port ouvert par l'objet StatefulSet.
* pvc-name est le nom de l'objet PersistentVolumeClaim.

Dans ce fichier, le champ kind indique qu'un objet StatefulSet doit être créé avec les spécifications définies dans le fichier. Cet exemple d'objet StatefulSet génère trois pods répliqués et ouvre le port 80 pour exposer l'objet StatefulSet à Internet.