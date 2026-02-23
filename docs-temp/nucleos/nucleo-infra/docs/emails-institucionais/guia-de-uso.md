# Guia de Uso dos Emails Institucionais

Este guia reúne orientações para utilização dos emails institucionais da Cumbuca Dev.

Os emails institucionais fazem parte da comunicação oficial da comunidade, permitindo a representação dos núcleos, o contato com parceiros e o registro de interações organizacionais.

## O que é um email institucional

Um email institucional é um endereço vinculado à organização, criado para representar núcleos, funções ou áreas específicas.

Exemplos:

* [contato@cumbuca.dev](mailto:contato@cumbuca.dev)
* [infra@cumbuca.dev](mailto:infra@cumbuca.dev)
* [opensource@cumbuca.dev](mailto:opensource@cumbuca.dev)
* [pessoas-e-vagas@cumbuca.dev](mailto:pessoas-e-vagas@cumbuca.dev)

Esses endereços pertencem à estrutura organizacional da comunidade e permanecem os mesmos mesmo quando há transição de responsáveis.

## Funcionamento dos emails da Cumbuca Dev

Os emails institucionais seguem um modelo padronizado:

* As contas existem no servidor da Cumbuca Dev
* As mensagens podem ser acessadas via webmail
* Pode haver encaminhamento automático para Gmail ou outros destinos

Esse modelo garante flexibilidade de acesso e continuidade organizacional.

## Acesso via Webmail

O webmail é a interface padrão de acesso aos emails.

Acesse em: [https://webmail.cumbuca.dev](https://webmail.cumbuca.dev)

Para se logar, utilize as credenciais (email e senha) disponíveis no cofre Engenharia do 1Password.
Procure pelo padrão `webmail ...`.

Exemplos:

* `webmail contato@`
* `webmail infra@`
* `webmail documentacao@`

O webmail permite leitura, envio e gerenciamento de mensagens, de forma semelhante a outros clientes de email como Gmail ou Outlook.

## Recebimento automático (encaminhamento)

Alguns emails institucionais utilizam encaminhamento automático.

Nesse cenário:

* Mensagens enviadas ao email institucional são redirecionadas para os responsáveis
* O acompanhamento ocorre diretamente no Gmail ou destino configurado

O encaminhamento não altera o endereço institucional, apenas a forma de acesso às mensagens.

Caso seja necessário criar, remover ou ajustar encaminhamentos, abra uma issue direcionada ao **Núcleo Infra** em [Issues da Comunidade][issues-comunidade].

## Envio de mensagens

As mensagens podem ser enviadas de duas formas.

### Via Webmail

Através do acesso em: [https://webmail.cumbuca.dev](https://webmail.cumbuca.dev).

### Via Gmail

Quando configurado, o Gmail pode ser utilizado como interface de envio. Nesse modelo:

* O envio é realizado pelo servidor da Cumbuca Dev
* O destinatário visualiza o email institucional como remetente

Após a configuração, o endereço institucional passa a ficar disponível como opção de remetente dentro do Gmail. Ao escrever um novo email, você poderá escolher qual endereço deseja utilizar.

Exemplo:

No campo **“De:”**, será possível alternar entre:

[seuemail@gmail.com](mailto:seuemail@gmail.com)
[infra@cumbuca.dev](mailto:infra@cumbuca.dev)
[comunicacao@cumbuca.dev](mailto:comunicacao@cumbuca.dev)

Isso permite utilizar o Gmail normalmente, mantendo o envio institucional quando necessário.

Caso essa funcionalidade não esteja disponível, abra uma issue direcionada ao **Núcleo Infra** em [Issues da Comunidade][issues-comunidade].

## Uso dos emails institucionais

Os emails institucionais são utilizados para:

* Comunicação oficial dos núcleos
* Interações institucionais
* Contato com parceiros e comunidade
* Registros organizacionais

O uso deve estar alinhado às atividades da função ou núcleo representado.

## Boas práticas

Para manter a organização e a continuidade:

* Utilizar linguagem apropriada ao contexto institucional
* Evitar uso pessoal do endereço
* Manter organização das mensagens quando houver acesso direto
* Reportar dúvidas ou problemas por meio de issue direcionada ao **Núcleo Infra**

## Segurança e acesso

Quando houver acesso direto à conta:

* As credenciais devem ser mantidas em segurança
* Senhas não devem ser compartilhadas manualmente. Utilize exclusivamente o 1Password para gerenciamento e concessão de acesso
* Alterações de acesso devem ser solicitadas por meio de issue

## Suporte

O **Núcleo Infra** pode auxiliar em situações como:

* Falhas de recebimento
* Problemas de envio
* Reset de senha
* Ajustes de encaminhamento

Para isso, abra uma issue direcionada ao núcleo em [Issues da Comunidade][issues-comunidade].

[issues-comunidade]: https://github.com/cumbucadev/comunidade/issues
