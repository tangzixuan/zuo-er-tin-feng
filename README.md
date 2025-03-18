# zuo-er-ting-feng

## 背景

* 最近在学习[左耳听风的课程](https://time.geekbang.org/column/intro/100002201?tab=catalo)时，感觉收获很大，特此记录一下，以便日后查阅，也希望能帮助到其他人!

## website doc project

* doc template: [rust mdBook](https://github.com/rust-lang/mdBook)

### init

```sh

# .../zuo-er-tin-feng
pwd

# install rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# install mdBook
cargo install mdbook

# init mdBook docs
mdbook init ./docs

cd ./docs

mdbook serve

```

### build & deploy

```sh
cd ./docs

mdbook build

sh docs/deploy.sh

```

## git workflow

* branch *dev*: 更新内容，构建dist产物（cloudflare不支持rust环境，只能本地构建）,提交到远程仓库，然后合并到 *main* 分支;
  * 避免仓库体积过大，不要提交dist产物，直接本地cloudflare wrangler发布部署；
* branch *main*: 被保护的分支，只能通过 *dev* 分支合并代码;
