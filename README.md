# react-typescript-boilerplate
Boilerplate for React project with TypeScript

### 에러가 발생한다면..

npm install을 정상적으로 했는데도 lint가 적용되지 않고 cannot find eslint-plugin-react(혹은 import, jsx-a11y) 에러가 발생한다면 vscode setting.json에 
```
"eslint.workingDirectories": [
    { "mode": "auto" }
],
```
를 추가해주시면 해결될 수 있습니다. 더 근본적인 해결책을 찾게되면 업데이트하겠습니다.
