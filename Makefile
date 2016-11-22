.PHONY: build_dotnet build_angular build clean

build:
    build_angular

build_dotnet:
    cd dotnetapi && dotnet build

build_angular:
    cd radar-presentation && ng build && cp dist/* ../
 
