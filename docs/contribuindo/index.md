# Como posso contribuir?

Antes de tudo, obrigada pelo interesse em contribuir com a [cumbuca.dev](https://cumbuca.dev)!

Antes de começar, é importante ler o nosso [Código de Conduta](./codigo-de-conduta.md) para entender as diretrizes de comportamento e colaboração dentro da comunidade.

Vamos focar em como você pode ajudar a melhorar a documentação da [cumbuca.dev](https://cumbuca.dev), mas sinta-se à vontade para explorar outras formas  e projetos de contribuir!

Vamos lá!

## :material-github: O que é Git e GitHub?

Se você ainda não teve contato com Git e GitHub, sugerimos que você visite nosso repositório [GitCaos🔥](https://github.com/cumbucadev/gitcaos)! Lá temos uma explicação de conceitos base, além de guiar vocês para realizar seu primeiro commit!

Quaisquer dúvidas, pode abrir uma issue lá mesmo!

## :question: O que preciso para contribuir?

Antes de começar a contribuir, você vai precisar de:

- `Python >= 3.13` (Possivelmente já vem instalado no seu computador)
- `pip` (gerenciador de pacotes do Python, geralmente já vem com o Python)
- `poetry` (gerenciador de dependências e ambientes virtuais para Python, mais informações em [https://python-poetry.org/docs/](https://python-poetry.org/docs/#installation))

A documentação da [cumbuca.dev](https://cumbuca.dev) está [hospedada neste repositório](https://github.com/cumbucadev/docs), que é construído com [MkDocs](https://www.mkdocs.org/) e o tema [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/).

Basta forkar o repositório e cloná-lo localmente com o comando:

```bash
git clone {url_do_seu_fork}
```

Uma vez clonado, navegue até a pasta do repositório:

```bash
cd /pasta/do/repositorio
```

Agora, instale as dependências do projeto usando o Poetry:

```bash
poetry install && pre-commit install
```

Crie uma branch para suas alterações:

```bash
git checkout -b minha-nova-branch
```

## :book: Estrutura da Documentação

A documentação está organizada na pasta `docs/`. Cada arquivo Markdown (`.md`) representa uma página ou seção do site. A estrutura de navegação do site é definida no arquivo `mkdocs.yaml`, onde você pode ver como as páginas estão organizadas.

## :memo: Criando e editando a documentação

Os arquivos da documentação estão na pasta `docs/`. Você pode editar os arquivos Markdown (`.md`) diretamente nessa pasta. Caso precise saber mais sobre a sintaxe Markdown, consulte este [guia rápido](https://www.markdownguide.org/cheat-sheet/).

Depois de fazer suas alterações, você tem que adicionar seu arquivo no `mkdocs.yaml` para que ele apareça na navegação do site. Veja como fazer isso no exemplo abaixo:

```yaml
nav:
  - Página inicial: index.md
  - Código de Conduta: codigo-de-conduta.md
  - Como contribuir:
    - contribuindo/index.md
    - contribuindo/meu_novo_arquivo.md  # <- Adicione seu arquivo aqui, ou onde fizer sentido
```

Uma vez feito isso você pode visualizar as mudanças localmente rodando o comando:

```bash
mkdocs serve
```

Agora basta acessar `http://localhost:8000` no seu navegador para ver as mudanças!

## :twisted_rightwards_arrows: Enviando suas contribuições

Depois de fazer suas alterações e verificar que tudo está funcionando corretamente, você pode enviar suas contribuições de volta para o repositório oficial da [cumbuca.dev](https://cumbuca.dev) seguindo estes passos:

1. Faça um commit (ou vários!) com uma mensagem clara e descritiva do que foi alterado:

```bash
git add arquivos/modificados
git commit -m "Descrição clara do que foi alterado"
```

O `pre-commit` irá executar, corrigindo e te avisando sobre possíveis problemas antes de permitir o commit. Caso algo seja apontado, corrija os problemas indicados, adicione os arquivos novamente e tente fazer o commit novamente.

1. Envie suas alterações para o seu fork no GitHub:

```bash
git push origin minha-nova-branch
```

1. Vá até o repositório oficial da [cumbuca.dev](https://github.com/cumbucadev/docs) e abra um Pull Request com suas alterações. Descreva claramente o que foi alterado e por quê.
