// App Rules

function rules(isDevBuild) {
  return [

    // Typescript files
    { test: /\.ts$/, include: /src/, loader: 'ts-loader', }

  ];
};

exports.rules = rules;
