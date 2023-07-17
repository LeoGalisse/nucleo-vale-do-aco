import axios from 'axios'
import { GetStaticProps } from 'next'

export { default } from './Home'

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get(`${process.env.API_URL}/numbers`)

  return {
    props: {
      numbers: response.data.data[0],
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
