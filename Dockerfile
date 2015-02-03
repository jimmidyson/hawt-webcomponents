FROM jimmidyson/k8s-proxy:latest
MAINTAINER Jimmi Dyson <jimmidyson@gmail.com>

ADD dist /hawtio

CMD ["--insecure", "-w", "/hawtio/"]
