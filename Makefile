.PHONY: build_dotnet build clean

build:
    build_angular

build_dotnet:
    cd dotnetapi && dotnet build