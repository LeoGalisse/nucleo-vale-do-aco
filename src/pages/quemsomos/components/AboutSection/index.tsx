import { AboutContent, AboutText, AboutTitle, AboutContainer } from './styles'

export function AboutSection() {
  return (
    <AboutContainer>
      <AboutContent>
        <AboutTitle>Sobre</AboutTitle>
        <AboutText>
          Fazemos parte do Movimento Empresa Júnior, sendo o núcleo responsável
          por representar as empresas Juniores do Vale do Aço e Médio
          Piracicaba. Nossa missão é Transformar o Vale do Aço através do
          desenvolvimento e união das EJs do NúVA e crescimento da rede,
          impactando e transformando empresários juniores em líderes capazes de
          atingir seus objetivos e revolucionar sua realidade.
          <br />
          <br /> O núcleo é formado atualmente por 17 empresas juniores da
          região dos mais variados cursos de graduação. Cada empresa é formada
          por estudantes de ensino superior que trabalham voluntariamente
          realizando projetos para cliente reais.
          <br />
          <br /> Nosso time é formado por quatro diretorias: presidência do
          conselho, presidência executiva, diretoria de expansão e diretoria de
          desenvolvimento. Cada uma delas também é composta por empresários
          juniores que assumiram o desafio de prestar suporte para todas as
          empresas da região. Estas pessoas têm como objetivo alavancar os
          resultados e a experiência dessas pessoas para que se desenvolvam cada
          vez mais.
        </AboutText>
      </AboutContent>
    </AboutContainer>
  )
}
