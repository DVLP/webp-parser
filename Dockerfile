# To prevent long metadata waits before first run execute two commands
# $ docker pull emscripten/emsdk:3.1.3
# $ docker tag emscripten/emsdk:3.1.3 escripten-retagged
# then replace FROM with
# FROM escripten-retagged

FROM emscripten/emsdk:3.1.3

RUN rm -rf /var/lib/apt/lists/*
RUN mkdir code
WORKDIR /code
