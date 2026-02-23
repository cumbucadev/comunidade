# Como funciona o sistema de emails da Cumbuca Dev

Este documento explica, de forma simples, como funciona a infraestrutura de emails da Cumbuca Dev.
A proposta é ajudar qualquer pessoa da comunidade a compreender o funcionamento básico do sistema e
como seus componentes se conectam.

## Visão geral

Quando alguém envia um email para um endereço como `contato@cumbuca.dev`, existe um conjunto de tecnologias operando nos bastidores para garantir que essa mensagem seja entregue corretamente.

De forma simplificada, o processo ocorre da seguinte maneira:

* O domínio identifica a organização
* O DNS direciona a mensagem
* O servidor recebe o email
* A mensagem é armazenada
* Usuários acessam o conteúdo

## O domínio

O domínio `cumbuca.dev` é o que permite que a comunidade possua emails próprios. Ele funciona como o
endereço oficial da organização na internet e é um elemento essencial para a existência dos emails
institucionais.

O domínio foi adquirido via [WordPress.com](https://wordpress.com/) e sua renovação é realizada
anualmente por meio da plataforma.

_Caso seja necessário acessar o WordPress.com e não possua permissão, uma issue direcionada ao_
_Núcleo Infra deve ser aberta em: <https://github.com/cumbucadev/comunidade/issues>._

## O DNS (o direcionador do sistema)

O DNS pode ser entendido como um sistema de localização da internet. Ele informa para onde cada
serviço do domínio deve apontar. No caso dos emails, o DNS contém uma configuração essencial:
**o registro MX**.

### O que é o registro MX

O registro MX é a configuração responsável por definir para qual servidor os emails do domínio devem
ser enviados.

Quando alguém envia um email para a Cumbuca Dev:

1. O servidor de origem consulta o DNS
2. O DNS informa qual servidor recebe emails
3. A mensagem é entregue

Sem o registro MX, os emails não poderiam ser recebidos.

### Onde isso é configurado

As configurações de DNS da Cumbuca Dev são gerenciadas no
[Cloudflare](https://www.cloudflare.com/).

Dentro do Cloudflare, em `DNS → Records`, é possível visualizar e administrar os registros do
domínio, incluindo aqueles do tipo MX.

_Caso seja necessário acessar o Cloudflare e não possua permissão, uma issue direcionada ao_
_Núcleo Infra deve ser aberta em: <https://github.com/cumbucadev/comunidade/issues>._

## O servidor de email

O servidor de email é o sistema responsável por processar as mensagens. Ele executa duas funções
principais:

* Receber e enviar emails
* Armazenar mensagens

Na infraestrutura da Cumbuca Dev, o servidor é mantido pela provedora de hospedagem utilizada pela
comunidade.

## O webmail

Na Cumbuca Dev utilizamos o [Roundcube](https://roundcube.net/) como webmail, a interface que permite acessar emails diretamente pelo navegador.

Acesso o webmail da Cumbuca Dev em: <https://webmail.cumbuca.dev>

O webmail funciona de maneira semelhante ao Gmail ou Outlook, oferecendo recursos de leitura, envio
e organização de mensagens.

O Roundcube não armazena mensagens. Ele apenas exibe o conteúdo presente no servidor.

## O painel de gerenciamento

O gerenciamento das contas é realizado através do
[ISPConfig](https://www.ispconfig.org/), o painel administrativo utilizado para administrar a
infraestrutura de emails.

O painel permite:

* Criar emails
* Ajustar encaminhamentos
* Gerenciar configurações

O ISPConfig não transporta mensagens. Ele apenas administra o sistema e escreve configurações para o
servidor.

O endereço do painel administrativo da Cumbuca Dev é: <https://isp.umbahost.com.br:8080>

_Caso seja necessário acessar o painel e não possua permissão, uma issue direcionada ao_
_Núcleo Infra deve ser aberta em: <https://github.com/cumbucadev/comunidade/issues>._

## Como os emails chegam até você

Quando alguém envia um email para a Cumbuca Dev:

1. O DNS informa o servidor correto
2. O servidor recebe a mensagem
3. A mensagem é armazenada na caixa de entrada
4. O webmail ou Gmail exibem o conteúdo

## Encaminhamento (forward)

A Cumbuca Dev utiliza encaminhamento automático em diversas contas. Isso significa que:

* O email institucional permanece ativo
* As mensagens são redirecionadas para os responsáveis

Esse modelo evita o compartilhamento de credenciais e facilita transições de responsabilidade.

## Conclusão

O sistema de emails da Cumbuca Dev é formado por diferentes componentes que operam em conjunto.

* WordPress.com → registro e propriedade do domínio
* Domínio (cumbuca.dev) → identidade institucional
* Cloudflare → direcionamento e resolução DNS
* Servidor de email → transporte, armazenamento e acesso
* Roundcube → interface de webmail
* ISPConfig → gerenciamento da infraestrutura

Essa estrutura garante que a comunidade disponha de emails institucionais estáveis, organizados e
sustentáveis.
