import type { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Navbar from '../../components/navbar'

import { data } from '../../data'

const emptyMessage = {
  name: '',
  message: '',
  ending: '',
}

const Letter: NextPage = (props: any) => {
  const router = useRouter()
  const { name } = router.query
  const [message, setMessage] = useState(emptyMessage)

  useEffect(() => {
    if (router.isReady) {
      const tmpMessage = data['messages'].find((e) => e.name == name) || emptyMessage
      setMessage(tmpMessage)
    }
  }, [router.isReady, name])

  return (
    <div>
      <Navbar {...props} />
      {message.name != '' && <div>{message.message + message.ending}</div>}
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = data['messages'].map((e) => {
    return { params: { name: e.name } }
  })
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      hospital: data['hospital'],
      dose: data['dose'],
      messages: data['messages'],
    },
  }
}

export default Letter
