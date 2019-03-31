export const CLIENT_ID =
  process.env.NODE_ENV === "development"
    ? "e791aa2a7a64b3f766a2"
    : "b3a3c46bd66318367efa";
export const CLIENT_SECRET =
  process.env.NODE_ENV === "development"
    ? "e80cde65c7071286086077892f3336bc2a3f4576"
    : "dfd9fdc1da6a6b10e473280bf0a379513f1d154d";

export const PROXY =
  "https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token";
export const SM_MS_PROXY =
  "https://cors-anywhere.herokuapp.com/https://sm.ms/api/upload";
export const ACCESS_TOKEN = "ACCESS_TOKEN";

export const CONTENT = "content";
export const STYLE = "style";

export const BASIC_THEME_ID = "basic-theme";
export const CODE_THEME_ID = "code-theme";
export const MARKDOWN_THEME_ID = "markdown-theme";

export const ENTER_DELAY = 0.5;
export const LEAVE_DELAY = 0.0;

export const MARKDOWN_EXAMPLE = 
`使用时请将内容替换为自己的内容。

请阅读下方文本熟悉工具使用方法。

## 1. Markdown Nice 简介

- 支持自定义样式的 Markdown 编辑器
- 支持微信公众号排版
- 内容和自定义样式浏览器中实时保存
- 欢迎推荐主题，试用Beta版

## 2. 标题

在文字写书写不同数量的\`#\`可以完成不同的标题，如下：
# 一级标题
## 二级标题
### 三级标题

## 3. 无序列表

无序列表的使用，在符号\`-\`后加空格使用。如下：

- 无序列表1
- 无序列表2
- 无序列表

如果要控制列表的层级，则需要在符号\`-\`前使用空格。如下：

- 无序列表1
- 无序列表2
  - 无序列表2.1
  - 无序列表2.2

粘贴到微信编辑器后后**无序列表整体样式与微信一致**。

## 4. 有序列表

有序列表的使用，在数字及符号\`.\`后加空格后输入内容，如下：

1. 有序列表1
2. 有序列表2
3. 有序列表3

粘贴到微信编辑器后后**有序列表整体样式与微信一致**。

## 5. 引用

引用的格式是使用符号\`>\`后面书写文字，及可以使用引用。如下：

> 读一本好书，就是在和高尚的人谈话。 ——歌德

> 雇用制度对工人不利，但工人根本无力摆脱这个制度。 ——阮一峰

## 6. 粗体和斜体

粗体的使用是在需要加粗的文字前后各加两个\`*\`。

而斜体的使用则是在需要斜体的文字前后各加一个\`*\`。

如果要使用粗体和斜体，那么就是在需要操作的文字前后各加三个\`*\`。如下：

**这个是粗体**

*这个是斜体*

***这个是粗体加斜体***

## 7. 链接

微信公众号仅支持公众号内文章链接，故而不做演示，以免体验者粘贴到公众号内无法预览。

如下：\`[你是《未来世界的幸存者》么？](https://mp.weixin.qq.com/s/s5IhxV2ooX3JN_X416nidA)\`

## 8. 图片

插入图片，如果和文字在一行则无图例，否则有图例，格式如下：

![这里写图片描述](https://i.loli.net/2019/03/30/5c9eff84d81c4.png)

**可使用上方工具上传本地图片，感谢 SM.MS 图床助力**

## 9. 代码块

如果在一个行内需要引用代码，只要用反引号引起来就好，如下：

Use the \`printf()\`  function.

在需要高亮的代码块的前一行及后一行使用三个反引号，同时第一行反引号后面表面代码块所使用的语言，如下：

\`\`\`java
// FileName: HelloWorld.java
public class HelloWorld {
  // Java 入口程序，程序从此入口
  public static void main(String[] args) {
    System.out.println("Hello,World!"); // 向控制台打印一条语句
  }
}
\`\`\`

如果想要更换代码主题，可在上方挑选，不支持代码主题自定义。

其中**微信代码主题与微信官方一致**，有以下注意事项：

- 带行号且不换行，代码大小与官方一致
- 需要在代码块处标志语言，否则无法高亮
- 粘贴到公众号后，用鼠标点代码块内外一次，完成高亮

**其他主题不带行号且换行，代码大小与编辑器一致**

## 10. 分割线

可以在一行中用三个以上的星号、减号、底线来建立一个分隔线，同时需要在分隔线的上面空一行。如下：

---
****
___

## 11. 删除线

删除线的使用，在需要删除的文字前后各使用两个\`~\`，如下：

~~这是要被删除的内容。~~

## 12. 表格

可以使用冒号来定义表格的对齐方式，如下：

| 姓名 | 年龄 | 工作 |
| :--- |:---:| ---:|
| 小可爱 | 18 | 吃可爱多 |
| 小勇敢 | 20 | 爬勇敢树 |
| 小机智 | 22 | 看机智书 |

## 13. 脚注

脚注的使用中，会自动编号，**分为行内脚注和块脚注**，如果块脚注内容需要换行，那么**在换行内容前方加入tab或者4个空格**

行内脚注如下：

有人认为在大前端时代^[以前端开发为业务主导，https://en.wikipedia.org/wiki/Front-end_web_development]的背景下，移动端开发（Android、IOS）将逐步退出历史舞台。

块脚注如下：

全栈工程师[^全栈]在业务开发流程中起到了至关重要的作用。

[^全栈]: 掌握多种技能，并能利用多种技能独立完成产品的人

    https://baike.baidu.com/item/全栈工程师

## 14. 上标和下标

使用两个\`^\`包围可作为上标，如下：19^th^

使用两个\`~\`包围可作为下标，如下：H~2~O

## 15. 数学公式

待支持

## 16. UML

不支持，推荐使用\`https://www.draw.io/\` 或 \`https://www.processon.com/\` 制作好导入图片`;

export const MARKDOWN_OPTIONS = [
  {
    id: "normal",
    name: "默认主题"
  },
  {
    id: "orange",
    name: "橙色主题"
  },
  // {
  //   id: "title1",
  //   name: "标题示例1"
  // },
  // {
  //   id: "title2",
  //   name: "标题示例2"
  // },
  {
    id: "custom",
    name: "自定义"
  }
];

export const CODE_OPTIONS = [
  {
    id: "wechat",
    name: "微信代码主题"
  },
  {
    id: "atomOneDark",
    name: "atom-one-dark"
  },
  {
    id: "atomOneLight",
    name: "atom-one-light"
  },
  {
    id: "monokai",
    name: "monokai"
  },
  {
    id: "github",
    name: "github"
  },
  {
    id: "vs2015",
    name: "vs2015"
  },
  {
    id: "xcode",
    name: "xcode"
  }
];
