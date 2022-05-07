# postgresql 

$docker volume list
$ docker volume inspect db-volume
[
    {
        "CreatedAt": "2022-04-17T02:52:00Z",
        "Driver": "local",
        "Labels": null,
        "Mountpoint": "/var/lib/docker/volumes/db-volume/_data",
        "Name": "db-volume",  <- 만든 볼륨이름
        "Options": null,
        "Scope": "local"
    }
]

$ docker run -p 5432:5432 --name postgres -e POSTGRES_PASSWORD=1q2w3e4r -d postgres
$ docker ps -a
$ winpty docker exec -it postgres bash
$ docker stop postgres
$ docker rm postgres.   <- 컨테이너 삭제해보기

——————— docker 볼륨을 사용해서 로컬에 저장하기 
~ mkdir pgdata
$ docker run -p 5432:5432 --name postgres -e POSTGRES_PASSWORD=nagari -d -v pgdata:/var/lib/postgresql/data postgres 

hm.. 오라클할때는 아래처럼 볼륨만들고 
 -v db-volume:/usr/local/man

$ winpty docker exec -it postgres bash
> psql -U postgres
> CREATE USER HOG PASSWORD  ‘nagari’  SUPERUSER;
> CREATE DATABASE jk OWNER HOG;
> SELECT * FROM PG_USER


# node postgresql


다음은 
노드 로그 관리 - 아이패드 크롬에서 보면 된당
https://m.youtube.com/watch?v=S0HI5DDCBBs&list=PLqbWuGdVBJd0oHdwp9y9NsTTQbUuEPNyY&index=3



etc 
git 설정 
git config --global alias.st status 
