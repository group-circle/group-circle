# group-circle

아래 문서는 mac os 기준으로 작성됨

# 개발환경 버전

node : v8.11.3
npm : 5.6.0
express : 4.16.0

# Getting start

## install node

1. Enter https://nodejs.org/ko/ and download node 8.11.3 LTS
2. install webpack

- npm install webpack webpack-cli --save-dev
- npm install babel-core babel-loader babel-preset-es2015 --save-dev

## 키 설정

1. https://console.firebase.google.com/project/group-circle/settings/serviceaccounts/adminsdk 에서 새 비공개 키 설정 클릭
2. 생성한 키를 resource/serviceAccountKey.json 으로 추가

해당 키는 깃헙에 올리시면 안됩니다.

## build

~~~shell
cd group-circle
npm install
npm run dev
~~~

