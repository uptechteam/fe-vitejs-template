#!/bin/sh

git config remote.template.url >&- || git remote add template git@github.com:uptechteam/fe-vitejs-template.git
