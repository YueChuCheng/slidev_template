---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
drawings:
  persist: false
title: Welcome to Slidev
---

# Slidev note
## Yue-Chu Cheng

---

# Reference
  - This repo refer to 
    - [gabriel-del/slidev](https://github.com/gabriel-del/slidev)
    - [Slidev](https://github.com/slidevjs/slidev)


---

# Build Single Page Application on GitHub Pages server
  - Local
    1. Create a slidev repo ```yarn create slidev```, or you can copy the template from [Single entry slidev](), [Multi-entry slidev](https://github.com/YueChuCheng/slidev_template).
    2. Check package.json, "dependencies": 
    ```json
    "dependencies": {
    "@slidev/cli": "^0.48.1",
    "@slidev/theme-default": "latest",
    "@slidev/theme-seriph": "latest",
    "vue": "^3.4.21",
    "playwright-chromium": "^1.21.1"
    }
    ```
    3. Modified the "scripts" according to the repo name, e.g.
    ```json
    "build": "slidev build {.MD_FILE_PATH} -d --base /{REPO_NAME}/"
    ```
    4. Creat git action .yml file e.g. ```REPO/.github/workflows/deploy.yml```


---


# Build Single Page Application on GitHub Pages server
  - On GitHub site
    1. Create a repo
    2. Open write and read permissions under ```REPO>>Settings>>Action>>General>>Workflow permissions```
    3. Select the **gh-pages** branch to deploy, ```REPO>>Settings>>Pages>>Build and deployment>>Branch```
    4. Publish the local repo to remote
    5. Wait for deploying the websit
    6. Finish!! Check your website under ```https://yuechucheng.github.io/REPO/```
    * <span style="click=1; color:red;font-weight:900"> Currently, the Slidev is not allow to create the website under <i>username.github.io</i>.</span>

---
layout: image
# test
image:  ./deploy_example.png
backgroundSize: contain
---
# Wait for deploying the websit




<!-- <img border="rounded" src=" ../images/deploy_example.png" alt=""> -->