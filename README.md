# zuo-er-ting-feng

## 背景

* 笔者在学习[左耳听风的课程](https://time.geekbang.org/column/intro/100002201?tab=catalo)时，感觉收获很大，特此记录一下，以便日后查阅，也希望能帮助到其他人!

## website doc project

* doc template: [rust mdBook](https://github.com/rust-lang/mdBook);

### init

```sh

# .../zuo-er-tin-feng
pwd

# install mdBook
cargo install mdbook

# init mdBook docs
mdbook init ./docs

cd ./docs

mdbook serve

```

### build

```sh
cd ./docs

mdbook build

```

## git workflow

* branch *dev*: 更新内容，提交到远程仓库，然后合并到 *main* 分支;
* branch *main*: 被保护的分支，只能通过 *dev* 分支合并代码;
* branch *dist*: 把main分支合到这个分支，用于存放 *mdBook* 生成的静态页面;
