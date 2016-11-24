module.exports = function (grunt) {
    grunt.initConfig({
        exec: {
            build_source: {
                cmd: 'dotnet restore src/WebApi && dotnet build src/WebApi'
            },
            //   build_tests: {
            //     cmd: 'dotnet restore src/tests && dotnet build src/tests'
            //   },
            //   run_tests: {
            //     cmd: 'dotnet test src/tests'
            //   },
            build_pack: {
                cmd: 'dotnet publish ./src/WebApi -c Release -o ./dist'
            }
        },
        clean: ['./dist/']
    });

    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['clean', 'exec']);
};