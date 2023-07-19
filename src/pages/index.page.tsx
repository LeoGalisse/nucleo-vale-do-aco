import axios from 'axios'
import { GetStaticProps } from 'next'

export { default } from './Home'

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await axios.get(`${process.env.API_URL}/numbers`)

    console.log(response.data.data[0])

    return {
      props: {
        numbers: response.data.data[0],
      },
      revalidate: 60 * 60 * 2, // 2 hours
    }
  } catch (error) {
    return {
      props: {
        numbers: {
          id: '2ce30d2f-235c-4615-890a-962d976fa99a',
          number_of_cities: 3,
          number_of_ejs: 17,
          number_of_employees: 161,
          number_of_institutes: 5,
        },
      },
      revalidate: 60 * 5, // 5 minutes
    }
  }
}
