import { api } from '@component/lib/axios'
import { AboutContent, AboutText, AboutTitle, AboutContainer } from './styles'
import { useQuery } from '@tanstack/react-query'

export function AboutSection() {
  const { data: about } = useQuery(['about'], async () => {
    const response = await api.get('/about')

    const res = response.data.about_section.split('/')

    return res
  })

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
                  <br />
                </div>
              )
            })}
        </AboutText>
      </AboutContent>
    </AboutContainer>
  )
}
