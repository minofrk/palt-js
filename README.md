@minofrk/palt
===============================================================================

![](https://img.shields.io/npm/v/@minofrk/palt.svg?style=flat-square)
![](https://img.shields.io/travis/com/minofrk/palt-js.svg?style=flat-square)
![](https://img.shields.io/github/license/minofrk/palt-js.svg?style=flat-square)

グレゴリオ暦（年/月/日）と以下の暦との間で相互変換を行うライブラリです。

- [紫亞数](http://conlinguistics.org/arka/data_palt_2.html)
- [メル暦](http://conlinguistics.org/arka/data_palt_1.html)
- [イムル暦](http://mindsc.ape.jp/klel/yui.cgi?rein=imulpalt&ziko=ilm&axn=axnyui&ism=ismyui)

現状整数値以外の取り扱いに対応していません（エラーになります）。

Install
-------------------------------------------------------------------------------

ECMAScript 5 の環境では `Number.isSafeInteger` の Polyfill が必要です。

    npm install --save @minofrk/palt

### Browser (UMD)

[Releases](https://github.com/minofrk/palt-js/releases) にあるタグを貼り付けるか、ダウンロードしたファイルを何らかの方法で読み込むことで利用できます。ブラウザの場合はグローバル変数の `paltjs` 以下にライブラリが展開されます。

API
-------------------------------------------------------------------------------

```typescript
import { xiaalx, melpalt, imulpalt } from '@minofrk/palt';
```

`YearMonthDay` の定義は [src/types.ts](src/types.ts) にあります。

### 紫亞数

- `xiaalx.encode(YearMonthDay): number`
- `xiaalx.decode(number): YearMonthDay`

### メル暦

- `melpalt.encode(YearMonthDay): YearMonthDay`
- `melpalt.decode(YearMonthDay): YearMonthDay`

### イムル暦

- `imulpalt.encode(YearMonthDay): YearMonthDay`
- `imulpalt.decode(YearMonthDay): YearMonthDay`

Example
-------------------------------------------------------------------------------

```typescript
import { melpalt } from '@minofrk/palt';

const milpalt = melpalt.decode({ year: 0, month: 1, day: 1 });

console.log(milpalt); // { year: 1988, month: 11, day: 30 }
```

License
-------------------------------------------------------------------------------

See [LICENSE](LICENSE)
