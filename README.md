# Node의 import 방식에 따른 번들 사이즈 비교

이 리포지토리는 [`Ramda`](https://ramdajs.com/) 라이브러리를 네임스페이스(namespace) 방식으로 import하는 경우와, 하나의 메서드(`multiply`)만 import 했을 때를 비교해서 번들 사이즈와 로직의 차이를 살펴보기 위해 생성했습니다.

## 번들 사이즈

namespace import 방식이 named import 방식에 비해 약 6.95배 크기

```sh
$ yarn start
yarn run v1.22.19
$ node dist/index.js
./dist/index-namespace-import.js        1196
./dist/index-named-import.js            172
```

## 성능 영향은?

트랜스파일한 자바스크립트 코드를 살펴보면, named 방식에서는 아래처럼 `Ramda`를 가져온다.

```js
// ./dist/index-namespace-import.js
const ramda_1 = require("ramda");
```

반면 namespace 방식은 아래처럼 가져온다.

```js
// ./dist/index-named-import.js
const R = __importStar(require("ramda"));
```

`__importStar`은 ES6 모듈을 CommonJS 모듈로 변환하기 위해 타입스크립트 컴파일러가 생성해준 함수로, 객체의 모든 속성을 바인딩 하는 동작을 수행한다. 결국 두 방식 모두 `require("ramda")`를 호출하는 것은 동일하나, namespace 방식은 모든 속성을 바인딩하는 추가적인 로직이 실행된다는 차이가 있다.

라이브러리의 크기가 크다면, 이 import 방식이 함수의 수행 시간에 차이를 만들 수 있다. 단, "크다면"이 어느 정도인지 좀더 엄밀히 따져볼 필요는 있다.
