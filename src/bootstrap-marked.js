angular.module('schemaForm-marked', ['schemaForm', 'hc.marked']).config(
['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider', 'markedProvider',
  function(schemaFormProvider,  schemaFormDecoratorsProvider, sfPathProvider, markedProvider) {
    // set default option of marked
    markedProvider.setOptions({gfm: true});

    var marked = function(name, schema, options) {
    if (schema.type === 'string' && schema.format == 'markdown') {
      var f = schemaFormProvider.stdFormObj(name, schema, options);
      f.key  = options.path;
      f.type = 'marked';
      options.lookup[sfPathProvider.stringify(options.path)] = f;
      return f;
    }
  };

    schemaFormProvider.defaults.string.unshift(marked);

  //Add to the bootstrap directive
    schemaFormDecoratorsProvider.addMapping('bootstrapDecorator', 'marked',
    'directives/decorators/bootstrap/marked/marked.html');
    schemaFormDecoratorsProvider.createDirective('marked',
    'directives/decorators/bootstrap/marked/marked.html');
  }]);
