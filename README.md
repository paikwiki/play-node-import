# Node의 import 방식에 따른 번들 사이즈 비교

## 결과

namespace import 방식이 named import 방식에 비해 약 6.95배 크기

```sh
$ yarn start
yarn run v1.22.19
$ node dist/index.js
./dist/index-namespace-import.js        1196
./dist/index-named-import.js            172
```

성능 영향은?

named 방식은 아래처럼 `Ramda`를 가져온다.

```js
const ramda_1 = require("ramda");
```

반면 namespace 방식은 아래처럼 가져온다.

```js
const R = __importStar(require("ramda"));
```

`__importStar`은 ES6 모듈을 CommonJS 모듈로 변환하기 위해 타입스크립트 컴파일러가 생성해준 함수로, 객체의 모든 속성을 바인딩 하는 동작을 수행한다. 결국 두 방식 모두 `require("ramda")`를 호출하는 것은 동일하나, namespace 방식은 모든 속성을 바인딩하는 추가적인 로직이 실행된다는 차이가 있다.

라이브러리의 크기가 크다면, 이 import 방식이 함수의 수행 시간에 차이를 만들 수 있다. 단, "크다면"이 어느 정도인지 좀더 엄밀히 따져볼 필요는 있다.
