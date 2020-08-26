const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  prompting() {
    return this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your project name",
        default: this.appname,
      },
    ]).then((answer) => {
      this.answer = answer;
    });
  }
  writing() {
    // 所有需要生成的文件的相对路径
    const templates = [
      ".browserslistrc",
      ".editorconfig",
      ".env.development",
      ".env.production",
      ".eslintrc.js",
      ".gitignore",
      "babel.config.js",
      "package.json",
      "postcss.config.js",
      "README.md",
      "public/favicon.ico",
      "public/index.html",
      "src/App.vue",
      "src/main.js",
      "src/router.js",
      "src/assets/logo.png",
      "src/components/HelloWorld.vue",
      "src/store/actions.js",
      "src/store/getters.js",
      "src/store/index.js",
      "src/store/mutations.js",
      "src/store/state.js",
      "src/utils/request.js",
      "src/views/About.vue",
      "src/views/Home.vue",
    ];

    templates.forEach((path) => {
      this.fs.copyTpl(
        this.templatePath(path),
        this.destinationPath(`output/my-vue/${path}`),
        this.answer
      );
    });
  }
};
