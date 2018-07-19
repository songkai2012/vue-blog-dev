#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e
# github release
git add -A
git commit -m "chore: changelog"
#git push
# git push origin refs/tags/v${NEW_VERSION}
git push --set-upstream git@github.com:songkai2012/vue-blog-dev master
echo "✅ Released to Github."
# 生成静态文件
npm run build

# 进入生成的文件夹
cd vuepress

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f --set-upstream git@github.com:songkai2012/songkai2012.github.io.git master

cd -