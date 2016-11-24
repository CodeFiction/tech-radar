module.exports = function (grunt) {
    grunt.initConfig({
        exec: {
            build_source: {
                cmd: 'dotnet restore dotnetapi/WebApi && dotnet build dotnetapi/WebApi'
            },
            //   build_tests: {
            //     cmd: 'dotnet restore dotnetapi/tests && dotnet build dotnetapi/tests'
            //   },
            //   run_tests: {
            //     cmd: 'dotnet test dotnetapi/tests'
            //   },
            build_pack: {
                cmd: 'dotnet publish ./dotnetapi/WebApi -c Release -o ./dist'
            }
        },
        clean: ['./dist/']
    });

    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['clean', 'exec']);
};