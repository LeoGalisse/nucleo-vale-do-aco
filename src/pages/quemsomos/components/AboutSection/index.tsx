import { AboutContent, AboutText, AboutTitle, AboutContainer } from './styles'

export function AboutSection({ about }: any) {
  return (
    <AboutContainer>
      <AboutContent>
        <AboutTitle>Sobre</AboutTitle>
        <AboutText>
          {about &&
            about.map((item: Array<string>) => {
              return (
                <div key={item.length}>
                  <p>{item}</p>
                  <br></br>
                </div>
              )
            })}
        </AboutText>
      </AboutContent>
    </AboutContainer>
  )
}
