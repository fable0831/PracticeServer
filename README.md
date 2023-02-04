# instanceServer

FE 통신을 위한 임시 서버

- sequlize와 mysql을 이용한 db구축
- jwt 구현을 대비한 jsonwebtokn 및 bcrypt dependency 추가

### 실행방법

1. npm install
2. mysql이 활성화된 상태에서 npx sequelize db:create
3. node app => 'db 연결 성공!!!' 이 뜨면 mysql로 확인 가능
