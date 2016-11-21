module.exports = function (grunt) {
  grunt.initConfig({
    exec: {
      build_source: {
        cmd: 'dotnet restore dotnetapi/WebApi && dotnet build source/WebApi'
      },
      build_tests: {
        cmd: 'dotnet restore dotnetapi/tests && dotnet build dotnetapi/tests'
      },
      run_tests: {
        cmd: 'dotnet test dotnetapi/tests'
      },
      build_pack: {
        cmd: 'dotnet pack ./dotnetapi/WebApi -c Release -o ./dist'
      }
    }
  });

  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('default', 'exec');
};