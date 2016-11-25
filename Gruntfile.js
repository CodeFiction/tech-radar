module.exports = function(grunt) {
    grunt.initConfig({
        exec: {
            build_source: {
                cmd: 'dotnet restore src/Codefiction.TechRadar && dotnet build src/Codefiction.TechRadar'
            },
            build_tests: {
                cmd: 'dotnet restore test/Codefiction.TechRadar.Tests && dotnet build test/Codefiction.TechRadar.Tests'
            },
            run_tests: {
                cmd: 'dotnet test test/Codefiction.TechRadar.Tests'
            },
            build_pack: {
                cmd: 'dotnet publish ./src/Codefiction.TechRadar -c Release -o ./dist'
            }
        },
        clean: ['./dist/']
    });

    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['clean', 'exec']);
};