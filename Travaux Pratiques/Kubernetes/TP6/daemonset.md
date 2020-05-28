>Comme d'autres objets de charge de travail, les objets DaemonSet gèrent des groupes de pods répliqués. Cependant, les objets DaemonSets tentent de se conformer à un modèle "un pod par nœud", sur l'ensemble du cluster ou sur un sous-ensemble de nœuds. Lorsque vous ajoutez des nœuds à un pool de nœuds, les objets DaemonSet ajoutent automatiquement des pods aux nouveaux nœuds suivant les besoins.

>Le DaemonSet utilise un modèle de pod, qui contient une spécification pour ses pods. La spécification de pod détermine la configuration de chaque pod : quelles applications doivent s'exécuter dans ses conteneurs, quels volumes il doit installer, ses libellés et ses sélecteurs, etc.

>Les pods DaemonSet sont soumis aux mêmes règles de priorité que les autres pods. Les pods DaemonSet respectent les rejets et les tolérances. mais il présentent certaines tolérances implicites.
Schémas d'utilisation

>Les DaemonSets sont utiles pour déployer des tâches continues d'arrière-plan, que vous devez exécuter sur tous les nœuds ou sur certains nœuds seulement, et qui ne nécessitent aucune intervention de l'utilisateur. Ces tâches incluent par exemple les daemons de stockage tels que ceph, les daemons de collecte de journaux tels que fluentd et les daemons de surveillance de nœuds tels que collectd.

>Par exemple, vous pouvez avoir des DaemonSets pour chaque type de daemon à exécuter sur l'ensemble de vos nœuds. Vous pouvez également exécuter plusieurs DaemonSets pour un seul type de daemon, mais en leur faisant utiliser des configurations distinctes pour différents types de matériel et besoins en ressources.
>
>
>