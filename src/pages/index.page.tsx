import axios from 'axios'
import { GetServerSideProps } from 'next'

export { default } from './Home'

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await axios.get(`${process.env.API_URL}/numbers`)

  return {
    props: {
      numbers: response.data.data[0],
    },
  }
}
