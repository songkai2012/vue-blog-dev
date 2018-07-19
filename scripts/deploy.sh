#!/usr/bin/env sh

git add -A
git commit -m "chore: changelog"
#git push
# git push origin refs/tags/v${NEW_VERSION}
git push --set-upstream git@github.com:songkai2012/vue-blog-dev master
#git push origin master
echo "✅ vue-blog-dev to Github."
# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd vuepress

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME
git init
git remote add blog-pro git@github.com:songkai2012/vue-blog.git
git pull blog-pro master
git add -A
git commit -m 'deploy'
git push --set-upstream git@github.com:songkai2012/vue-blog master
# git push origin master
echo "✅ vue-blog to Github."

cd -