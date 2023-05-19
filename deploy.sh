#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
echo 'docs-new.tuxcare.com' > CNAME

git config --global user.email "bshyshka@gmail.com"
git config --global user.name "circle-ci"

git init
git add -A
git commit -m 'deploy [skip ci]'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# static html pages are going to be deployed to gh-pages branch
git push -f git@github.com:bogdanssh/tuxcare-documentation.git master:gh-pages

cd -
