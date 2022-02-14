# wanted_pre_onboarding

CSS를 위해 아래의 패키지를 사용했습니다.

- styled-components
- styled-reset

## Toggle

- 구현 방법과 이유

  이전에도 개인적으로 구현해 본 기능이고, checkbox의 선택/해제가 스위치 on/off와 서로 대응되는 기능이라고 생각했기 때문에 input checkbox를 사용해 토글 버튼을 구현했습니다.

  내부의 원과 배경은 CSS 가상 요소를 사용했습니다.
  요소에 접근하거나 이벤트를 등록하는 등의 별다른 조작이 필요없고 단순히 CSS로만 처리할 수 있는 내용이라 생각했기 때문에 그렇게 구현했습니다.

- 어려웠던 점과 해결 방법

  이전에도 구현해 본 기능이기 때문에 별다른 어려움은 없었습니다.

- 실행 방법

  토글 버튼을 클릭하거나, 아래의 'Toggle Switch ON/OFF' 버튼을 클릭해 ON/OFF 상태로 변경할 수 있습니다.

- 참고
  - [React + styled-components 재사용 Toggle 버튼 - 우당탕탕 개발](https://oizys.tistory.com/69)

## Modal

- 구현 방법과 이유

  토글 버튼에서는 변경되는 ON/OFF 상태를 단순히 보여주었지만 모달의 경우 모달창의 show/hidden 상태에 따라 화면에 렌더링을 하거나/하지않는 방식으로 구현했습니다.

  모달을 닫는 기능의 경우, 닫는 버튼과 모달창 내부가 아닌 배경 부분을 클릭 했을 때 이벤트가 발생해야하기 때문에 `event.target`과 `event.currentTarget`이 일치하는지 비교했습니다.

  특히 닫는 버튼에서는 문제가 되지 않지만, 모달창 내부가 아닌 배경을 클릭했을 경우 HTML 구조상 배경이 되는 요소 내부에 모달창인 요소가 존재하는데, 모달창 내부를 클릭하면 이벤트 버블링 현상으로 배경 부분에 등록된 `click` 이벤트가 실행되기 때문에 창이 닫히게 됩니다. 따라서 현재 클릭한 요소가 배경 부분인지 모달창 내부인지를 구분하기 위해 `event.target`과 `event.currentTarget`을 비교했습니다.

- 어려웠던 점과 해결 방법

  Modal 역시 개인적으로 구현해 본 경험이 있는 기능이기 때문에 별다른 어려움은 없었습니다.

- 실행 방법

  `Open Modal` 버튼을 클릭하면 모달창이 뜨고, `❌`버튼 또는 모달창 외부의 반투명한 검은 배경 부분을 클릭하면 모달창이 닫힙니다.

- 참고
  - [React에서 Modal창 만들기 - 개발, 계발](https://dkmqflx.github.io/frontend/2021/04/26/react-modal-close/)

## Tab

- 구현 방법과 이유

  각 탭을 선택했을 때 활성화되는 tab의 index를 알면 되겠다고 생각했고, 이 때 각 탭의 컨텐츠가 index를 그대로 보여주는게 아니기 때문에 아래와 같은 객체를 생성해 `key`와 `value`를 사용했습니다.

  ```js
  const tabContent = {
    0: "ONE",
    1: "TWO",
    2: "THREE",
  };
  ```

  `Object.keys(tabContent)`를 사용해 객체의 `key`로 이루어진 배열을 `map`으로 순회하며 `click` 이벤트가 발생할 때마다 각 요소의 `index`와 클릭한 요소의 `index`를 비교해 일치하는 경우 해당 요소가 활성화 되었다고 판단해 CSS와 하단의 컨텐츠를 그려내는 방식으로 구현했습니다.

- 어려웠던 점과 해결 방법

  Tab 역시 개인적으로 구현해 본 경험이 있는 기능이기 때문에 별다른 어려움은 없었습니다.

  해당 과제에서는 구현하지 않았지만, 실제 웹사이트의 경우라면 탭을 선택하면 URL에 쿼리스트링을 추가하고 그에 따른 컨텐츠를 가져와 그려내는 방식으로 구현했을 것 같습니다.

- 실행 방법

  각 Tab을 클릭하면 해당 탭이 활성화되며 해당된 탭의 컨텐츠를 하단에 보여줍니다.

## Tag

- 구현 방법과 이유

  `input`처럼 보이는 wrapper 요소를 만들고 내부에 추가된 tag를 보여주는 list와 입력을 위한 `input`을 렌더링하는 방식으로 구현했습니다.

  더불어 입력을 위해 wrapper를 클릭하더라도 `input`으로 포커스가 가도록 `click` 이벤트 처리를 했고, wrapper 자체를 `input`으로 보이도록 만들었기 때문에 `input`이 포커스 되면 wrapper에 포커스가 올라간 것처럼 CSS를 적용했습니다.

- 어려웠던 점과 해결 방법

  처음에는 `input` 내부에 어떻게 tag들을 보여줄 수 있는지 고민했지만 잘못된 방향이라는 걸 알았고 적당한 아이디어가 떠오르지 않았는데, 프로그래머스에서 이력서를 작성할 때 해당 기능이 있었던걸 기억해 해당 내용을 참고했습니다.

  개발자 도구로 확인해 본 결과, `input`처럼 보이도록 CSS를 적용한 list라는걸 알고 이 방법을 적용했습니다.

  다른 어려웠던 점으로는 wrapper가 `input`처럼 보여지고 있기 때문에, 내부의 `input`이 포커스 되어도 wrapper가 포커스 된 것처럼 처리를 해야했는데, `focus-within`이라는 CSS 선택자를 알게되어 적용했습니다.

  마지막으로 크게 어렵지는 않았지만, 빈 내용이 입력되었을때와 이미 있는 tag를 다시 입력하게 되는 경우를 확인해 이런 내용들이 추가되지 않도록 처리를 했습니다.

- 실행 방법

  입력창에 추가하고 싶은 Tag를 입력하고 Enter를 입력하면 해당 내용이 tag로 추가됩니다. 이미 추가한 태그를 삭제하고 싶다면 태그 옆의 x 버튼을 클릭하면 해당 태그가 삭제됩니다. 키보드의 tab키를 사용해도 입력창에 접근 및 tag 삭제를 할 수 있습니다.

- 참고
  - [HTML/CSS 스크롤바 숨기기 없애기 (스크롤 동작) - EasyEasy (쉽게쉽게)](https://gofnrk.tistory.com/48)
  - [[CSS] 선택자 :Focus-Within 알아보기 - webisfree](https://webisfree.com/2019-07-26/[css]-%EC%84%A0%ED%83%9D%EC%9E%90-focus-within-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0)

## AutoComplete

- 구현 방법과 이유

  처음에는 `datalist`를 사용하려고 했었지만, 해당 요소의 CSS를 변경하는데 어려움이 있어 `ul`을 사용했습니다.

  별도의 키워드 리스트가 없어, [과일 영단어 목록 - Enchanted Learning](https://www.enchantedlearning.com/wordlist/fruit.shtml)을 사용했습니다.

  단순 list로 자동 완성된 키워드들을 보여주는 방식으로 구현했기 때문에, 입력되고 있는 내용이 키워드 리스트의 단어들에 포함되어있는지 비교해 포함된 단어들을 보여주는 방식으로 구현했습니다.

- 어려웠던 점과 해결 방법

  앞서 언급했듯, '바퀴를 재발명하지 마라'는 이야기에 따라 `datalist`를 사용하려고 했으나 CSS 변경의 어려움으로 단순 list로 구현하며 추가해야할 이벤트들이 많아 어려움을 겪었습니다. 특히 구현 예시에는 없었던 내용이지만, 키보드의 tab으로도 해당 기능을 조작할 수 있도록 만들며 난관을 겪었습니다.

  우선 `a`, `input`, `button`, `select`등의 요소를 제외하고 일반적인 대다수의 요소는 포커스가 올라가지 않는다는 내용을 알게 되어, 자동 완성된 키워드 각각의 `li`에 `tabindex`를 추가해 포커스가 올라갈 수 있도록 했습니다.

  입력창 바깥 부분을 클릭/포커스가 이동하면 자동완성 키워드 리스트를 닫는 기능을 구현하기 위해서 처음에는 wrapper 부분에 `blur`이벤트를 적용하려 했으나, `blur`가 이벤트 버블링이 일어나지 않는다는 점과 이벤트를 등록한 요소가 초첨을 잃으면 바로 이벤트가 발생해버리기 때문에 요소 내부의 키워드 list를 탐색하거나, 클릭하게 되는 것도 `blur` 이벤트를 발생시켜 창이 사라져버리는 문제를 겪었습니다.

  이 문제를 해결하기 위해 고민하던 중 다음과 같은 내용을 발견하게 되었습니다. [Click outside element event using React Hooks - Kevin Felisilda](https://medium.com/@kevinfelisilda/click-outside-element-event-using-react-hooks-2c540814b661) 커스텀 hooks를 만들어 클릭이 발생한 요소가 컴포넌트 외부인지, 내부인지를 판단해 외부라면 창을 닫는 방법을 소개하는 내용으로 이 방법을 참고했으며 추가로 외부로 포커스의 이동도 감지할 수 있도록 이벤트를 추가했습니다.

- 실행 방법

  입력창을 처음 클릭하거나, 키보드의 `tab`키를 이용해 접근하면 자동 완성 가능한 단어의 목록이 보여집니다. 입력창에 내용을 입력하게되면, 해당 내용을 포함하고 있는 단어의 목록을 보여줍니다. 이 단어를 클릭하거나 `tab`을 이용해 접근한 후, `Enter`를 입력하면 해당 키워드가 자동으로 입력창에 입력됩니다. 입력창 오른쪽의 x 버튼을 클릭하면 입력창에 입력되어있는 내용이 지워지고, 다시 입력할 수 있도록 입력창으로 커서가 옮겨집니다. 현재 자동 완성 단어 목록에 일부 과일 영단어만 있으므로 해당 목록만 보여집니다.

- 참고
  - [Is it possible to style the drop-down suggestions when using HTML5 <datalist>? - stackoverflow](https://stackoverflow.com/questions/10062414/is-it-possible-to-style-the-drop-down-suggestions-when-using-html5-datalist)
  - [focusout, blur 이벤트 차이와 이해 - 마이구미](https://mygumi.tistory.com/321)
  - [blur - MDN](https://developer.mozilla.org/ko/docs/Web/API/Element/blur_event)
  - [Element: focusin event - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/focusin_event)
  - [focus와 blur [tabindex를 사용해서 모든 요소 포커스 하기] - JAVASCRIPT.INFO](https://ko.javascript.info/focus-blur#ref-2081)
  - [Click outside element event using React Hooks - Kevin Felisilda](https://medium.com/@kevinfelisilda/click-outside-element-event-using-react-hooks-2c540814b661)

## ClickToEdit

- 구현 방법과 이유

  `ClickToEdit`의 경우 더블클릭 이벤트를 등록해 더블클릭이 발생하면 `input`을 렌더링하고, 컴포넌트 외부를 클릭하거나 포커스가 옮겨지면 다시 `input`이 아닌 `p`를 렌더링 하는 방식으로 구현했습니다. 그리고 이 때 입력값을 `p`와 하단의 텍스트 영역에 나타나도록 구현했습니다.

  이전에 만든 커스텀 hooks를 다시 사용할 수도 있었지만, 이전 `AutoComplete`에서 문제가 되었던 `blur` 이벤트가 오히려 이 경우에는 원하는 기능을 구현하기에 충분하기 때문에 `blur` 이벤트를 사용했습니다.

  나이 입력의 경우 숫자만 입력 가능하며 음수는 입력할 수 없도록 구현했습니다.

- 어려웠던 점과 해결 방법

  크게 어려웠던 점은 없었지만, ClickToEdit을 잘 이해하지 못해 초기에는 `input`을 그대로 사용했다가 전혀 다른거라는걸 알고 다시 구현했습니다.
  더욱 간단하게는 `input`의 `readonly`를 활성화/비활성화 하는 방식으로도 구현이 가능할 거라고 생각됩니다.

- 실행 방법

  각 항목 오른쪽의 네모난 영역을 더블클릭하거나 키보드의 `tab`키로 접근해 `Enter`키를 입력하면 내용을 수정할 수 있도록 바뀝니다.
  내용을 수정하시고 외부를 클릭하거나 `tab`키로 포커스를 이동시키면 현재 입력한 내용을 보여주면 다시 수정할 수 없도록 변경되고, 입력했던 내용이 아래의 텍스트 영역에 업데이트 됩니다.

- 참고
  - [[TIL] React로 Click-To-Edit UI 구현하기 - alexjlee](https://velog.io/@alexjlee/TIL-React%EB%A1%9C-Click-To-Edit-UI-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0)
  - [How TO - Hide Arrows From Input Number - w3schools](https://www.w3schools.com/howto/howto_css_hide_arrow_number.asp)
  - [HTMLInputElement.select()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select)
