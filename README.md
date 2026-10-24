# Rb Clínica Agenda

Agenda mobile-first para a rotina do salão Rb Clínica. A experiência atual permite escolher qualquer data, registrar atendimento com cliente, serviço, profissional, duração, preço e pagamento, e confirmar cada horário manualmente.

## Estado atual

Este repositório contém a interface estática pronta para abrir em qualquer navegador moderno. Os registros são guardados no `localStorage` do próprio navegador; portanto, nesta versão eles não são compartilhados entre celulares nem possuem backup no servidor.

## Executar localmente

Abra `dist/index.html` em um navegador ou sirva a pasta `dist` com qualquer servidor de arquivos estáticos.

## Verificação disponível

Com o Node.js instalado, execute:

```bash
node verify-confirmation.cjs
```

O script valida o fluxo de confirmação manual, o seletor de data e os elementos principais da agenda.

## Próxima etapa: sincronização entre celulares

Para a versão de uso diário em até três celulares, a próxima implementação deve migrar os dados para uma API no Vercel com banco Neon Postgres. O banco e as credenciais não estão incluídos neste repositório.

No Vercel, conecte este repositório e, quando a API estiver adicionada, cadastre as variáveis de ambiente `DATABASE_URL` e `SALON_PIN_HASH`. Nunca publique esses valores no GitHub.

## Estrutura

- `dist/index.html`: agenda em HTML, CSS e JavaScript sem dependências.
- `verify-confirmation.cjs`: verificação estática do fluxo principal.
- `PLANS.md`: decisões, escopo e plano do produto.
- `AGENTS.md`: regras de trabalho do projeto.

