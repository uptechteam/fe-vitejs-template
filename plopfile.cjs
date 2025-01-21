module.exports = function (plop) {
  plop.setGenerator('module', {
    description: 'Generate a new module with standard structure',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Module name (e.g., auth, payments)',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/modules/{{kebabCase name}}/index.ts',
        templateFile: 'plop-templates/index.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/modules/{{kebabCase name}}/api/index.ts',
        templateFile: 'plop-templates/index.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/modules/{{kebabCase name}}/components/index.ts',
        templateFile: 'plop-templates/index.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/modules/{{kebabCase name}}/constants/index.ts',
        templateFile: 'plop-templates/index.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/modules/{{kebabCase name}}/hooks/index.ts',
        templateFile: 'plop-templates/index.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/modules/{{kebabCase name}}/pages/index.ts',
        templateFile: 'plop-templates/index.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/modules/{{kebabCase name}}/templates/index.ts',
        templateFile: 'plop-templates/index.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/modules/{{kebabCase name}}/types/index.ts',
        templateFile: 'plop-templates/index.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/modules/{{kebabCase name}}/validations/index.ts',
        templateFile: 'plop-templates/index.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/modules/{{kebabCase name}}/README.md',
        templateFile: 'plop-templates/index.ts.hbs',
      },
    ],
  });
};
