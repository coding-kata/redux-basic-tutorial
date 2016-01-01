# Redux Basic tutorial on the hand

Copy [Basics | Redux](http://rackt.org/redux/docs/basics/index.html "Basics | Redux") by the hand.

## Note

- pure functionは副作用を持たない関数
- `type`はシリアライズ出来るものを推奨してるので`Symbol`はダメそう
- Reducerの名詞とも動詞ともいえない命名規則は `combineReducers` のため
    - `todos`とか`visibilityFilter`が何を受け取り何を返すのか関数名から分からない
    - reducesの中にいるというコンテキストがあって少しだけ意味を省略できてるけど。。
- [rackt/react-redux](https://github.com/rackt/react-redux "rackt/react-redux")のAPIはどうみても変
    - 使わないほうがよさそう
    - [egghead.io_redux_course_notes/18-Extracting_Container_Components_(VisibileTodoList_&_AddTodo).md at master · tayiorbeii/egghead.io_redux_course_notes](https://github.com/tayiorbeii/egghead.io_redux_course_notes/blob/master/18-Extracting_Container_Components_(VisibileTodoList_&_AddTodo).md "egghead.io_redux_course_notes/18-Extracting_Container_Components_(VisibileTodoList_&amp;_AddTodo).md at master · tayiorbeii/egghead.io_redux_course_notes")
    - 普通に`subscribe` and `unsubscribe`したほうがわかりやすさがある。
    - flux-utilsの[Container](https://github.com/facebook/flux/blob/master/docs/Flux-Utils.md#container "Container")の方がよく隠せてる

```js
  componentDidMount() {
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
```

- Reducersの合成は型がないと厳しそう
- [Getting Started with Redux - Course by @dan_abramov @eggheadio](https://egghead.io/series/getting-started-with-redux "Getting Started with Redux - Course by @dan_abramov @eggheadio")は面白かった
    - [Basics | Redux](http://rackt.org/redux/docs/basics/index.html "Basics | Redux")をなぞった内容だった
    - チュートリアルという名前なのにリファクタリングとかやってて混乱するので、動画を見たほうが良い
    - [Getting Started with Redux - Course by @dan_abramov @eggheadio](https://egghead.io/series/getting-started-with-redux "Getting Started with Redux - Course by @dan_abramov @eggheadio")の"Redux: Implementing combineReducers() from Scratch"あたりまでで一区切り
    - それ以降はReactのチュートリアルとして見たほうが良さそう
        - Reactのリファクタリングを学べる感じ
        - Redux+Reactから[react-redux](https://github.com/rackt/react-redux "react-redux")にリファクタリングしていくけど、どんどん読みにくくなる感じ
    - Reactの[Context](https://facebook.github.io/react/docs/context.html "Context")が[unstableだから別の方法...](https://egghead.io/lessons/javascript-redux-passing-the-store-down-with-provider-from-react-redux)みたいな話は何か危ない感じになってた
    - 動画自体は聞きやすいし書き起こしあるので面白い
    - 字幕補助: [Greasemonkey script egghead: floting transcript](https://gist.github.com/azu/e4a1a06878de81101561 "Greasemonkey script egghead: floting transcript")
- Reduxはデータが中心な気がする
    - APIが複雑(省略出来ることによる複雑)なのでデータがどこからきてるのかが、コード上で追うのが難しい感じがする
    - 読みやすいコードという設計ではないのかも