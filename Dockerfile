FROM python:3.13-slim

WORKDIR /docs
RUN useradd -m cumbuca
RUN chown cumbuca:cumbuca /docs

RUN curl -sSL https://install.python-poetry.org | python3 -

USER cumbuca
COPY --chown=cumbuca:cumbuca . .

RUN poetry config virtualenvs.create false && \
    poetry config installer.parallel true && \
    poetry install --no-dev
