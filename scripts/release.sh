#!/bin/bash

echo "Select a option to release (input a serial number)："
echo

select VERSION in patch minor major "Specific Version"
  do
    echo
    if [[ $REPLY =~ ^[1-4]$ ]]; then
      if [[ $REPLY == 4 ]]; then
        read -p "Enter a specific version: " -r VERSION
        echo
        if [[ -z $REPLY ]]; then
          VERSION=$REPLY
        fi
      fi

      read -p "Release $VERSION - are you sure? (y/n) " -n 1 -r
      echo

      if [[ $REPLY =~ ^[Yy]$ ]]; then
        # pre release task
        npm run lint
        npm run test

        # bump version
        npm version $VERSION
        NEW_VERSION=$(node -p "require('./package.json').version")
        echo Releasing ${NEW_VERSION} ...

        # npm release
        npm publish
        echo "✅ Released to npm."

        # github release
        git add CHANGELOG.md
        git commit -m "chore: changelog"
        #git push
        # git push origin refs/tags/v${NEW_VERSION}
        git push --set-upstream git@github.com:songkai2012/vue-blog-dev master
        echo "✅ Released to Github."
        # 进入生成的文件夹
        cd vuepress
        # 如果是发布到自定义域名
        # echo 'www.example.com' > CNAME

        git init
        git pull
        git add -A
        git commit -m 'deploy'
         # 如果发布到 https://<USERNAME>.github.io/<REPO>
        git push --set-upstream git@github.com:songkai2012/vue-blog master
      else
        echo Cancelled
      fi
      break
    else
      echo Invalid \"${REPLY}\"
      echo "To continue, please input a serial number(1-4) of an option."
      echo
    fi
  done

