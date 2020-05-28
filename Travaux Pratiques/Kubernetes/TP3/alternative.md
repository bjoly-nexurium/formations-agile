Runner un autre service : 

$ kubectl run node-hello --image=gcr.io/google-samples/node-hello:1.0 --port=8080

kubectl run \<nom du pod> --image=\<source de l'image> --port=\<port>