FROM jimmidyson/k8s-proxy:latest

MAINTAINER Jimmi Dyson <jimmidyson@gmail.com>

ADD dist /site/

CMD ["-w", "/site", "--404=/index.html"]
