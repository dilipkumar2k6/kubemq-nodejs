# Install kubectl binary
```
brew install kubectl
```
# Install minikube binary
```
brew install minikube
```
# Install Virtualbox
# Start minikube
```
minikube start --vm-driver=virtualbox
```
# Install Helm
```
brew install helm
```
# Install Kubemq
```
helm repo add kubemq-charts  https://kubemq-io.github.io/charts
helm install kubemq-cluster --set token={your kubemq token} kubemq-charts/kubemq 
```