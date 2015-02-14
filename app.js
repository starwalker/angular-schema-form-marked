/*global angular */
'use strict';

/**
 * The main app module
 * @name app
 * @type {angular.Module}
 */
var lightApp = angular.module('lightApp', ['schemaForm', 'schemaForm-marked'])
.controller('MarkedController', function($scope){
  $scope.schema =  {
      type: "object",
      title: "Post",
      required: ["title", "content"],
      properties: {
          title: {
              title: "Title [Mandatory, 12 to 90 characters]",
              type: "string"
          },
          content: {
              title: "Content [MarkDown Syntax, 24 to 20480 characters. Drag right bottom to enlarge]",
              type: "string"
          }
      }
  };

  $scope.form = [
      {
          type: "fieldset",
          title: "Post",
          items: [
              {
                  type: "tabs",
                  tabs: [
                      {
                          title: "Edit Content",
                          items: [
                              {
                                  key: "title"
                              },
                              {
                                  key: "content",
                                  type: "textarea"
                              }
                          ]
                      },
                      {
                          title: "Preview",
                          items: [
                              {
                                  type: "help",
                                  helpvalue: "<br><h4>Content</h4><br>"
                              },
                              {
                                  key: "content",
                                  type: "marked"
                              }
                          ]
                      }
                  ]
              }
          ]
      },
      {
        type: "submit",
        style: "btn-info",
        title: "OK"
      }
  ]


  $scope.model = {};

  $scope.submitted = function(form){
    $scope.$broadcast('schemaFormValidate')
    console.log($scope.model);
  };
});
