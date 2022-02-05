FROM emscripten/emsdk:latest

RUN rm -rf /var/lib/apt/lists/*
RUN mkdir code
WORKDIR /code
