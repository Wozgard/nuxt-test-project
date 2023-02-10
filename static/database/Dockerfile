FROM mongo
COPY . /data
RUN mongoimport --jsonArray "/data/team.json" -d shoart -c team
EXPOSE 9000