#!/bin/bash

rsync -av --progress ../ . --exclude='webready/' --exclude='.gitlab-ci.yml' --exclude='.gitignore' --exclude='.git/'
ebb -x figs/*/*.png
make4ht thesis.tex "mathjax,fn-in"
